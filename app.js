document.addEventListener('DOMContentLoaded', () => {
    // --- Variables Globales y Selectores del DOM ---
    let medications = [];
    let medicationsWithOriginalIndex = [];
    let currentFilter = 'Todos';

    const listContainer = document.getElementById('medication-list');
    const searchBar = document.getElementById('searchBar');
    const noResults = document.getElementById('no-results');
    const familyFilterContainer = document.getElementById('familyFilter');
    const openSidebarBtn = document.getElementById('openSidebarBtn');
    const sidebar = document.getElementById('sidebar');
    const insulinGuideContainer = document.getElementById('insulin-guide');
    const cardTemplate = document.getElementById('medication-card-template');
    const modal = document.getElementById('medicationModal');
    const modalContentWrapper = document.getElementById('modal-content-wrapper');

    // --- Función para generar URL de imagen personalizada ---
    const generateImageUrl = (name, presentation) => {
        const text = `${name}\\n${presentation}`;
        const encodedText = encodeURIComponent(text);
        return `https://placehold.co/400x200/e0f2fe/083344?text=${encodedText}&font=inter`;
    };
    
    // --- Función para normalizar texto ---
    const normalizeText = (str) => {
        if (!str) return '';
        return str
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
    };

    // --- Función para renderizar las tarjetas de medicamentos ---
    const renderMedications = (meds) => {
        const sortedMeds = meds.sort((a, b) => {
            const nameComparison = a.name.localeCompare(b.name);
            if (nameComparison !== 0) return nameComparison;
            return a.presentation.localeCompare(b.presentation);
        });

        listContainer.innerHTML = '';
        noResults.classList.toggle('hidden', sortedMeds.length > 0);

        sortedMeds.forEach((med) => {
            const cardClone = cardTemplate.content.cloneNode(true);
            const cardElement = cardClone.querySelector('article');
            
            cardElement.dataset.index = med.originalIndex;
            cardElement.querySelector('.card-img').src = med.image;
            cardElement.querySelector('.card-img').alt = `Imagen de ${med.name}`;
            cardElement.querySelector('.card-name').textContent = med.name;
            cardElement.querySelector('.card-presentation').textContent = med.presentation;
            cardElement.querySelector('.card-family').textContent = med.family;
            cardElement.querySelector('.card-uses').textContent = med.uses;

            listContainer.appendChild(cardClone);
        });
    };
    
    // --- Funciones para el Modal ---
    const openModal = (med) => {
        let calculatorHtml = '';
        if (med.isCalculable) {
            calculatorHtml = `
                <div class="mt-6 pt-4 border-t">
                    <h4 class="font-semibold text-slate-800 mb-2 text-base">Calculadora de Dosis Pediátrica</h4>
                    <div class="flex items-center space-x-2">
                        <input type="number" placeholder="Peso en kg" class="weight-input-modal border border-slate-300 rounded-md p-2 w-28">
                        <button class="calculate-btn-modal bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">Calcular</button>
                    </div>
                    <div class="result-div-modal mt-2 text-blue-800 font-semibold"></div>
                </div>
            `;
        }

        modalContentWrapper.innerHTML = `
            <div class="flex justify-between items-center p-5 border-b border-slate-200 sticky top-0 bg-white">
                <h3 id="modalTitle" class="text-xl font-bold text-slate-900">${med.name} - ${med.presentation}</h3>
                <button id="closeModalBtn" aria-label="Cerrar modal" class="text-slate-400 hover:text-slate-800 text-3xl">&times;</button>
            </div>
            <div class="overflow-y-auto">
                <img src="${med.image}" alt="Imagen de ${med.name}" class="w-full h-48 object-cover" onerror="this.onerror=null;this.src='https://placehold.co/600x240/fecaca/991b1b?text=Imagen+no+disponible';">
                <div id="modalBody" class="p-6">
                    <p class="text-lg font-semibold text-blue-600 mb-4">${med.family}</p>
                    <div class="space-y-3 text-sm text-slate-700">
                        <p><strong class="font-semibold text-slate-900">Usos Terapéuticos:</strong> ${med.uses}</p>
                        <p><strong class="font-semibold text-slate-900">Indicaciones:</strong> ${med.indications}</p>
                        <p><strong class="font-semibold text-slate-900">Dosis Adulto:</strong> ${med.dose_adult}</p>
                        <p><strong class="font-semibold text-slate-900">Dosis Pediátrica:</strong> ${med.dose_pediatric}</p>
                        <p><strong class="font-semibold text-red-600">Contraindicaciones:</strong> ${med.contraindications}</p>
                    </div>
                    ${calculatorHtml}
                </div>
            </div>
        `;
        
        modal.classList.remove('hidden');
        setTimeout(() => {
            modalContentWrapper.classList.remove('scale-95', 'opacity-0');
        }, 10);

        document.getElementById('closeModalBtn').addEventListener('click', closeModal);
        if(med.isCalculable) {
            modalContentWrapper.querySelector('.calculate-btn-modal').addEventListener('click', () => calculateDoseInModal(med));
        }
    };

    const closeModal = () => {
         modalContentWrapper.classList.add('scale-95', 'opacity-0');
         setTimeout(() => {
            modal.classList.add('hidden');
            modalContentWrapper.innerHTML = '';
         }, 300);
    };

    const calculateDoseInModal = (med) => {
        // ... (Tu función de cálculo de dosis permanece igual)
    };

    // --- Función para filtrar y buscar ---
    const filterAndSearch = () => {
        const normalizedSearchTerm = normalizeText(searchBar.value);
        let filteredMeds = medicationsWithOriginalIndex;

        if (currentFilter !== 'Todos') {
            filteredMeds = filteredMeds.filter(med => med.simpleFamily === currentFilter);
        }

        if (normalizedSearchTerm) {
            filteredMeds = filteredMeds.filter(med => 
                normalizeText(med.name).includes(normalizedSearchTerm) ||
                normalizeText(med.family).includes(normalizedSearchTerm) ||
                normalizeText(med.simpleFamily).includes(normalizedSearchTerm) ||
                normalizeText(med.uses).includes(normalizedSearchTerm) ||
                normalizeText(med.indications).includes(normalizedSearchTerm) ||
                normalizeText(med.presentation).includes(normalizedSearchTerm)
            );
        }
        
        renderMedications(filteredMeds);
    };

    // --- Crear y manejar el filtro de botones por familia ---
    const initFilter = () => {
        const families = ['Todos', ...new Set(medications.map(med => med.simpleFamily).sort())];
        familyFilterContainer.innerHTML = '';
        families.forEach(family => {
            const button = document.createElement('button');
            button.className = 'filter-btn w-full text-left px-4 py-2 text-sm rounded-md transition hover:bg-slate-100';
            button.textContent = family;
            button.dataset.family = family;
            button.setAttribute('aria-pressed', 'false');
            
            if (family === 'Todos') {
                button.classList.add('active');
                button.setAttribute('aria-pressed', 'true');
            }

            button.addEventListener('click', () => {
                currentFilter = family;
                document.querySelectorAll('.filter-btn').forEach(btn => {
                    btn.classList.remove('active');
                    btn.setAttribute('aria-pressed', 'false');
                });
                button.classList.add('active');
                button.setAttribute('aria-pressed', 'true');
                filterAndSearch();
                if (window.innerWidth < 768) {
                    sidebar.classList.add('-translate-x-full');
                }
            });
            familyFilterContainer.appendChild(button);
        });
    };
    
    // --- Función para renderizar la guía de insulinas ---
    const renderInsulinGuide = () => {
        // ... (Tu función para renderizar la guía permanece igual)
    };

    // --- Función de Inicialización Principal ---
    async function initializeApp() {
        try {
            // 1. Cargar los datos desde el archivo JSON
            const response = await fetch('medicamentos.json');
            if (!response.ok) {
                throw new Error(`Error al cargar la base de datos: ${response.statusText}`);
            }
            const rawMedications = await response.json();

            // 2. Procesar los datos (añadir URL de imagen)
            medications = rawMedications.map(med => ({
                ...med,
                image: generateImageUrl(med.name, med.presentation)
            }));
            
            medicationsWithOriginalIndex = medications.map((med, index) => ({ ...med, originalIndex: index }));

            // 3. Renderizar componentes iniciales
            initFilter();
            filterAndSearch();
            renderInsulinGuide(); 

            // 4. Configurar Event Listeners
            searchBar.addEventListener('input', filterAndSearch);

            listContainer.addEventListener('click', (e) => {
                const card = e.target.closest('[data-index]');
                if (card) {
                    const index = card.dataset.index;
                    const med = medications[index];
                    openModal(med);
                }
            });

            modal.addEventListener('click', (e) => {
                if (e.target.id === 'medicationModal') {
                    closeModal();
                }
            });
            
            openSidebarBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                sidebar.classList.remove('-translate-x-full');
            });

            document.addEventListener('click', (e) => {
                if (!sidebar.contains(e.target) && !openSidebarBtn.contains(e.target) && window.innerWidth < 768) {
                    sidebar.classList.add('-translate-x-full');
                }
            });

        } catch (error) {
            console.error("No se pudo inicializar la aplicación:", error);
            listContainer.innerHTML = `<p class="text-center text-red-600 col-span-full">Error: No se pudo cargar la información de los medicamentos. Por favor, intente recargar la página.</p>`;
        }
    };

    // --- Iniciar la aplicación ---
    initializeApp();
});