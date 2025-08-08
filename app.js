document.addEventListener('DOMContentLoaded', () => {

    // --- TEMAS CLÍNICOS ---
    const clinicalThemes = {
        'dm2-inicio': {
            name: 'Manejo Inicial de Diabetes Mellitus Tipo 2',
            content: `<h2>Manejo Inicial de Diabetes Mellitus Tipo 2</h2><p>Esta guía resume el enfoque inicial para un paciente recién diagnosticado con Diabetes Mellitus tipo 2 (DM2), basado en guías clínicas comunes.</p><h3>Paso 1: Diagnóstico y Metas Iniciales</h3><p>El diagnóstico se confirma con HbA1c ≥ 6.5%, Glucosa en ayuno ≥ 126 mg/dL, o Glucosa a las 2h post-carga ≥ 200 mg/dL. La meta inicial de <strong>HbA1c</strong> es generalmente <strong>< 7%</strong>.</p><h3>Paso 2: Tratamiento No Farmacológico</h3><p>Es la piedra angular del manejo e incluye:</p><ul><li><strong>Educación sobre la enfermedad:</strong> Automonitoreo, reconocimiento de hipo/hiperglucemia.</li><li><strong>Plan de alimentación:</strong> Reducción de carbohidratos simples y grasas saturadas.</li><li><strong>Actividad física:</strong> Mínimo 150 minutos de ejercicio aeróbico moderado a la semana.</li><li><strong>Pérdida de peso:</strong> Objetivo inicial del 5-10% del peso corporal.</li></ul><h3>Paso 3: Tratamiento Farmacológico de Primera Línea</h3><p>A menos que existan contraindicaciones, el tratamiento de elección para iniciar es:</p><ul><li><strong><a href="#" class="med-link" data-med-name="Metformina">Metformina</a>:</strong> Iniciar con 500-850 mg una o dos veces al día con los alimentos para minimizar efectos gastrointestinales. Incrementar gradualmente cada 1-2 semanas hasta una dosis objetivo de 2000 mg/día.</li></ul><h3>Paso 4: Terapia Dual (Si no se alcanzan metas en 3 meses)</h3><p>Si la HbA1c sigue por encima de la meta después de 3 meses de monoterapia con Metformina, se debe añadir un segundo agente.</p><h4><strong>Si existe enfermedad cardiovascular (ASCVD), insuficiencia cardíaca (IC) o enfermedad renal (ERC):</strong></h4><ul><li>Añadir un <strong>agonista del receptor de GLP-1</strong> (ej. <a href="#" class="med-link" data-med-name="Liraglutida">Liraglutida</a>) o un <strong>inhibidor de SGLT2</strong> (ej. <a href="#" class="med-link" data-med-name="Dapagliflozina">Dapagliflozina</a>).</li></ul><h4><strong>Para minimizar hipoglucemia:</strong></h4><ul><li>Añadir un <strong>inhibidor de DPP-4</strong> (ej. <a href="#" class="med-link" data-med-name="Sitagliptina">Sitagliptina</a>), un agonista de GLP-1, un inhibidor de SGLT2, o una <strong>Tiazolidinediona (TZD)</strong> (ej. <a href="#" class="med-link" data-med-name="Pioglitazona">Pioglitazona</a>).</li></ul><h4><strong>Para promover pérdida de peso:</strong></h4><ul><li>Añadir un <strong>agonista de GLP-1</strong> o un <strong>inhibidor de SGLT2</strong>.</li></ul><h4><strong>Si el costo es una barrera:</strong></h4><ul><li>Añadir una <strong>sulfonilurea</strong> (ej. <a href="#" class="med-link" data-med-name="Glibenclamida">Glibenclamida</a>) o una TZD.</li></ul><div class="bibliografia"><h4>Referencias</h4><p>Adaptado de: ADA. Standards of Medical Care in Diabetes—2023. Diabetes Care 2023;46(Suppl. 1):S140–S157.</p></div>`
        },
        'crisis-hipertensivas': {
            name: 'Manejo de Crisis Hipertensivas',
            content: `<h2>Manejo de Crisis Hipertensivas</h2><p>Una crisis hipertensiva se define como una elevación severa de la presión arterial (PA), generalmente >180/120 mmHg. Se clasifica en urgencia o emergencia según la presencia de daño a órgano blanco.</p><h3>1. Urgencia Hipertensiva</h3><p><strong>Definición:</strong> Elevación severa de la PA <strong>sin</strong> evidencia de daño agudo a órgano blanco (cerebro, corazón, riñón, retina).</p><p><strong>Manejo:</strong> El objetivo es reducir la PA gradualmente en 24-48 horas utilizando medicamentos orales. Una reducción demasiado rápida puede causar isquemia.</p><ul><li><strong>Tratamiento de elección:</strong> Reiniciar o ajustar el tratamiento antihipertensivo del paciente.</li><li><strong>Fármacos orales comúnmente usados:</strong><ul><li><strong><a href="#" class="med-link" data-med-name="Captopril">Captopril</a>:</strong> 25 mg vía oral. Es un IECA de acción rápida.</li><li><strong><a href="#" class="med-link" data-med-name="Nifedipino">Nifedipino</a> de liberación prolongada:</strong> 30-60 mg. <strong>NUNCA usar nifedipino sublingual de acción corta</strong> por el riesgo de caídas bruscas de la PA.</li></ul></li></ul><h3>2. Emergencia Hipertensiva</h3><p><strong>Definición:</strong> Elevación severa de la PA <strong>con</strong> evidencia de daño agudo y progresivo a órgano blanco. Requiere hospitalización y tratamiento intravenoso inmediato.</p><p><strong>Manejo:</strong> El objetivo es reducir la Presión Arterial Media (PAM) en un 10-20% en la primera hora, y otro 5-15% en las siguientes 23 horas.</p><ul><li><strong>Encefalopatía Hipertensiva:</strong> Reducción inmediata de la PAM en 20-25%. Fármaco de elección: <strong><a href="#" class="med-link" data-med-name="Labetalol">Labetalol</a></strong> o <strong><a href="#" class="med-link" data-med-name="Nitroprusiato de Sodio">Nitroprusiato</a></strong>.</li><li><strong>Accidente Cerebrovascular (EVC) Isquémico:</strong> No se recomienda bajar la PA a menos que sea >220/120 mmHg (o >185/110 si es candidato a trombólisis).</li><li><strong>Disección Aórtica:</strong> Reducción rápida de la PA sistólica a <120 mmHg. Fármaco de elección: Betabloqueadores como <strong><a href="#" class="med-link" data-med-name="Labetalol">Labetalol</a></strong>.</li><li><strong>Edema Agudo de Pulmón Cardiogénico:</strong> Vasodilatadores y diuréticos de asa como <strong><a href="#" class="med-link" data-med-name="Furosemida">Furosemida</a></strong>.</li></ul><div class="bibliografia"><h4>Referencias</h4><p>Adaptado de: Whelton PK, et al. 2017 ACC/AHA/AAPA/ABC/ACPM/AGS/APhA/ASH/ASPC/NMA/PCNA Guideline for the Prevention, Detection, Evaluation, and Management of High Blood Pressure in Adults.</p></div>`
        }
    };

    // --- ESTADO DE LA APLICACIÓN ---
    const state = {
        medications: { all: [], uniqueFamilies: [], uniquePresentations: [] },
        favorites: new Set(),
        ui: {
            view: 'medications',
            activeFamily: 'Todos',
            activeThemeId: null,
            searchTerm: '',
            advancedFilters: {},
            patientProfile: new Set(),
        },
        searchHistory: [],
        lazyLoadObserver: null,
    };

    // --- SELECTORES DEL DOM ---
    const selectors = {
        medicationSection: document.getElementById('medication-section'),
        themesSection: document.getElementById('themes-section'),
        interactionSection: document.getElementById('interaction-section'),
        medicationList: document.getElementById('medication-list'),
        searchBar: document.getElementById('searchBar'),
        noResults: document.getElementById('no-results'),
        familyFilterContainer: document.getElementById('familyFilterContainer'),
        themesFilterContainer: document.getElementById('themesFilterContainer'),
        favoritesBtn: document.getElementById('favorites-btn'),
        interactionCheckerBtn: document.getElementById('interaction-checker-btn'),
        familiesDropdownBtn: document.getElementById('families-dropdown-btn'),
        themesDropdownBtn: document.getElementById('themes-dropdown-btn'),
        familiesDropdownPanel: document.getElementById('families-dropdown-panel'),
        themesDropdownPanel: document.getElementById('themes-dropdown-panel'),
        modal: document.getElementById('medicationModal'),
        modalContent: document.getElementById('modal-content-wrapper'),
        cardTemplate: document.getElementById('medication-card-template'),
        medCount: document.getElementById('med-count'),
        skeletonLoader: document.getElementById('skeleton-loader'),
        searchHistoryDatalist: document.getElementById('search-history'),
        familiesBtnText: document.getElementById('families-btn-text'),
        toast: document.getElementById('toast-notification'),
        toastMessage: document.getElementById('toast-message'),
        advancedFilterBtn: document.getElementById('advanced-filter-btn'),
        advancedFilterPanel: document.getElementById('advanced-filter-panel'),
        advancedFilterCount: document.getElementById('advanced-filter-count'),
        patientProfileControls: document.getElementById('patient-profile-controls'),
    };

    // --- FUNCIONES AUXILIARES ---
    const normalizeText = (str = '') => str ? str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") : "";

    const debounce = (func, delay = 300) => {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                func.apply(this, args);
            }, delay);
        };
    };

    function showToast(message) {
        selectors.toastMessage.textContent = message;
        selectors.toast.classList.add('opacity-100', 'translate-y-0');
        selectors.toast.classList.remove('opacity-0', 'translate-y-3');
        setTimeout(() => {
            selectors.toast.classList.remove('opacity-100', 'translate-y-0');
            selectors.toast.classList.add('opacity-0', 'translate-y-3');
        }, 2500);
    }

    // --- MANEJO DEL ESTADO (STORAGE) ---
    function loadStateFromStorage() {
        try {
            const favs = localStorage.getItem('medFavorites');
            if (favs) state.favorites = new Set(JSON.parse(favs));
            
            const history = localStorage.getItem('medSearchHistory');
            if (history) state.searchHistory = JSON.parse(history);
            updateSearchHistoryDatalist();
        } catch (error) {
            console.error("Error cargando estado desde localStorage:", error);
            localStorage.clear();
        }
    }

    function saveFavorites() {
        localStorage.setItem('medFavorites', JSON.stringify(Array.from(state.favorites)));
    }

    function saveSearchHistory() {
        localStorage.setItem('medSearchHistory', JSON.stringify(state.searchHistory));
        updateSearchHistoryDatalist();
    }
    
    function updateSearchHistoryDatalist() {
        selectors.searchHistoryDatalist.innerHTML = state.searchHistory.map(term => `<option value="${term}"></option>`).join('');
    }

    function toggleFavorite(medId, button) {
        if (state.favorites.has(medId)) {
            state.favorites.delete(medId);
            button.classList.remove('is-favorite');
            showToast('Eliminado de favoritos');
        } else {
            state.favorites.add(medId);
            button.classList.add('is-favorite');
            showToast('Añadido a favoritos');
        }
        saveFavorites();
        if (state.ui.view === 'favorites') {
            updateDisplay();
        }
    }

    // --- LÓGICA DE FILTRADO Y BÚSQUEDA ---
    function applyFiltersAndSearch() {
        const searchTerm = normalizeText(state.ui.searchTerm);
        let results = [...state.medications.all];

        // 1. Vista de Favoritos
        if (state.ui.view === 'favorites') {
            results = results.filter(med => state.favorites.has(med.originalIndex));
        }
        // 2. Búsqueda por término
        if (searchTerm) {
            results = results.filter(med => 
                normalizeText(med.name).includes(searchTerm) ||
                normalizeText(med.family).includes(searchTerm) ||
                normalizeText(med.uses).includes(searchTerm)
            );
        } else if (Object.keys(state.ui.advancedFilters).length > 0) {
            // 3. Filtros Avanzados (solo si no hay término de búsqueda)
            results = results.filter(med => {
                return Object.entries(state.ui.advancedFilters).every(([key, values]) => {
                    if (!values || values.length === 0) return true;
                    if (key === 'families') return values.includes(med.simpleFamily);
                    if (key === 'presentations') return values.some(p => med.presentation.includes(p));
                    if (key === 'renalDoseAdjust') return values.includes('true') && med.renalDoseAdjust?.enabled;
                    if (key === 'pregnancySafe') return values.includes('true') && med.pregnancy?.toLowerCase().includes('seguro');
                    if (key === 'lactationSafe') return values.includes('true') && med.lactation?.toLowerCase().includes('seguro');
                    return true;
                });
            });
        } else {
            // 4. Filtro simple por familia
            if (state.ui.activeFamily !== 'Todos') {
                results = results.filter(med => med.simpleFamily === state.ui.activeFamily);
            }
        }
        return results;
    }


    // --- RENDERIZADO Y VISTAS ---
    function setView(view, id = null) {
        state.ui.view = view;
        state.ui.searchTerm = '';
        selectors.searchBar.value = '';

        document.querySelectorAll('.filter-btn.active, .theme-btn.active').forEach(b => b.classList.remove('active'));
        selectors.favoritesBtn.classList.toggle('active', view === 'favorites');
        selectors.interactionCheckerBtn.classList.toggle('active', view === 'interaction-checker');
        
        if (view === 'themes') {
            state.ui.activeThemeId = id;
            document.querySelector(`.theme-btn[data-theme-id="${id}"]`)?.classList.add('active');
        } else if (view === 'medications') {
            document.querySelector('.filter-btn[data-family="Todos"]')?.classList.add('active');
            state.ui.activeFamily = 'Todos';
            selectors.familiesBtnText.textContent = 'Familias';
        }
        
        updateDisplay();
    }
    
    const updateDisplay = debounce(() => {
        const isMedView = ['medications', 'favorites'].includes(state.ui.view);
        selectors.medicationSection.classList.toggle('hidden', !isMedView);
        selectors.themesSection.classList.toggle('hidden', state.ui.view !== 'themes');
        selectors.interactionSection.classList.toggle('hidden', state.ui.view !== 'interaction-checker');
        
        if (state.ui.view === 'interaction-checker') {
            renderInteractionChecker();
        } else if (isMedView) {
            const results = applyFiltersAndSearch();
            renderMedications(results);
        } else if (state.ui.view === 'themes') {
            renderTheme(state.ui.activeThemeId);
        }
    });

    // --- Interacciones (con búsqueda) ---
    function renderInteractionChecker() {
        selectors.interactionSection.innerHTML = `
            <div class="interaction-checker-container">
                <div class="interaction-header"><h2>Verificador de Interacciones</h2><p>Seleccione dos o más medicamentos para verificar.</p></div>
                <div class="interaction-body">
                    <div>
                        <div class="interaction-selection-controls">
                            <input type="text" id="interaction-search" class="interaction-search-bar" placeholder="Filtrar medicamentos...">
                            <div class="interaction-selection-info"><span id="selection-count">0 seleccionados</span><button id="clear-selection" class="clear-selection-btn">Limpiar</button></div>
                        </div>
                        <div class="med-selection-list">${state.medications.all.map(med => `<button class="interaction-med-btn" data-med-name="${med.name}">${med.name}</button>`).join('')}</div>
                    </div>
                    <div class="interaction-results"><h3>Resultados</h3><div id="interaction-results-content"><p class="text-slate-500">Seleccione medicamentos.</p></div></div>
                </div>
            </div>`;
    
        const medButtons = Array.from(selectors.interactionSection.querySelectorAll('.interaction-med-btn'));
        const resultsContent = document.getElementById('interaction-results-content');
        const searchInput = document.getElementById('interaction-search');
        const selectionCount = document.getElementById('selection-count');
        const clearButton = document.getElementById('clear-selection');
        let selectedMeds = [];
    
        const updateSelectionCount = () => { selectionCount.textContent = `${selectedMeds.length} seleccionados`; };
        const handleSelection = (btn) => {
            btn.classList.toggle('selected');
            const medName = btn.dataset.medName;
            const index = selectedMeds.indexOf(medName);
            (index > -1) ? selectedMeds.splice(index, 1) : selectedMeds.push(medName);
            updateSelectionCount();
            checkInteractions(selectedMeds, resultsContent);
        };
        
        medButtons.forEach(btn => btn.addEventListener('click', () => handleSelection(btn)));
        searchInput.addEventListener('input', debounce((e) => {
            const term = normalizeText(e.target.value);
            medButtons.forEach(btn => {
                btn.style.display = normalizeText(btn.dataset.medName).includes(term) ? '' : 'none';
            });
        }));
        clearButton.addEventListener('click', () => {
            selectedMeds = [];
            medButtons.forEach(btn => btn.classList.remove('selected'));
            updateSelectionCount();
            checkInteractions(selectedMeds, resultsContent);
        });
    }

    function checkInteractions(selectedMedNames, resultsContent) {
        if (selectedMedNames.length < 2) {
            resultsContent.innerHTML = '<p class="text-slate-500">Seleccione al menos dos medicamentos.</p>';
            return;
        }
    
        const interactions = new Set();
        const selectedMeds = state.medications.all.filter(med => selectedMedNames.includes(med.name));
    
        for (let i = 0; i < selectedMeds.length; i++) {
            for (let j = i + 1; j < selectedMeds.length; j++) {
                const med1 = selectedMeds[i];
                const med2 = selectedMeds[j];
    
                if (med1.interactions) {
                    for (const level in med1.interactions) {
                        med1.interactions[level].forEach(interaction => {
                            if (normalizeText(interaction).includes(normalizeText(med2.name))) {
                                interactions.add(JSON.stringify({ meds: [med1.name, med2.name].sort(), level, description: interaction }));
                            }
                        });
                    }
                }
                if (med2.interactions) {
                    for (const level in med2.interactions) {
                        med2.interactions[level].forEach(interaction => {
                            if (normalizeText(interaction).includes(normalizeText(med1.name))) {
                                interactions.add(JSON.stringify({ meds: [med2.name, med1.name].sort(), level, description: interaction }));
                            }
                        });
                    }
                }
            }
        }
        
        const uniqueInteractions = Array.from(interactions).map(item => JSON.parse(item));
        if (uniqueInteractions.length === 0) {
            resultsContent.innerHTML = '<div class="info-box-success"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg><p>No se encontraron interacciones conocidas.</p></div>';
        } else {
            resultsContent.innerHTML = uniqueInteractions.map(int => `<div class="interaction-item"><p><strong>${int.meds[0]} + ${int.meds[1]}</strong></p><p class="level-${int.level}">${int.level.charAt(0).toUpperCase() + int.level.slice(1)}: ${int.description}</p></div>`).join('');
        }
    }

    // --- Renderizado de Medicamentos y Lazy Loading ---
    function renderMedications(meds) {
        selectors.skeletonLoader.classList.add('hidden');
        selectors.medicationList.classList.remove('hidden');
        selectors.medicationList.innerHTML = '';
        selectors.noResults.classList.toggle('hidden', meds.length > 0);

        const fragment = document.createDocumentFragment();
        meds.forEach(med => {
            const card = createMedicationCard(med);
            fragment.appendChild(card);
        });
        selectors.medicationList.appendChild(fragment);
        
        // Iniciar Lazy Loading
        setupLazyLoading();
    }
    
    function setupLazyLoading() {
        if (state.lazyLoadObserver) state.lazyLoadObserver.disconnect();
        state.lazyLoadObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        }, { rootMargin: "0px 0px 200px 0px" });

        document.querySelectorAll('.card-img.lazy').forEach(img => state.lazyLoadObserver.observe(img));
    }
    
    // --- Renderizado de tarjetas y modal ---
    function createMedicationCard(med) {
        const cardClone = selectors.cardTemplate.content.cloneNode(true);
        const cardElement = cardClone.querySelector('.medication-card');
        const favButton = cardClone.querySelector('.favorite-btn-card');
        const imgElement = cardClone.querySelector('.card-img');
        const warningIcon = cardClone.querySelector('#card-warning-icon');
        const imgText = `${med.name} / ${med.presentation}`;

        cardClone.querySelector('.card-name').textContent = med.name;
        cardClone.querySelector('.card-presentation').textContent = med.presentation;
        cardClone.querySelector('.card-family').textContent = med.family;
        cardClone.querySelector('.card-uses').textContent = med.uses;

        imgElement.dataset.src = med.imageUrl || `https://placehold.co/400x200/e0f2fe/083344?text=${encodeURIComponent(imgText)}`;
        imgElement.alt = `Imagen de ${med.name}`;

        if (state.favorites.has(med.originalIndex)) {
            favButton.classList.add('is-favorite');
        }

        // Lógica de Perfil de Paciente
        const profile = state.ui.patientProfile;
        let hasWarning = false;
        if (profile.has('renal') && med.renalDoseAdjust?.enabled) hasWarning = true;
        if (profile.has('pregnancy') && med.pregnancy && !med.pregnancy.toLowerCase().includes('seguro')) hasWarning = true;
        if (profile.has('lactation') && med.lactation && !med.lactation.toLowerCase().includes('seguro')) hasWarning = true;

        if (hasWarning) {
            warningIcon.classList.remove('hidden');
        }

        favButton.addEventListener('click', (e) => { e.stopPropagation(); toggleFavorite(med.originalIndex, favButton); });
        cardElement.addEventListener('click', () => openModal(med));
        return cardClone;
    }
    
    // --- Lógica de Filtros Avanzados y Perfil de Paciente ---
    function setupAdvancedFilters() {
        const panel = selectors.advancedFilterPanel;
        const filters = {
            'Familias': { type: 'checkbox', options: state.medications.uniqueFamilies, key: 'families' },
            'Presentaciones': { type: 'checkbox', options: state.medications.uniquePresentations, key: 'presentations' },
            'Condiciones': { type: 'checkbox', options: { 'Ajuste Renal': 'renalDoseAdjust', 'Seguro Embarazo': 'pregnancySafe', 'Seguro Lactancia': 'lactationSafe' }, key: 'conditions' }
        };
        
        let html = '';
        for (const [title, config] of Object.entries(filters)) {
            html += `<div class="adv-filter-group"><h4>${title}</h4>`;
            if (config.key === 'conditions') {
                for (const [label, value] of Object.entries(config.options)) {
                    html += `<label><input type="checkbox" data-key="${value}" data-group="conditions">${label}</label>`;
                }
            } else {
                 for (const option of config.options) {
                    html += `<label><input type="checkbox" value="${option}" data-group="${config.key}">${option}</label>`;
                }
            }
            html += `</div>`;
        }
        panel.innerHTML = html + `<div><button id="clear-adv-filters" class="dropdown-btn">Limpiar Filtros</button></div>`;
        
        panel.addEventListener('change', handleAdvancedFilterChange);
        document.getElementById('clear-adv-filters').addEventListener('click', clearAdvancedFilters);
    }
    
    function handleAdvancedFilterChange() {
        state.ui.advancedFilters = {};
        const activeFilters = selectors.advancedFilterPanel.querySelectorAll('input:checked');
        
        activeFilters.forEach(input => {
            const group = input.dataset.group;
            const key = input.dataset.key || group;
            const value = input.value || 'true';

            if (group === 'conditions') {
                if (!state.ui.advancedFilters[key]) state.ui.advancedFilters[key] = [];
                state.ui.advancedFilters[key].push(value);
            } else {
                if (!state.ui.advancedFilters[group]) state.ui.advancedFilters[group] = [];
                state.ui.advancedFilters[group].push(value);
            }
        });

        const count = Object.values(state.ui.advancedFilters).reduce((acc, v) => acc + v.length, 0);
        selectors.advancedFilterCount.textContent = count;
        selectors.advancedFilterCount.classList.toggle('hidden', count === 0);
        
        state.ui.searchTerm = '';
        selectors.searchBar.value = '';
        updateDisplay();
    }
    
    function clearAdvancedFilters() {
        selectors.advancedFilterPanel.querySelectorAll('input:checked').forEach(input => input.checked = false);
        handleAdvancedFilterChange();
    }
    
    function setupPatientProfile() {
        const profiles = { 'Adulto': 'adult', 'Embarazo': 'pregnancy', 'Lactancia': 'lactation', 'Insuf. Renal': 'renal' };
        selectors.patientProfileControls.innerHTML = Object.entries(profiles)
            .map(([label, key]) => `<button class="profile-btn" data-profile="${key}">${label}</button>`).join('');
            
        selectors.patientProfileControls.addEventListener('click', (e) => {
            const btn = e.target.closest('.profile-btn');
            if (!btn) return;

            const profile = btn.dataset.profile;
            btn.classList.toggle('active');

            if (state.ui.patientProfile.has(profile)) {
                state.ui.patientProfile.delete(profile);
            } else {
                state.ui.patientProfile.add(profile);
            }
            updateDisplay(); // Re-render cards with warnings
        });
    }

    // --- Inicialización ---
    // El resto de funciones como openModal, setupDoseCalculator, etc., se mantienen mayormente sin cambios.
    // Solo se ajusta el modal para resaltar la información del perfil del paciente.
    // ... (El código de openModal, closeModal, populateFilters, setupEventListeners, etc., va aquí)
    
    // Función de inicialización modificada
    async function initializeApp() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('./service-worker.js').catch(err => console.error('SW reg failed:', err));
        }
        
        loadStateFromStorage();
        
        try {
            const response = await fetch('./medicamentos.json');
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const data = await response.json();
            
            const uniqueMeds = Array.from(new Map(data.map(med => [med.name + med.presentation, med])).values());
            state.medications.all = uniqueMeds.map((med, index) => ({...med, originalIndex: index}))
                                             .sort((a,b) => a.name.localeCompare(b.name));
            
            // Extraer datos únicos para los filtros
            state.medications.uniqueFamilies = [...new Set(state.medications.all.map(m => m.simpleFamily).filter(Boolean))].sort();
            const presentations = new Set();
            state.medications.all.forEach(m => {
                if (m.presentation.toLowerCase().includes('tableta') || m.presentation.toLowerCase().includes('cápsula')) presentations.add('Tabletas/Cápsulas');
                else if (m.presentation.toLowerCase().includes('jarabe') || m.presentation.toLowerCase().includes('suspensión') || m.presentation.toLowerCase().includes('gotas')) presentations.add('Líquidos Orales');
                else if (m.presentation.toLowerCase().includes('inyectable')) presentations.add('Inyectables');
                else if (m.presentation.toLowerCase().includes('crema') || m.presentation.toLowerCase().includes('gel')) presentations.add('Tópicos');
            });
            state.medications.uniquePresentations = [...presentations].sort();

            selectors.medCount.textContent = state.medications.all.length;
            populateFilters();
            setupAdvancedFilters();
            setupPatientProfile();
            setupEventListeners();
            updateDisplay();

        } catch (error) {
            console.error('Error al inicializar la app:', error);
            selectors.skeletonLoader.innerHTML = '<p class="text-red-500 col-span-full text-center">No se pudieron cargar los medicamentos.</p>';
        }
    }

    // El resto de las funciones (modal, event listeners, etc.) se mantienen igual o con pequeñas adaptaciones
    // que ya están implícitas en los cambios de las funciones principales. Por brevedad, no se repiten
    // todas las funciones que no cambiaron. El código completo sería la combinación de este nuevo
    // script con las funciones no modificadas del script anterior.
    initializeApp();
});
