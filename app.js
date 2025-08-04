document.addEventListener('DOMContentLoaded', () => {
    // --- ESTADO DE LA APLICACIÓN ---
    const state = {
        medications: [],
        view: 'medications', // 'medications' o 'themes'
        activeFamily: 'Todos',
        activeTheme: null,
    };

    // --- SELECTORES DEL DOM ---
    const selectors = {
        medicationSection: document.getElementById('medication-section'),
        themesSection: document.getElementById('themes-section'),
        medicationList: document.getElementById('medication-list'),
        searchBar: document.getElementById('searchBar'),
        noResults: document.getElementById('no-results'),
        familyFilterContainer: document.getElementById('familyFilterContainer'),
        themesFilterContainer: document.getElementById('themesFilterContainer'),
        familiesDropdownBtn: document.getElementById('families-dropdown-btn'),
        themesDropdownBtn: document.getElementById('themes-dropdown-btn'),
        familiesDropdownPanel: document.getElementById('families-dropdown-panel'),
        themesDropdownPanel: document.getElementById('themes-dropdown-panel'),
        modal: document.getElementById('medicationModal'),
        modalContent: document.getElementById('modal-content-wrapper'),
        cardTemplate: document.getElementById('medication-card-template'),
    };

    // --- LÓGICA PRINCIPAL DE ACTUALIZACIÓN DE VISTA ---
    function updateDisplay() {
        const searchTerm = normalizeText(selectors.searchBar.value);

        if (searchTerm) {
            state.view = 'medications';
            const searchResults = state.medications.filter(med =>
                normalizeText(med.name).includes(searchTerm) ||
                normalizeText(med.simpleFamily).includes(searchTerm) ||
                normalizeText(med.uses).includes(searchTerm) ||
                normalizeText(med.indications).includes(searchTerm)
            );
            renderMedications(searchResults);
        } else {
            if (state.view === 'medications') {
                const filteredMeds = state.activeFamily === 'Todos'
                    ? state.medications
                    : state.medications.filter(med => med.simpleFamily === state.activeFamily);
                renderMedications(filteredMeds);
            }
        }
        
        selectors.medicationSection.classList.toggle('hidden', state.view !== 'medications');
        selectors.themesSection.classList.toggle('hidden', state.view !== 'themes');
        
        if (state.view === 'themes') {
            document.querySelectorAll('.theme-content').forEach(tc => tc.classList.add('hidden'));
            if (state.activeTheme) {
                document.getElementById(`theme-${state.activeTheme}`).classList.remove('hidden');
            }
        }
        updateActiveButtons();
    }

    function updateActiveButtons() {
        document.querySelectorAll('#familyFilterContainer .filter-btn').forEach(btn => {
            btn.classList.toggle('active', state.view === 'medications' && btn.dataset.family === state.activeFamily);
        });
        document.querySelectorAll('#themesFilterContainer .theme-btn').forEach(btn => {
            btn.classList.toggle('active', state.view === 'themes' && btn.dataset.theme === state.activeTheme);
        });
    }

    // --- RENDERIZADO Y LÓGICA DEL MODAL (ARREGLADO) ---
    function renderMedications(meds) {
        const sortedMeds = meds.sort((a, b) => a.name.localeCompare(b.name));
        selectors.medicationList.innerHTML = '';
        selectors.noResults.classList.toggle('hidden', sortedMeds.length > 0);
        sortedMeds.forEach(med => {
            const cardClone = selectors.cardTemplate.content.cloneNode(true);
            const cardElement = cardClone.querySelector('article');
            cardElement.dataset.originalIndex = med.originalIndex; // Usamos un nombre más claro
            cardElement.querySelector('.card-img').src = med.image;
            cardElement.querySelector('.card-img').alt = `Imagen de ${med.name}`;
            cardElement.querySelector('.card-name').textContent = med.name;
            cardElement.querySelector('.card-presentation').textContent = med.presentation;
            cardElement.querySelector('.card-family').textContent = med.family;
            cardElement.querySelector('.card-uses').textContent = med.uses;
            selectors.medicationList.appendChild(cardClone);
        });
    }

    function openModal(med) {
        selectors.modalContent.innerHTML = `
            <div class="flex justify-between items-center p-5 border-b border-slate-200 sticky top-0 bg-white">
                <h3 id="modalTitle" class="text-xl font-bold text-slate-900">${med.name} - ${med.presentation}</h3>
                <button id="closeModalBtn" aria-label="Cerrar modal" class="text-slate-400 hover:text-slate-800 text-3xl">&times;</button>
            </div>
            <div class="overflow-y-auto p-6">
                <p class="text-lg font-semibold text-blue-600 mb-4">${med.family}</p>
                <div class="space-y-3 text-sm text-slate-700">
                    <p><strong class="font-semibold text-slate-900">Usos:</strong> ${med.uses}</p>
                    <p><strong class="font-semibold text-slate-900">Indicaciones:</strong> ${med.indications}</p>
                    <p><strong class="font-semibold text-slate-900">Dosis Adulto:</strong> ${med.dose_adult}</p>
                    <p><strong class="font-semibold text-slate-900">Dosis Pediátrica:</strong> ${med.dose_pediatric}</p>
                    <p><strong class="font-semibold text-red-600">Contraindicaciones:</strong> ${med.contraindications}</p>
                </div>
            </div>`;
        selectors.modal.classList.remove('hidden');
        setTimeout(() => selectors.modalContent.classList.remove('scale-95', 'opacity-0'), 10);
        document.getElementById('closeModalBtn').addEventListener('click', closeModal);
    }

    function closeModal() {
        selectors.modalContent.classList.add('scale-95', 'opacity-0');
        setTimeout(() => selectors.modal.classList.add('hidden'), 300);
    }

    // --- INICIALIZACIÓN ---
    async function initializeApp() {
        try {
            const response = await fetch('medicamentos.json');
            if (!response.ok) throw new Error('Network response was not ok');
            const rawMedications = await response.json();
            state.medications = rawMedications.map((med, index) => ({
                ...med,
                originalIndex: index,
                image: `https://placehold.co/400x200/e0f2fe/083344?text=${encodeURIComponent(`${med.name}\\n${med.presentation}`)}&font=inter`
            }));
            
            initFilters();
            initEventListeners();
            updateDisplay();

        } catch (error) {
            console.error("Initialization failed:", error);
            selectors.medicationSection.innerHTML = `<p class="text-center text-red-600">Error: No se pudo cargar la información.</p>`;
        }
    }

    function initFilters() {
        const families = ['Todos', ...new Set(state.medications.map(med => med.simpleFamily).sort())];
        selectors.familyFilterContainer.innerHTML = families.map(family => 
            `<button class="filter-btn" data-family="${family}">${family}</button>`
        ).join('');
        const themes = [ { id: 'insulinas', name: 'Guía de Insulinas' }, { id: 'crisis-hipertensivas', name: 'Crisis Hipertensivas' }];
        selectors.themesFilterContainer.innerHTML = themes.map(theme =>
            `<button class="theme-btn" data-theme="${theme.id}">${theme.name}</button>`
        ).join('');
    }

    function initEventListeners() {
        // Búsqueda
        selectors.searchBar.addEventListener('input', updateDisplay);

        // Clic en tarjeta para abrir modal (ARREGLADO)
        selectors.medicationList.addEventListener('click', (e) => {
            const card = e.target.closest('[data-original-index]');
            if (card) {
                const index = parseInt(card.dataset.originalIndex, 10);
                const medication = state.medications.find(m => m.originalIndex === index);
                if (medication) openModal(medication);
            }
        });
        
        // Control de los menús desplegables
        selectors.familiesDropdownBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            selectors.themesDropdownPanel.classList.remove('is-open');
            selectors.themesDropdownBtn.classList.remove('active');
            selectors.familiesDropdownPanel.classList.toggle('is-open');
            selectors.familiesDropdownBtn.classList.toggle('active');
        });
        selectors.themesDropdownBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            selectors.familiesDropdownPanel.classList.remove('is-open');
            selectors.familiesDropdownBtn.classList.remove('active');
            selectors.themesDropdownPanel.classList.toggle('is-open');
            selectors.themesDropdownBtn.classList.toggle('active');
        });

        // Clic en una opción de Familia
        selectors.familyFilterContainer.addEventListener('click', (e) => {
            if (e.target.matches('.filter-btn')) {
                state.view = 'medications';
                state.activeFamily = e.target.dataset.family;
                state.activeTheme = null;
                selectors.searchBar.value = '';
                updateDisplay();
                closeDropdowns();
            }
        });

        // Clic en una opción de Tema
        selectors.themesFilterContainer.addEventListener('click', (e) => {
            if (e.target.matches('.theme-btn')) {
                state.view = 'themes';
                state.activeTheme = e.target.dataset.theme;
                state.activeFamily = null;
                updateDisplay();
                closeDropdowns();
            }
        });

        // Cerrar menús al hacer clic fuera
        document.addEventListener('click', () => closeDropdowns());
        
        // Modal
        selectors.modal.addEventListener('click', (e) => { if (e.target.id === 'medicationModal') closeModal(); });
    }
    
    function closeDropdowns() {
        selectors.familiesDropdownPanel.classList.remove('is-open');
        selectors.themesDropdownPanel.classList.remove('is-open');
        selectors.familiesDropdownBtn.classList.remove('active');
        selectors.themesDropdownBtn.classList.remove('active');
    }
    
    function normalizeText(str) {
        return str ? str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") : '';
    }

    initializeApp();
});
