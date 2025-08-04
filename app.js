document.addEventListener('DOMContentLoaded', () => {
    // --- Variables Globales y Selectores del DOM ---
    let medications = [];
    let medicationsWithOriginalIndex = [];
    let currentFamilyFilter = 'Todos';

    // Selectores de la UI
    const medicationSection = document.getElementById('medication-section');
    const themesSection = document.getElementById('themes-section');
    const listContainer = document.getElementById('medication-list');
    const searchBar = document.getElementById('searchBar');
    const noResults = document.getElementById('no-results');
    const familyFilterContainer = document.getElementById('familyFilter');
    const themesFilterContainer = document.getElementById('themes-filter');
    const sidebar = document.getElementById('sidebar');
    const openSidebarBtn = document.getElementById('openSidebarBtn');
    
    // Selectores del Modal
    const modal = document.getElementById('medicationModal');
    const modalContentWrapper = document.getElementById('modal-content-wrapper');
    const cardTemplate = document.getElementById('medication-card-template');

    // --- LÓGICA DE VISTAS ---
    function switchView(view) {
        if (view === 'medications') {
            medicationSection.classList.remove('hidden');
            themesSection.classList.add('hidden');
            // Desactivar visualmente los botones de temas
            document.querySelectorAll('#themes-filter .theme-btn').forEach(btn => btn.classList.remove('active'));
        } else if (view === 'themes') {
            medicationSection.classList.add('hidden');
            themesSection.classList.remove('hidden');
            // Desactivar visualmente los botones de familias
            document.querySelectorAll('#familyFilter .filter-btn').forEach(btn => btn.classList.remove('active'));
        }
    }

    // --- LÓGICA DE BÚSQUEDA Y FILTRADO ---
    function performSearch() {
        // La búsqueda ignora CUALQUIER filtro y siempre busca en todos los medicamentos.
        const normalizedSearchTerm = normalizeText(searchBar.value);

        if (normalizedSearchTerm) {
            // Si se busca algo, forzar la vista de medicamentos.
            switchView('medications');

            const searchResults = medicationsWithOriginalIndex.filter(med =>
                normalizeText(med.name).includes(normalizedSearchTerm) ||
                normalizeText(med.family).includes(normalizedSearchTerm) ||
                normalizeText(med.simpleFamily).includes(normalizedSearchTerm) ||
                normalizeText(med.uses).includes(normalizedSearchTerm) ||
                normalizeText(med.indications).includes(normalizedSearchTerm) ||
                normalizeText(med.presentation).includes(normalizedSearchTerm)
            );
            renderMedications(searchResults);
        } else {
            // Si la búsqueda se borra, volver al filtro de familia activo.
            applyFamilyFilter();
        }
    }

    function applyFamilyFilter() {
        switchView('medications');
        let filteredMeds = (currentFamilyFilter === 'Todos')
            ? medicationsWithOriginalIndex
            : medicationsWithOriginalIndex.filter(med => med.simpleFamily === currentFamilyFilter);
        renderMedications(filteredMeds);
    }
    
    // --- LÓGICA DE RENDERIZADO ---
    const renderMedications = (meds) => { /* Sin cambios */ };
    const normalizeText = (str) => { /* Sin cambios */ };
    const generateImageUrl = (name, presentation) => { /* Sin cambios */ };

    // --- LÓGICA DEL MODAL ---
    const openModal = (med) => { /* Sin cambios */ };
    const closeModal = () => { /* Sin cambios */ };

    // --- INICIALIZACIÓN DE LA APP ---
    async function initializeApp() {
        try {
            const response = await fetch('medicamentos.json');
            if (!response.ok) throw new Error(`Error al cargar la base de datos: ${response.statusText}`);
            const rawMedications = await response.json();

            medications = rawMedications.map(med => ({ ...med, image: generateImageUrl(med.name, med.presentation) }));
            medicationsWithOriginalIndex = medications.map((med, index) => ({ ...med, originalIndex: index }));

            // Inicializar las barras laterales y la vista por defecto
            initFamilyFilter();
            initThemesFilter();
            applyFamilyFilter(); // Mostrar la lista de "Todos" al inicio

            // Configurar Event Listeners
            searchBar.addEventListener('input', performSearch);
            listContainer.addEventListener('click', (e) => {
                const card = e.target.closest('[data-index]');
                if (card) {
                    const index = parseInt(card.dataset.index, 10);
                    openModal(medicationsWithOriginalIndex.find(m => m.originalIndex === index));
                }
            });

            // Listeners del modal y sidebar móvil (sin cambios)
            modal.addEventListener('click', (e) => { if (e.target.id === 'medicationModal') closeModal(); });
            openSidebarBtn.addEventListener('click', (e) => { e.stopPropagation(); sidebar.classList.remove('-translate-x-full'); });
            document.addEventListener('click', (e) => {
                if (!sidebar.contains(e.target) && !openSidebarBtn.contains(e.target) && window.innerWidth < 768) {
                    sidebar.classList.add('-translate-x-full');
                }
            });

        } catch (error) {
            console.error("No se pudo inicializar la aplicación:", error);
            medicationSection.innerHTML = `<p class="text-center text-red-600 col-span-full">Error: No se pudo cargar la información de los medicamentos.</p>`;
        }
    }

    function initFamilyFilter() {
        const families = ['Todos', ...new Set(medications.map(med => med.simpleFamily).sort())];
        familyFilterContainer.innerHTML = '';
        families.forEach(family => {
            const button = document.createElement('button');
            button.className = 'filter-btn';
            button.textContent = family;
            if (family === 'Todos') button.classList.add('active');
            
            button.addEventListener('click', () => {
                currentFamilyFilter = family;
                searchBar.value = ''; // Limpiar búsqueda al cambiar de filtro
                document.querySelectorAll('#familyFilter .filter-btn').forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                applyFamilyFilter();
                if (window.innerWidth < 768) sidebar.classList.add('-translate-x-full');
            });
            familyFilterContainer.appendChild(button);
        });
    }

    function initThemesFilter() {
        const themes = [
            { id: 'insulinas', name: 'Guía de Insulinas' },
            { id: 'crisis-hipertensivas', name: 'Crisis Hipertensivas' }
        ];
        themesFilterContainer.innerHTML = '';
        themes.forEach(theme => {
            const button = document.createElement('button');
            button.className = 'theme-btn';
            button.textContent = theme.name;
            
            button.addEventListener('click', () => {
                switchView('themes');
                document.querySelectorAll('#themes-filter .theme-btn').forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                // Mostrar el contenido del tema correcto
                document.querySelectorAll('.theme-content').forEach(content => content.classList.add('hidden'));
                document.getElementById(`theme-${theme.id}`).classList.remove('hidden');

                if (window.innerWidth < 768) sidebar.classList.add('-translate-x-full');
            });
            themesFilterContainer.appendChild(button);
        });
    }

    initializeApp();
});
