document.addEventListener('DOMContentLoaded', () => {
    // --- MEJORA: ESTADO DE LA APLICACIÓN MÁS MODULAR ---
    const state = {
        medications: {
            all: [], // Todos los medicamentos del JSON
            favorites: new Set(), // IDs (originalIndex) de favoritos
        },
        ui: {
            view: 'medications', // 'medications', 'themes', 'favorites'
            activeFamily: 'Todos',
            activeTheme: null,
            searchTerm: '',
        },
        searchHistory: [], // Array de términos de búsqueda
    };

    // --- SELECTORES DEL DOM ---
    const selectors = {
        medicationSection: document.getElementById('medication-section'),
        themesSection: document.getElementById('themes-section'),
        medicationList: document.getElementById('medication-list'),
        searchBar: document.getElementById('searchBar'),
        searchHistory: document.getElementById('search-history'),
        noResults: document.getElementById('no-results'),
        familyFilterContainer: document.getElementById('familyFilterContainer'),
        themesFilterContainer: document.getElementById('themesFilterContainer'),
        favoritesBtn: document.getElementById('favorites-btn'),
        familiesDropdownBtn: document.getElementById('families-dropdown-btn'),
        familiesBtnText: document.getElementById('families-btn-text'),
        themesDropdownBtn: document.getElementById('themes-dropdown-btn'),
        familiesDropdownPanel: document.getElementById('families-dropdown-panel'),
        themesDropdownPanel: document.getElementById('themes-dropdown-panel'),
        modal: document.getElementById('medicationModal'),
        modalContent: document.getElementById('modal-content-wrapper'),
        cardTemplate: document.getElementById('medication-card-template'),
        medCount: document.getElementById('med-count'),
        loadingIndicator: document.getElementById('loading-indicator'),
    };

    // --- LÓGICA DE DATOS Y ESTADO ---

    // MEJORA: Cargar estado desde localStorage
    function loadStateFromStorage() {
        const favs = localStorage.getItem('medFavorites');
        if (favs) {
            state.medications.favorites = new Set(JSON.parse(favs));
        }
        const history = localStorage.getItem('medSearchHistory');
        if (history) {
            state.searchHistory = JSON.parse(history);
        }
    }

    // MEJORA: Guardar favoritos en localStorage
    function saveFavorites() {
        localStorage.setItem('medFavorites', JSON.stringify(Array.from(state.medications.favorites)));
    }

    // MEJORA: Guardar historial en localStorage
    function saveSearchHistory() {
        // Limitar el historial a los últimos 10 términos
        if (state.searchHistory.length > 10) {
            state.searchHistory.shift();
        }
        localStorage.setItem('medSearchHistory', JSON.parse(JSON.stringify(state.searchHistory)));
    }
    
    // MEJORA: Función para añadir al historial
    function addToSearchHistory(term) {
        if (!term || state.searchHistory.includes(term)) return;
        state.searchHistory.unshift(term); // Añadir al principio
        saveSearchHistory();
        renderSearchHistory();
    }
    
    // MEJORA: Funciones para manejar favoritos
    function toggleFavorite(medId) {
        if (state.medications.favorites.has(medId)) {
            state.medications.favorites.delete(medId);
        } else {
            state.medications.favorites.add(medId);
        }
        saveFavorites();
        updateDisplay(); // Actualizar la vista para reflejar el cambio
    }

    // --- LÓGICA DE RENDERIZADO Y UI ---
    
    function updateDisplay() {
        let results = [];
        const searchTerm = normalizeText(state.ui.searchTerm);
        
        // Determinar qué lista de medicamentos mostrar
        if (state.ui.view === 'favorites') {
            results = state.medications.all.filter(med => state.medications.favorites.has(med.originalIndex));
        } else if (searchTerm) {
             results = state.medications.all.map(med => ({
                ...med,
                score: calculateRelevance(med, searchTerm)
            }))
            .filter(med => med.score > 0)
            .sort((a, b) => b.score - a.score);
        } else if (state.ui.view === 'medications') {
            results = state.ui.activeFamily === 'Todos'
                ? state.medications.all
                : state.medications.all.filter(med => med.simpleFamily === state.ui.activeFamily);
        }
        
        // Renderizar la vista correcta
        if (state.ui.view === 'medications' || state.ui.view === 'favorites') {
            renderMedications(results);
        }
        
        // Mostrar u ocultar las secciones principales
        selectors.medicationSection.classList.toggle('hidden', state.ui.view === 'themes');
        selectors.themesSection.classList.toggle('hidden', state.ui.view !== 'themes');
        
        if (state.ui.view === 'themes') {
            // Lógica para mostrar temas (puede ser expandida)
            selectors.themesSection.innerHTML = `<h2>${state.activeTheme.name}</h2><p>Contenido del tema aquí...</p>`;
        }

        updateActiveButtons();
    }

    function renderMedications(meds) {
        selectors.loadingIndicator.classList.add('hidden');
        selectors.medicationList.innerHTML = '';
        selectors.noResults.classList.toggle('hidden', meds.length > 0);
        
        meds.forEach(med => {
            const cardElement = createMedicationCard(med);
            selectors.medicationList.appendChild(cardElement);
        });
    }

    // MEJORA: Función separada para crear una tarjeta
    function createMedicationCard(med) {
        const cardClone = selectors.cardTemplate.content.cloneNode(true);
        const cardElement = cardClone.querySelector('article');
        const favoriteBtn = cardClone.querySelector('.favorite-btn-card');
        const contentWrapper = cardClone.querySelector('.card-content-wrapper');

        contentWrapper.dataset.originalIndex = med.originalIndex;
        cardElement.querySelector('.card-img').src = med.image;
        cardElement.querySelector('.card-name').textContent = med.name;
        cardElement.querySelector('.card-presentation').textContent = med.presentation;
        cardElement.querySelector('.card-family').textContent = med.family;
        cardElement.querySelector('.card-uses').textContent = med.uses;
        
        // Marcar si es favorito
        if (state.medications.favorites.has(med.originalIndex)) {
            favoriteBtn.classList.add('is-favorite');
        }

        // Event listener para el botón de favorito
        favoriteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleFavorite(med.originalIndex);
        });

        // Event listener para abrir el modal
        contentWrapper.addEventListener('click', () => {
            const medication = state.medications.all.find(m => m.originalIndex === med.originalIndex);
            if (medication) openModal(medication);
        });

        return cardElement;
    }

    // MEJORA: Función para renderizar el historial de búsqueda
    function renderSearchHistory() {
        selectors.searchHistory.innerHTML = state.searchHistory.map(term => `<option value="${term}"></option>`).join('');
    }

    // MEJORA: Lógica de UI para los botones activos
    function updateActiveButtons() {
        // Desactivar todos primero
        document.querySelectorAll('.filter-controls .active').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.dropdown-panel .active').forEach(btn => btn.classList.remove('active'));

        if (state.ui.view === 'favorites') {
            selectors.favoritesBtn.classList.add('active');
            selectors.familiesBtnText.textContent = 'Familias';
        } else if (state.ui.view === 'medications') {
            selectors.familiesDropdownBtn.classList.add('active');
            if(state.ui.activeFamily === 'Todos') {
                 selectors.familiesBtnText.textContent = 'Familias';
            } else {
                 selectors.familiesBtnText.textContent = `Familia: ${state.ui.activeFamily}`;
            }
            document.querySelector(`.filter-btn[data-family="${state.ui.activeFamily}"]`)?.classList.add('active');
        } else if (state.ui.view === 'themes') {
            selectors.themesDropdownBtn.classList.add('active');
            document.querySelector(`.theme-btn[data-theme="${state.ui.activeTheme.id}"]`)?.classList.add('active');
        }
    }
    
    // MEJORA: Modal refactorizado
    function openModal(med) {
        selectors.modalContent.innerHTML = createModalHtml(med);
        selectors.modal.classList.remove('hidden');
        
        setTimeout(() => selectors.modalContent.classList.remove('scale-95', 'opacity-0'), 10);
        
        // Añadir event listeners del modal
        document.getElementById('closeModalBtn').addEventListener('click', closeModal);
        document.querySelector('.favorite-btn-modal').addEventListener('click', () => {
             toggleFavorite(med.originalIndex);
             document.querySelector('.favorite-btn-modal').classList.toggle('is-favorite');
        });

        if (med.isCalculable) {
            const calculateBtn = document.querySelector('.calculate-btn-modal');
            calculateBtn.addEventListener('click', () => {
                // Feedback visual
                calculateBtn.textContent = 'Calculando...';
                calculateBtn.disabled = true;
                setTimeout(() => { // Simula un pequeño retraso
                    calculateDose(med);
                    calculateBtn.textContent = 'Calcular';
                    calculateBtn.disabled = false;
                }, 250);
            });
        }
    }

    function createModalHtml(med) {
        const isFav = state.medications.favorites.has(med.originalIndex);
        let calculatorHtml = '';
        if (med.isCalculable) {
            calculatorHtml = `<div class="mt-6 pt-6 border-t border-slate-200"><h4 class="text-base font-semibold text-slate-800 mb-2">Calculadora de Dosis Pediátrica</h4><div class="flex items-center space-x-3"><input type="number" placeholder="Peso en kg" class="weight-input-modal border border-slate-300 rounded-md p-2 w-28 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"><button class="calculate-btn-modal bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">Calcular</button></div><div class="result-div-modal mt-3 text-blue-800 font-semibold text-sm p-3 bg-blue-50 rounded-md min-h-[44px]"></div><div class="dose-warning-modal text-xs text-amber-600 mt-2"></div></div>`;
        }

        return `
            <div class="flex justify-between items-start p-5 border-b border-slate-200 sticky top-0 bg-white z-10">
                <div>
                    <h3 id="modalTitle" class="text-xl font-bold text-slate-900">${med.name} - ${med.presentation}</h3>
                    <p class="text-lg font-semibold text-blue-600">${med.family}</p>
                </div>
                <div class="flex items-center gap-4">
                    <button class="favorite-btn-modal text-3xl ${isFav ? 'is-favorite' : 'text-slate-300'} hover:text-yellow-400 transition-colors">★</button>
                    <button id="closeModalBtn" aria-label="Cerrar modal" class="text-slate-400 hover:text-slate-800 text-3xl">&times;</button>
                </div>
            </div>
            <div class="overflow-y-auto p-6">
                <div class="space-y-3 text-sm text-slate-700">
                    <p><strong class="font-semibold text-slate-900">Usos:</strong> ${med.uses}</p>
                    <p><strong class="font-semibold text-slate-900">Indicaciones:</strong> ${med.indications}</p>
                    <p><strong class="font-semibold text-slate-900">Dosis Adulto:</strong> ${med.dose_adult}</p>
                    <p><strong class="font-semibold text-slate-900">Dosis Pediátrica:</strong> ${med.dose_pediatric}</p>
                    <p><strong class="font-semibold text-red-600">Contraindicaciones:</strong> ${med.contraindications}</p>
                </div>
                ${calculatorHtml}
            </div>`;
    }

    function closeModal() {
        selectors.modalContent.classList.add('scale-95', 'opacity-0');
        setTimeout(() => selectors.modal.classList.add('hidden'), 300);
    }
    
    // MEJORA: Calculadora con alertas
    function calculateDose(med) {
        const weightInput = selectors.modalContent.querySelector('.weight-input-modal');
        const resultDiv = selectors.modalContent.querySelector('.result-div-modal');
        const warningDiv = selectors.modalContent.querySelector('.dose-warning-modal');
        const weight = parseFloat(weightInput.value);
        
        resultDiv.innerHTML = '';
        warningDiv.innerHTML = '';

        if (!weight || weight <= 0) {
            resultDiv.innerHTML = '<span class="text-red-500">Ingrese un peso válido.</span>'; return;
        }

        let resultText = '';
        let totalDoseMgDia = 0;

        if (med.doseMin_mg_kg_dia) {
            const intervals = parseInt(String(med.doseIntervals).split('-').pop(), 10);
            const minMlPerTake = (weight * med.doseMin_mg_kg_dia / med.concentration) / intervals;
            const maxMlPerTake = (weight * med.doseMax_mg_kg_dia / med.concentration) / intervals;
            resultText = `Administrar <strong>${minMlPerTake.toFixed(1)} a ${maxMlPerTake.toFixed(1)} ml</strong> por toma (${med.doseIntervals} veces al día).`;
            totalDoseMgDia = weight * med.doseMax_mg_kg_dia;
        } else if (med.doseMin_mg_kg_dosis) {
            const minMl = (weight * med.doseMin_mg_kg_dosis) / med.concentration;
            const maxMl = (weight * med.doseMax_mg_kg_dosis) / med.concentration;
            const frequencyText = med.doseFreq ? ` cada ${Math.round(24 / med.doseFreq)} horas.` : '.';
            resultText = `Dosis: <strong>${minMl.toFixed(1)} a ${maxMl.toFixed(1)} ml</strong>${frequencyText}`;
            totalDoseMgDia = weight * med.doseMax_mg_kg_dosis * (med.doseFreq || 1);
        }

        resultDiv.innerHTML = resultText;
        
        // Alerta de dosis máxima (ejemplo con Paracetamol)
        if (med.name.toLowerCase().includes("paracetamol") && totalDoseMgDia > 4000) {
            warningDiv.innerHTML = '⚠️ La dosis diaria calculada podría superar el máximo recomendado para un adulto.';
        }
    }
    
    const debounce = (func, delay = 300) => {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                func.apply(this, args);
            }, delay);
        };
    };

    // --- FUNCIÓN DE INICIALIZACIÓN ---
    async function initializeApp() {
        try {
            loadStateFromStorage(); // Cargar favoritos e historial
            const response = await fetch('medicamentos.json');
            if (!response.ok) throw new Error(`Network response was not ok: ${response.statusText}`);
            const rawMedications = await response.json();
            
            // Procesar y guardar medicamentos en el estado
            state.medications.all = rawMedications.map((med, index) => ({
                ...med, 
                originalIndex: index, 
                image: `https://placehold.co/400x200/e0f2fe/083344?text=${encodeURIComponent(`${med.name}\\n${med.presentation}`)}&font=inter`
            }));
            
            selectors.medCount.textContent = state.medications.all.length;
            
            initFilters();
            initEventListeners();
            renderSearchHistory();
            updateDisplay(); // Primera renderización
        } catch (error) {
            console.error("Initialization failed:", error);
            selectors.loadingIndicator.innerHTML = `<p class="text-red-600">Error: No se pudo cargar la información.<br>Por favor, revisa tu conexión o intenta más tarde.</p>`;
        }
    }

    function initFilters() {
        const families = ['Todos', ...new Set(state.medications.all.map(med => med.simpleFamily).sort())];
        selectors.familyFilterContainer.innerHTML = families.map(f => `<button class="filter-btn" data-family="${f}">${f}</button>`).join('');
        
        const themes = [ 
            { id: 'gpc-insulina', name: 'Guía Clínica de Insulinoterapia' },
            { id: 'dm2-inicio', name: 'Manejo Inicial DM2' },
            { id: 'crisis-hipertensivas', name: 'Crisis Hipertensivas' }
        ];
        selectors.themesFilterContainer.innerHTML = themes.map(t => `<button class="theme-btn" data-theme="${t.id}" data-name="${t.name}">${t.name}</button>`).join('');
    }

    function initEventListeners() {
        // Debounced search
        selectors.searchBar.addEventListener('input', debounce((e) => {
            state.ui.searchTerm = e.target.value;
            // Si hay búsqueda, cambiamos la vista a medicamentos
            if (state.ui.searchTerm) {
                state.ui.view = 'medications';
            }
            updateDisplay();
        }));
        
        // Guardar en historial cuando se presiona Enter
        selectors.searchBar.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                addToSearchHistory(e.target.value.trim());
            }
        });

        // Dropdowns
        selectors.familiesDropdownBtn.addEventListener('click', e => { e.stopPropagation(); toggleDropdown('families'); });
        selectors.themesDropdownBtn.addEventListener('click', e => { e.stopPropagation(); toggleDropdown('themes'); });
        
        // Botón de Favoritos
        selectors.favoritesBtn.addEventListener('click', () => {
             state.ui.view = 'favorites';
             state.ui.searchTerm = '';
             updateDisplay();
        });
        
        // Contenedores de filtros
        selectors.familyFilterContainer.addEventListener('click', e => {
            const btn = e.target.closest('.filter-btn');
            if (btn) {
                state.ui.view = 'medications';
                state.ui.activeFamily = btn.dataset.family;
                state.ui.searchTerm = '';
                updateDisplay();
                closeDropdowns();
            }
        });
        selectors.themesFilterContainer.addEventListener('click', e => {
            const btn = e.target.closest('.theme-btn');
            if (btn) {
                state.ui.view = 'themes';
                state.ui.activeTheme = { id: btn.dataset.theme, name: btn.dataset.name };
                updateDisplay();
                closeDropdowns();
            }
        });

        // Clics globales para cerrar modales/dropdowns
        document.addEventListener('click', () => closeDropdowns());
        selectors.modal.addEventListener('click', e => { if (e.target.id === 'medicationModal') closeModal(); });
        window.addEventListener('keydown', e => { if(e.key === 'Escape') closeModal(); });
    }
    
    function toggleDropdown(type) {
        const isFamiliesOpen = selectors.familiesDropdownPanel.classList.contains('is-open');
        const isThemesOpen = selectors.themesDropdownPanel.classList.contains('is-open');
        closeDropdowns(); // Cerrar todo primero

        if (type === 'families' && !isFamiliesOpen) {
            selectors.familiesDropdownPanel.classList.add('is-open');
        } else if (type === 'themes' && !isThemesOpen) {
            selectors.themesDropdownPanel.classList.add('is-open');
        }
    }
    
    function closeDropdowns() {
        selectors.familiesDropdownPanel.classList.remove('is-open');
        selectors.themesDropdownPanel.classList.remove('is-open');
    }

    // --- FUNCIONES DE UTILIDAD ---
    function normalizeText(str) { 
        if (!str) return '';
        return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    function calculateRelevance(med, term) {
        let score = 0;
        if (!term) return 0;
        const normName = normalizeText(med.name);
        if (normName.startsWith(term)) score += 20;
        else if (normName.includes(term)) score += 10;
        if (normalizeText(med.family).includes(term)) score += 5;
        if (normalizeText(med.uses).includes(term)) score += 3;
        if (normalizeText(med.indications).includes(term)) score += 1;
        return score;
    }

    // --- INICIAR LA APP ---
    initializeApp();
});
