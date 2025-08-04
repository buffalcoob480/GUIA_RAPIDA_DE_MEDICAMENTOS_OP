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
        familiesSidebar: document.getElementById('families-sidebar'),
        themesSidebar: document.getElementById('themes-sidebar'),
        openFamiliesBtn: document.getElementById('openFamiliesSidebarBtn'),
        openThemesBtn: document.getElementById('openThemesSidebarBtn'),
        modal: document.getElementById('medicationModal'),
        modalContent: document.getElementById('modal-content-wrapper'),
        cardTemplate: document.getElementById('medication-card-template'),
    };

    // --- LÓGICA PRINCIPAL DE ACTUALIZACIÓN DE VISTA ---
    function updateDisplay() {
        const searchTerm = normalizeText(selectors.searchBar.value);

        // La búsqueda siempre tiene prioridad y muestra la vista de medicamentos
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
            // Si no hay búsqueda, mostrar la vista activa (medicamentos o temas)
            if (state.view === 'medications') {
                const filteredMeds = state.activeFamily === 'Todos'
                    ? state.medications
                    : state.medications.filter(med => med.simpleFamily === state.activeFamily);
                renderMedications(filteredMeds);
            }
        }
        
        // Sincronizar la visibilidad de las secciones
        selectors.medicationSection.classList.toggle('hidden', state.view !== 'medications');
        selectors.themesSection.classList.toggle('hidden', state.view !== 'themes');
        
        // Sincronizar el contenido del tema activo
        if(state.view === 'themes') {
            document.querySelectorAll('.theme-content').forEach(tc => tc.classList.add('hidden'));
            if(state.activeTheme) {
                document.getElementById(`theme-${state.activeTheme}`).classList.remove('hidden');
            }
        }

        // Sincronizar los botones activos
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

    // --- LÓGICA DE RENDERIZADO ---
    function renderMedications(meds) {
        const sortedMeds = meds.sort((a, b) => a.name.localeCompare(b.name));
        selectors.medicationList.innerHTML = '';
        selectors.noResults.classList.toggle('hidden', sortedMeds.length > 0);
        sortedMeds.forEach(med => {
            const cardClone = selectors.cardTemplate.content.cloneNode(true);
            const cardElement = cardClone.querySelector('article');
            cardElement.dataset.index = med.originalIndex;
            cardElement.querySelector('.card-img').src = med.image;
            cardElement.querySelector('.card-img').alt = `Imagen de ${med.name}`;
            cardElement.querySelector('.card-name').textContent = med.name;
            cardElement.querySelector('.card-presentation').textContent = med.presentation;
            cardElement.querySelector('.card-family').textContent = med.family;
            cardElement.querySelector('.card-uses').textContent = med.uses;
            selectors.medicationList.appendChild(cardClone);
        });
    }

    // --- LÓGICA DE INICIALIZACIÓN ---
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
            selectors.medicationSection.innerHTML = `<p class="text-center text-red-600">Error: No se pudo cargar la información de los medicamentos.</p>`;
        }
    }

    function initFilters() {
        // Filtro de Familias
        const families = ['Todos', ...new Set(state.medications.map(med => med.simpleFamily).sort())];
        selectors.familyFilterContainer.innerHTML = families.map(family => 
            `<button class="filter-btn" data-family="${family}">${family}</button>`
        ).join('');

        // Filtro de Temas
        const themes = [ { id: 'insulinas', name: 'Guía de Insulinas' }, { id: 'crisis-hipertensivas', name: 'Crisis Hipertensivas' }];
        selectors.themesFilterContainer.innerHTML = themes.map(theme =>
            `<button class="theme-btn" data-theme="${theme.id}">${theme.name}</button>`
        ).join('');
    }

    function initEventListeners() {
        // Búsqueda
        selectors.searchBar.addEventListener('input', updateDisplay);

        // Clic en Familias
        selectors.familyFilterContainer.addEventListener('click', (e) => {
            if (e.target.matches('.filter-btn')) {
                state.view = 'medications';
                state.activeFamily = e.target.dataset.family;
                state.activeTheme = null;
                selectors.searchBar.value = ''; // Limpiar búsqueda
                updateDisplay();
                closeMobileSidebars();
            }
        });

        // Clic en Temas
        selectors.themesFilterContainer.addEventListener('click', (e) => {
            if (e.target.matches('.theme-btn')) {
                state.view = 'themes';
                state.activeTheme = e.target.dataset.theme;
                state.activeFamily = null;
                updateDisplay();
                closeMobileSidebars();
            }
        });

        // Controles de Sidebars Móviles
        selectors.openFamiliesBtn.addEventListener('click', (e) => { e.stopPropagation(); selectors.familiesSidebar.classList.toggle('is-open'); });
        selectors.openThemesBtn.addEventListener('click', (e) => { e.stopPropagation(); selectors.themesSidebar.classList.toggle('is-open'); });
        document.addEventListener('click', (e) => {
            if (!selectors.familiesSidebar.contains(e.target) && !e.target.closest('#openFamiliesSidebarBtn')) {
                selectors.familiesSidebar.classList.remove('is-open');
            }
            if (!selectors.themesSidebar.contains(e.target) && !e.target.closest('#openThemesSidebarBtn')) {
                selectors.themesSidebar.classList.remove('is-open');
            }
        });
        
        // Modal (sin cambios)
    }
    
    function closeMobileSidebars() {
        selectors.familiesSidebar.classList.remove('is-open');
        selectors.themesSidebar.classList.remove('is-open');
    }
    
    function normalizeText(str) {
        return str ? str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") : '';
    }

    initializeApp();
});
