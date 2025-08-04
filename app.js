document.addEventListener('DOMContentLoaded', () => {
    // ... (El estado y los selectores no cambian) ...

    // --- FUNCIÓN DE "DEBOUNCE" PARA OPTIMIZAR LA BÚSQUEDA ---
    // ... (La función debounce no cambia) ...
    const debouncedSearch = debounce(() => updateDisplay());

    // --- LÓGICA PRINCIPAL DE VISUALIZACIÓN ---
    // ... (Toda la lógica de updateDisplay, calculateRelevance, renderMedications, etc., no cambia) ...

    async function initializeApp() {
        try {
            const response = await fetch('medicamentos.json');
            if (!response.ok) throw new Error('Network response was not ok');
            const rawMedications = await response.json();
            state.medications = rawMedications.map((med, index) => ({...med, originalIndex: index, image: `https://placehold.co/400x200/e0f2fe/083344?text=${encodeURIComponent(`${med.name}\\n${med.presentation}`)}&font=inter`}));
            selectors.medCount.textContent = state.medications.length;
            initFilters();
            initEventListeners();
            updateDisplay();
        } catch (error) {
            console.error("Initialization failed:", error);
            selectors.loadingIndicator.textContent = "Error: No se pudo cargar la información.";
            selectors.loadingIndicator.classList.add('text-red-600');
        }
    }

    function initFilters() {
        const families = ['Todos', ...new Set(state.medications.map(med => med.simpleFamily).sort())];
        selectors.familyFilterContainer.innerHTML = families.map(f => `<button class="filter-btn" data-family="${f}">${f}</button>`).join('');
        
        // --- ARRAY DE TEMAS ACTUALIZADO CON LA NUEVA GUÍA ---
        const themes = [ 
            { id: 'gpc-insulina', name: 'Guía Clínica de Insulinoterapia' }, // NUEVO TEMA
            { id: 'dm2-inicio', name: 'Manejo Inicial DM2' },
            { id: 'insulinas', name: 'Terapia con Insulina (Resumen)' },
            { id: 'crisis-hipertensivas', name: 'Crisis Hipertensivas' },
            { id: 'nac', name: 'Neumonía (NAC)' },
            { id: 'asma', name: 'Crisis Asmática' }
        ];
        selectors.themesFilterContainer.innerHTML = themes.map(t => `<button class="theme-btn" data-theme="${t.id}">${t.name}</button>`).join('');
    }

    // ... (El resto de las funciones: initEventListeners, toggleDropdown, etc., no cambian) ...

    initializeApp();
});
