// Espera a que el DOM esté completamente cargado para ejecutar el script
document.addEventListener('DOMContentLoaded', () => {

    // --- TEMAS CLÍNICOS (Contenido estático) ---
    const clinicalThemes = {
        'dm2-inicio': {
            name: 'Manejo Inicial de Diabetes Mellitus Tipo 2',
            content: `<h2>Manejo Inicial de Diabetes Mellitus Tipo 2</h2><p>Esta guía resume el enfoque inicial para un paciente recién diagnosticado con Diabetes Mellitus tipo 2 (DM2), basado en guías clínicas comunes.</p><h3>Paso 1: Diagnóstico y Metas Iniciales</h3><p>El diagnóstico se confirma con HbA1c ≥ 6.5%, Glucosa en ayuno ≥ 126 mg/dL, o Glucosa a las 2h post-carga ≥ 200 mg/dL. La meta inicial de <strong>HbA1c</strong> es generalmente <strong>< 7%</strong>.</p><h3>Paso 2: Tratamiento No Farmacológico</h3><p>Es la piedra angular del manejo e incluye:</p><ul><li><strong>Educación sobre la enfermedad:</strong> Automonitoreo, reconocimiento de hipo/hiperglucemia.</li><li><strong>Plan de alimentación:</strong> Reducción de carbohidratos simples y grasas saturadas.</li><li><strong>Actividad física:</strong> Mínimo 150 minutos de ejercicio aeróbico moderado a la semana.</li><li><strong>Pérdida de peso:</strong> Objetivo inicial del 5-10% del peso corporal.</li></ul><h3>Paso 3: Tratamiento Farmacológico de Primera Línea</h3><p>A menos que existan contraindicaciones, el tratamiento de elección para iniciar es:</p><ul><li><strong><a href="#" class="med-link" data-med-name="Metformina">Metformina</a>:</strong> Iniciar con 500-850 mg una o dos veces al día con los alimentos para minimizar efectos gastrointestinales. Incrementar gradualmente cada 1-2 semanas hasta una dosis objetivo de 2000 mg/día.</li></ul><h3>Paso 4: Terapia Dual (Si no se alcanzan metas en 3 meses)</h3><p>Si la HbA1c sigue por encima de la meta después de 3 meses de monoterapia con Metformina, se debe añadir un segundo agente.</p><h4><strong>Si existe enfermedad cardiovascular (ASCVD), insuficiencia cardíaca (IC) o enfermedad renal (ERC):</strong></h4><ul><li>Añadir un <strong>agonista del receptor de GLP-1</strong> (ej. <a href="#" class="med-link" data-med-name="Liraglutida">Liraglutida</a>) o un <strong>inhibidor de SGLT2</strong> (ej. <a href="#" class="med-link" data-med-name="Dapagliflozina">Dapagliflozina</a>).</li></ul><h4><strong>Para minimizar hipoglucemia:</strong></h4><ul><li>Añadir un <strong>inhibidor de DPP-4</strong> (ej. <a href="#" class="med-link" data-med-name="Sitagliptina">Sitagliptina</a>), un agonista de GLP-1, un inhibidor de SGLT2, o una <strong>Tiazolidinediona (TZD)</strong> (ej. <a href="#" class="med-link" data-med-name="Pioglitazona">Pioglitazona</a>).</li></ul><h4><strong>Para promover pérdida de peso:</strong></h4><ul><li>Añadir un <strong>agonista de GLP-1</strong> o un <strong>inhibidor de SGLT2</strong>.</li></ul><h4><strong>Si el costo es una barrera:</strong></h4><ul><li>Añadir una <strong>sulfonilurea</strong> (ej. <a href="#" class="med-link" data-med-name="Glibenclamida">Glibenclamida</a>) o una TZD.</li></ul><div class="bibliografia"><h4>Referencias</h4><p>Adaptado de: ADA. Standards of Medical Care in Diabetes—2023. Diabetes Care 2023;46(Suppl. 1):S140–S157.</p></div>`
        },
        'crisis-hipertensivas': {
            name: 'Manejo de Crisis Hipertensivas',
            content: `<h2>Manejo de Crisis Hipertensivas</h2><p>Una crisis hipertensiva se define como una elevación severa de la presión arterial (PA), generalmente >180/120 mmHg. Se clasifica en urgencia o emergencia según la presencia de daño a órgano blanco.</p><h3>1. Urgencia Hipertensiva</h3><p><strong>Definición:</strong> Elevación severa de la PA <strong>sin</strong> evidencia de daño agudo a órgano blanco (cerebro, corazón, riñón, retina).</p><p><strong>Manejo:</strong> El objetivo es reducir la PA gradualmente en 24-48 horas utilizando medicamentos orales. Una reducción demasiado rápida puede causar isquemia.</p><ul><li><strong>Tratamiento de elección:</strong> Reiniciar o ajustar el tratamiento antipertensivo del paciente.</li><li><strong>Fármacos orales comúnmente usados:</strong><ul><li><strong><a href="#" class="med-link" data-med-name="Captopril">Captopril</a>:</strong> 25 mg vía oral. Es un IECA de acción rápida.</li><li><strong><a href="#" class="med-link" data-med-name="Nifedipino">Nifedipino</a> de liberación prolongada:</strong> 30-60 mg. <strong>NUNCA usar nifedipino sublingual de acción corta</strong> por el riesgo de caídas bruscas de la PA.</li></ul></li></ul><h3>2. Emergencia Hipertensiva</h3><p><strong>Definición:</strong> Elevación severa de la PA <strong>con</strong> evidencia de daño agudo y progresivo a órgano blanco. Requiere hospitalización y tratamiento intravenoso inmediato.</p><p><strong>Manejo:</strong> El objetivo es reducir la Presión Arterial Media (PAM) en un 10-20% en la primera hora, y otro 5-15% en las siguientes 23 horas.</p><ul><li><strong>Encefalopatía Hipertensiva:</strong> Reducción inmediata de la PAM en 20-25%. Fármaco de elección: <strong><a href="#" class="med-link" data-med-name="Labetalol">Labetalol</a></strong> o <strong><a href="#" class="med-link" data-med-name="Nitroprusiato de Sodio">Nitroprusiato</a></strong>.</li><li><strong>Accidente Cerebrovascular (EVC) Isquémico:</strong> No se recomienda bajar la PA a menos que sea >220/120 mmHg (o >185/110 si es candidato a trombólisis).</li><li><strong>Disección Aórtica:</strong> Reducción rápida de la PA sistólica a <120 mmHg. Fármaco de elección: Betabloqueadores como <strong><a href="#" class="med-link" data-med-name="Labetalol">Labetalol</a></strong>.</li><li><strong>Edema Agudo de Pulmón Cardiogénico:</strong> Vasodilatadores y diuréticos de asa como <strong><a href="#" class="med-link" data-med-name="Furosemida">Furosemida</a></strong>.</li></ul><div class="bibliografia"><h4>Referencias</h4><p>Adaptado de: Whelton PK, et al. 2017 ACC/AHA/AAPA/ABC/ACPM/AGS/APhA/ASH/ASPC/NMA/PCNA Guideline for the Prevention, Detection, Evaluation, and Management of High Blood Pressure in Adults.</p></div>`
        }
    };

    // --- ESTADO GLOBAL DE LA APLICACIÓN ---
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
    
    // --- DECLARACIÓN DE FUNCIONES ---

    const normalizeText = (str = '') => str ? str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") : "";
    
    const debounce = (func, delay = 300) => {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => { func.apply(this, args); }, delay);
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
    
    function loadStateFromStorage() {
        try {
            const favs = localStorage.getItem('medFavorites');
            if (favs) state.favorites = new Set(JSON.parse(favs));
            const history = localStorage.getItem('medSearchHistory');
            if (history) state.searchHistory = JSON.parse(history);
            updateSearchHistoryDatalist();
        } catch (error) { console.error("Error cargando estado:", error); localStorage.clear(); }
    }
    
    function saveFavorites() { localStorage.setItem('medFavorites', JSON.stringify(Array.from(state.favorites))); }
    
    function saveSearchHistory() { localStorage.setItem('medSearchHistory', JSON.stringify(state.searchHistory)); updateSearchHistoryDatalist(); }
    
    function updateSearchHistoryDatalist() { selectors.searchHistoryDatalist.innerHTML = state.searchHistory.map(term => `<option value="${term}"></option>`).join(''); }
    
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
        if (state.ui.view === 'favorites') updateDisplay();
    }

    function applyFiltersAndSearch() {
        const searchTerm = normalizeText(state.ui.searchTerm);
        let filteredMeds = [...state.medications.all];

        if (state.ui.view === 'favorites') {
            filteredMeds = filteredMeds.filter(med => state.favorites.has(med.originalIndex));
        }

        if (searchTerm) {
            filteredMeds = filteredMeds.filter(med => 
                normalizeText(med.name).includes(searchTerm) ||
                normalizeText(med.family).includes(searchTerm) ||
                normalizeText(med.uses).includes(searchTerm)
            );
        } else {
            if (state.ui.view === 'medications' && state.ui.activeFamily !== 'Todos') {
                filteredMeds = filteredMeds.filter(med => med.simpleFamily === state.ui.activeFamily);
            }

            const advanced = state.ui.advancedFilters;
            if (Object.keys(advanced).length > 0) {
                if (advanced.families?.length) {
                    filteredMeds = filteredMeds.filter(med => advanced.families.includes(med.simpleFamily));
                }
                if (advanced.presentations?.length) {
                    filteredMeds = filteredMeds.filter(med => 
                        advanced.presentations.some(p => normalizeText(med.presentation).includes(normalizeText(p).replace(/s\b/, '')))
                    );
                }
                if (advanced.conditions?.length) {
                    filteredMeds = filteredMeds.filter(med => {
                        return advanced.conditions.every(condition => {
                            if (condition === 'renalDoseAdjust') return med.renalDoseAdjust?.enabled;
                            if (condition === 'pregnancySafe') return med.pregnancy?.toLowerCase().includes('seguro') || med.pregnancy?.toLowerCase().includes('categoría a');
                            if (condition === 'lactationSafe') return med.lactation?.toLowerCase().includes('seguro');
                            return true;
                        });
                    });
                }
            }
        }
        
        return filteredMeds;
    }

    function setView(view, id = null) {
        state.ui.view = view;

        if (view !== 'medications') {
            state.ui.activeFamily = 'Todos';
            selectors.familiesBtnText.textContent = 'Familias';
        }
        if (view !== 'themes') {
            state.ui.activeThemeId = null;
        }

        document.querySelectorAll('.dropdown-btn.active').forEach(b => {
             if (b.id !== 'families-dropdown-btn' && b.id !== 'themes-dropdown-btn') b.classList.remove('active');
        });
        
        selectors.favoritesBtn.classList.toggle('active', view === 'favorites');
        selectors.interactionCheckerBtn.classList.toggle('active', view === 'interaction-checker');
        
        if (view === 'themes') { 
            state.ui.activeThemeId = id;
            document.querySelector(`.theme-btn[data-theme-id="${id}"]`)?.classList.add('active');
        } else if (view === 'medications' && state.ui.activeFamily === 'Todos') {
            document.querySelector('.filter-btn.active')?.classList.remove('active');
            document.querySelector('.filter-btn[data-family="Todos"]')?.classList.add('active');
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
            renderMedications(applyFiltersAndSearch());
        } else if (state.ui.view === 'themes') {
            renderTheme(state.ui.activeThemeId);
        }
    }, 250);

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
            medButtons.forEach(btn => { btn.style.display = normalizeText(btn.dataset.medName).includes(term) ? '' : 'none'; });
        }));
        clearButton.addEventListener('click', () => {
            selectedMeds = [];
            medButtons.forEach(btn => btn.classList.remove('selected'));
            updateSelectionCount();
            checkInteractions(selectedMeds, resultsContent);
        });
    }

    function checkInteractions(selectedMedNames, resultsContent) {
        if (selectedMedNames.length < 2) { resultsContent.innerHTML = '<p class="text-slate-500">Seleccione al menos dos medicamentos.</p>'; return; }
        const interactions = new Set();
        const selectedMeds = state.medications.all.filter(med => selectedMedNames.includes(med.name));
        for (let i = 0; i < selectedMeds.length; i++) {
            for (let j = i + 1; j < selectedMeds.length; j++) {
                const med1 = selectedMeds[i], med2 = selectedMeds[j];
                if (med1.interactions) {
                    for (const level in med1.interactions) {
                        med1.interactions[level].forEach(desc => { if (normalizeText(desc).includes(normalizeText(med2.name))) interactions.add(JSON.stringify({ meds: [med1.name, med2.name].sort(), level, description: desc })); });
                    }
                }
                if (med2.interactions) {
                    for (const level in med2.interactions) {
                        med2.interactions[level].forEach(desc => { if (normalizeText(desc).includes(normalizeText(med1.name))) interactions.add(JSON.stringify({ meds: [med2.name, med1.name].sort(), level, description: desc })); });
                    }
                }
            }
        }
        const uniqueInteractions = Array.from(interactions).map(item => JSON.parse(item));
        if (uniqueInteractions.length === 0) { resultsContent.innerHTML = '<div class="info-box-success"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg><p>No se encontraron interacciones conocidas.</p></div>'; }
        else { resultsContent.innerHTML = uniqueInteractions.map(int => `<div class="interaction-item"><p><strong>${int.meds[0]} + ${int.meds[1]}</strong></p><p class="level-${int.level}">${int.level.charAt(0).toUpperCase() + int.level.slice(1)}: ${int.description}</p></div>`).join(''); }
    }

    function renderMedications(meds) {
        selectors.skeletonLoader.classList.add('hidden');
        selectors.medicationList.classList.remove('hidden');
        selectors.medicationList.innerHTML = '';
        selectors.noResults.classList.toggle('hidden', meds.length > 0);
        const fragment = document.createDocumentFragment();
        meds.forEach(med => { fragment.appendChild(createMedicationCard(med)); });
        selectors.medicationList.appendChild(fragment);
    }

    const familyConfig = {
        'Antihipertensivos': { color: 'card-color-antihipertensivos', icon: '💓' },
        'Antibióticos': { color: 'card-color-antibioticos', icon: '🔬' },
        'Gastrointestinales': { color: 'card-color-gastrointestinales', icon: '💨' },
        'Respiratorios': { color: 'card-color-respiratorios', icon: '🫁' },
        'Antidiabéticos': { color: 'card-color-antidiabeticos', icon: '🩸' },
        'Analgésicos': { color: 'card-color-analgesicos', icon: '💊' },
        'default': { color: 'card-color-default', icon: '⚕️' }
    };

    function createMedicationCard(med) {
        const cardClone = selectors.cardTemplate.content.cloneNode(true);
        const cardElement = cardClone.querySelector('.medication-card');
        const detailsList = cardClone.querySelector('.card-details-list');

        const config = familyConfig[med.simpleFamily] || familyConfig.default;
        cardElement.classList.add(config.color);
        cardClone.querySelector('.card-icon').textContent = config.icon;
        
        cardClone.querySelector('.card-family-tag').textContent = med.simpleFamily;
        cardClone.querySelector('.card-name').textContent = med.name;
        cardClone.querySelector('.card-presentation').textContent = med.presentation;
        cardClone.querySelector('.card-family').textContent = med.family;
        
        const details = med.indications || med.uses;
        if (details) {
            const detailItems = details.split(/,|\./).filter(item => item.trim() !== '');
            detailItems.slice(0, 3).forEach(item => { // Show max 3 items
                const li = document.createElement('li');
                li.textContent = item.trim();
                detailsList.appendChild(li);
            });
        }
        
        cardElement.addEventListener('click', () => openModal(med));
        return cardClone;
    }
    
    function renderTheme(themeId) {
        const theme = clinicalThemes[themeId];
        selectors.themesSection.innerHTML = (theme && theme.content) ? `<div class="prose">${theme.content}</div>` : `<p class="text-center p-8">Contenido no encontrado.</p>`;
        if (theme) {
            selectors.themesSection.querySelectorAll('.med-link').forEach(link => {
                link.addEventListener('click', e => {
                    e.preventDefault();
                    const med = state.medications.all.find(m => normalizeText(m.name) === normalizeText(e.target.dataset.medName));
                    if (med) openModal(med);
                });
            });
        }
    }

    function openModal(med) {
        const isFavorite = state.favorites.has(med.originalIndex);
        const profile = state.ui.patientProfile;

        selectors.modalContent.innerHTML = `
            <div class="modal-header p-4 flex justify-between items-start">
                <div>
                    <h2 id="modalTitle" class="text-2xl font-bold">${med.name}</h2>
                    <p class="text-slate-600">${med.presentation}</p>
                </div>
                <button id="modalFavButton" class="text-3xl favorite-btn-modal ${isFavorite ? 'is-favorite' : ''}" aria-label="Añadir a favoritos">★</button>
            </div>
            <div class="p-6 overflow-y-auto">
                <div class="space-y-4">
                    <div class="info-box-success">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <div><strong>Indicaciones:</strong> ${med.indications || 'No especificadas'}</div>
                    </div>
                    <div class="info-box-danger">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <div><strong>Contraindicaciones:</strong> ${med.contraindications || 'No especificadas'}</div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                        <div class="info-box-age"><svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mx-auto mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg><span>Edad Mínima</span><span>${med.minimumAge || '?'}</span></div>
                        <div class="info-box-pregnancy ${profile.has('pregnancy') ? 'info-box-highlight' : ''}"><svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mx-auto mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg><span>Embarazo</span><span>${med.pregnancy || 'N/A'}</span></div>
                        <div class="info-box-lactation ${profile.has('lactation') ? 'info-box-highlight' : ''}"><svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mx-auto mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path><path d="M12 20a8 8 0 01-8-8H0c0 6.627 5.373 12 12 12v-4zm5.938-3A7.962 7.962 0 0112 20v4c3.042 0 5.824-1.135 7.938-3l-2.647-3z"></path></svg><span>Lactancia</span><span>${med.lactation || 'N/A'}</span></div>
                    </div>
                    
                    <div class="bg-white p-4 rounded-lg space-y-2">
                        <div><strong>Familia:</strong><p>${med.family || 'N/A'}</p></div>
                        <div><strong>Usos:</strong><p>${med.uses || 'N/A'}</p></div>
                        <div><strong>Dosis Adulto:</strong><p>${med.dose_adult || 'N/A'}</p></div>
                        <div><strong>Dosis Pediátrica:</strong><p>${med.dose_pediatric || 'No especificada'}</p></div>
                    </div>

                    ${med.isCalculable ? `<div class="calculator-card !bg-white"><div class="calculator-header !bg-slate-200 !text-slate-800"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M12 21a9 9 0 110-18 9 9 0 010 18z" /></svg><h4 class="font-bold">Calculadora de Dosis Pediátrica</h4></div><div class="calculator-body"><input type="number" id="patientWeight" placeholder="Peso del paciente en kg" class="w-full p-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500"><button id="calculateDoseBtn" class="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors">Calcular Dosis</button></div><div id="doseResult" class="calculator-result"></div></div>` : ''}
                </div>
            </div>
            <div class="modal-footer p-4 flex justify-end">
                <button id="closeModalBtn" class="px-5 py-2 bg-slate-200 text-slate-800 rounded-md hover:bg-slate-300 transition-colors">Cerrar</button>
            </div>
        `;
        selectors.modal.classList.remove('hidden'); 
        setTimeout(() => {
            selectors.modalContent.classList.remove('opacity-0', 'scale-95');
        }, 10);
        
        document.body.style.overflow = 'hidden';
        
        document.getElementById('closeModalBtn').addEventListener('click', closeModal);
        document.getElementById('modalFavButton').addEventListener('click', (e) => toggleFavorite(med.originalIndex, e.currentTarget));
        if (med.isCalculable) setupDoseCalculator(med);
    }
    
    function setupDoseCalculator(med) {
        const calculateBtn = document.getElementById('calculateDoseBtn');
        const weightInput = document.getElementById('patientWeight');
        const resultDiv = document.getElementById('doseResult');
        calculateBtn.addEventListener('click', () => {
            const weight = parseFloat(weightInput.value);
            if (isNaN(weight) || weight <= 0) { resultDiv.innerHTML = '<p class="text-red-600">Por favor, ingrese un peso válido.</p>'; return; }
            const unit = med.isDrops ? 'gotas' : 'ml';
            const dropsPerMl = med.name.includes("Paracetamol") ? 30 : 20;
            let doseRange, frequency;
            if (med.doseMin_mg_kg_dosis) {
                const minDoseUnit = (weight * med.doseMin_mg_kg_dosis / med.concentration) * (med.isDrops ? dropsPerMl : 1);
                const maxDoseUnit = (weight * med.doseMax_mg_kg_dosis / med.concentration) * (med.isDrops ? dropsPerMl : 1);
                doseRange = `${minDoseUnit.toFixed(1)} - ${maxDoseUnit.toFixed(1)} ${unit}`;
                frequency = `cada ${Math.round(24 / med.doseFreq)} horas`;
            } else {
                const intervals = med.doseIntervals.split('-').map(Number);
                const avgIntervals = (intervals[0] + (intervals[1] || intervals[0])) / 2;
                const minDoseUnit = (weight * med.doseMin_mg_kg_dia / avgIntervals / med.concentration) * (med.isDrops ? dropsPerMl : 1);
                const maxDoseUnit = (weight * med.doseMax_mg_kg_dia / avgIntervals / med.concentration) * (med.isDrops ? dropsPerMl : 1);
                doseRange = `${minDoseUnit.toFixed(1)} - ${maxDoseUnit.toFixed(1)} ${unit}`;
                frequency = `cada ${Math.round(24 / avgIntervals)} horas`;
            }
            const durationText = med.duration || '';
            const copyText = `Dar ${doseRange.replace(' - ', ' a ')} vía oral ${frequency} ${durationText}.`;
            resultDiv.innerHTML = `
                <div class="result-item"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v2a2 2 0 01-2 2H7a2 2 0 01-2-2V4z" /><path d="M5 12a2 2 0 012-2h6a2 2 0 012 2v2a2 2 0 01-2 2H7a2 2 0 01-2-2v-2z" /></svg><span><strong>Dosis:</strong> ${doseRange}</span></div>
                <div class="result-item"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" /></svg><span><strong>Frecuencia:</strong> ${frequency}</span></div>
                ${durationText ? `<div class="result-item"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" /></svg><span><strong>Duración:</strong> ${durationText}</span></div>` : ''}
                <button id="copyDoseBtn" class="copy-btn"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" /><path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" /></svg>Copiar Indicación</button>`;
            document.getElementById('copyDoseBtn').addEventListener('click', () => { navigator.clipboard.writeText(copyText).then(() => showToast('¡Indicación copiada!')); });
        });
    }

    function closeModal() { 
        selectors.modalContent.classList.add('opacity-0', 'scale-95');
        setTimeout(() => {
            selectors.modal.classList.add('hidden'); 
            document.body.style.overflow = 'auto'; 
        }, 300);
    }

    // --- CONFIGURACIÓN INICIAL DE FILTROS Y EVENTOS ---
    function populateFilters() {
        const families = ['Todos', ...state.medications.uniqueFamilies];
        selectors.familyFilterContainer.innerHTML = families.map(f => `<button class="filter-btn ${f === 'Todos' ? 'active' : ''}" data-family="${f}">${f}</button>`).join('');
        selectors.themesFilterContainer.innerHTML = Object.entries(clinicalThemes).map(([id, t]) => `<button class="theme-btn" data-theme-id="${id}">${t.name}</button>`).join('');
    }

    function addFilterEventListeners() {
        selectors.familyFilterContainer.addEventListener('click', (e) => {
            const btn = e.target.closest('.filter-btn');
            if (!btn) return;
            state.ui.activeFamily = btn.dataset.family;
            selectors.familiesBtnText.textContent = btn.dataset.family === 'Todos' ? 'Familias' : btn.dataset.family;
            
            setView('medications');
            clearAdvancedFilters(false);
            state.ui.searchTerm = '';
            selectors.searchBar.value = '';

            updateDisplay();
            closeAllDropdowns();
        });
        selectors.themesFilterContainer.addEventListener('click', (e) => {
            const btn = e.target.closest('.theme-btn');
            if (!btn) return;
            setView('themes', btn.dataset.themeId);
            closeAllDropdowns();
        });
    }
    
    function closeAllDropdowns() {
        document.querySelectorAll('.dropdown-panel.is-open').forEach(panel => panel.classList.remove('is-open'));
        document.querySelectorAll('.dropdown-btn').forEach(btn => {
            btn.setAttribute('aria-expanded', 'false');
        });
    }

    function setupAdvancedFilters() {
        const panel = selectors.advancedFilterPanel;
        const filters = {
            'Familias': { type: 'checkbox', options: state.medications.uniqueFamilies, key: 'families' },
            'Presentaciones': { type: 'checkbox', options: state.medications.uniquePresentations, key: 'presentations' },
            'Condiciones': { type: 'checkbox', options: { 'Ajuste Renal Requerido': 'renalDoseAdjust', 'Seguro en Embarazo': 'pregnancySafe', 'Seguro en Lactancia': 'lactationSafe' }, key: 'conditions' }
        };
        let html = '<div class="col-span-full flex justify-between items-center"><h3 class="text-xl font-bold">Filtros Avanzados</h3><button id="clear-adv-filters" class="clear-selection-btn">Limpiar Filtros</button></div>';
        for (const [title, config] of Object.entries(filters)) {
            html += `<div class="adv-filter-group"><h4>${title}</h4>`;
            if (config.key === 'conditions') {
                for (const [label, value] of Object.entries(config.options)) { html += `<label><input type="checkbox" data-key="${value}" data-group="conditions">${label}</label>`; }
            } else {
                 for (const option of config.options) { html += `<label><input type="checkbox" value="${option}" data-group="${config.key}">${option}</label>`; }
            }
            html += `</div>`;
        }
        panel.innerHTML = html;
        panel.addEventListener('change', handleAdvancedFilterChange);
        document.getElementById('clear-adv-filters').addEventListener('click', () => clearAdvancedFilters(true));
    }

    function handleAdvancedFilterChange() {
        state.ui.advancedFilters = {};
        const activeFilters = selectors.advancedFilterPanel.querySelectorAll('input:checked');
        
        activeFilters.forEach(input => {
            const group = input.dataset.group;
            const key = group === 'conditions' ? 'conditions' : group;
            const value = group === 'conditions' ? input.dataset.key : input.value;
            
            if (!state.ui.advancedFilters[key]) {
                 state.ui.advancedFilters[key] = [];
            }
            state.ui.advancedFilters[key].push(value);
        });

        const count = activeFilters.length;
        selectors.advancedFilterCount.textContent = count;
        selectors.advancedFilterCount.classList.toggle('hidden', count === 0);
        
        state.ui.searchTerm = '';
        selectors.searchBar.value = '';
        state.ui.activeFamily = 'Todos';
        selectors.familiesBtnText.textContent = 'Familias';

        if (state.ui.view !== 'medications' && state.ui.view !== 'favorites') {
            setView('medications');
        } else {
            updateDisplay();
        }
    }

    function clearAdvancedFilters(shouldUpdateDisplay = true) {
        selectors.advancedFilterPanel.querySelectorAll('input:checked').forEach(input => input.checked = false);
        state.ui.advancedFilters = {};
        selectors.advancedFilterCount.textContent = 0;
        selectors.advancedFilterCount.classList.add('hidden');
        if (shouldUpdateDisplay) {
            updateDisplay();
        }
    }

    function setupPatientProfile() {
        const profiles = { 'Embarazo': 'pregnancy', 'Lactancia': 'lactation', 'Insuf. Renal': 'renal' };
        selectors.patientProfileControls.innerHTML = Object.entries(profiles)
            .map(([label, key]) => `<button class="profile-btn" data-profile="${key}">${label}</button>`).join('');
        selectors.patientProfileControls.addEventListener('click', (e) => {
            const btn = e.target.closest('.profile-btn');
            if (!btn) return;
            const profile = btn.dataset.profile;
            btn.classList.toggle('active');
            if (state.ui.patientProfile.has(profile)) state.ui.patientProfile.delete(profile);
            else state.ui.patientProfile.add(profile);
            updateDisplay();
        });
    }

    function setupEventListeners() {
        selectors.searchBar.addEventListener('input', debounce((e) => {
            state.ui.searchTerm = e.target.value;
            clearAdvancedFilters(false);
            state.ui.activeFamily = 'Todos';
            selectors.familiesBtnText.textContent = 'Familias';

            if (state.ui.view !== 'medications' && state.ui.view !== 'favorites') {
                setView('medications');
            } else {
                updateDisplay();
            }
        }));

        selectors.searchBar.addEventListener('change', (e) => {
            const term = e.target.value.trim().toLowerCase();
            if (term && !state.searchHistory.includes(term)) {
                state.searchHistory.unshift(term);
                if (state.searchHistory.length > 15) state.searchHistory.pop();
                saveSearchHistory();
            }
        });

        selectors.favoritesBtn.addEventListener('click', () => {
            setView(state.ui.view === 'favorites' ? 'medications' : 'favorites');
            clearAdvancedFilters(false);
            state.ui.searchTerm = '';
            selectors.searchBar.value = '';
        });

        selectors.interactionCheckerBtn.addEventListener('click', () => setView(state.ui.view === 'interaction-checker' ? 'medications' : 'interaction-checker'));
        
        const toggleDropdown = (btn, panel) => {
            const isOpen = panel.classList.toggle('is-open');
            btn.setAttribute('aria-expanded', isOpen);
        };

        selectors.familiesDropdownBtn.addEventListener('click', (e) => { e.stopPropagation(); toggleDropdown(e.currentTarget, selectors.familiesDropdownPanel); });
        selectors.themesDropdownBtn.addEventListener('click', (e) => { e.stopPropagation(); toggleDropdown(e.currentTarget, selectors.themesDropdownPanel); });
        selectors.advancedFilterBtn.addEventListener('click', () => selectors.advancedFilterPanel.classList.toggle('hidden'));
        
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.dropdown-wrapper')) {
                closeAllDropdowns();
            }
             if (e.target.id === 'medicationModal') {
                closeModal();
            }
        });

        document.addEventListener('keydown', (e) => { if (e.key === "Escape" && !selectors.modal.classList.contains('hidden')) closeModal(); });
    }

    // --- FUNCIÓN DE INICIO ---
    async function initializeApp() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('./service-worker.js').catch(err => console.error('SW reg failed:', err));
        }
        
        loadStateFromStorage();
        setupEventListeners();
        
        try {
            const response = await fetch('./medicamentos.json');
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const data = await response.json();
            
            const uniqueMeds = Array.from(new Map(data.map(med => [med.name + med.presentation, med])).values());
            state.medications.all = uniqueMeds.map((med, index) => ({...med, originalIndex: index}))
                                             .sort((a,b) => a.name.localeCompare(b.name));
            
            state.medications.uniqueFamilies = [...new Set(state.medications.all.map(m => m.simpleFamily).filter(Boolean))].sort();
            const presentations = new Set();
            state.medications.all.forEach(m => {
                const p = normalizeText(m.presentation);
                if (p.includes('tableta') || p.includes('cápsula') || p.includes('perlas') || p.includes('grageas') || p.includes('comprimido')) presentations.add('Tabletas/Cápsulas');
                else if (p.includes('jarabe') || p.includes('suspensi') || p.includes('gotas') || p.includes('soluci')) presentations.add('Líquidos Orales');
                else if (p.includes('inyectable')) presentations.add('Inyectables');
                else if (p.includes('crema') || p.includes('gel') || p.includes('ungüento')) presentations.add('Tópicos');
                else if (p.includes('óvulo') || p.includes('supositorio')) presentations.add('Supositorios/Óvulos');
                else if (p.includes('inhalador') || p.includes('nebulizar') || p.includes('nasal')) presentations.add('Inhalados/Nasales');
            });
            state.medications.uniquePresentations = [...presentations].sort();

            selectors.medCount.textContent = state.medications.all.length;
            
            populateFilters();
            addFilterEventListeners();
            setupAdvancedFilters();
            setupPatientProfile();
            
            updateDisplay();

        } catch (error) {
            console.error('Error al inicializar la app:', error);
            selectors.skeletonLoader.innerHTML = '<p class="text-red-500 col-span-full text-center">No se pudieron cargar los medicamentos.</p>';
        }
    }

    initializeApp();
});
