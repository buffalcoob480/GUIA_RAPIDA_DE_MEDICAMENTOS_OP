document.addEventListener('DOMContentLoaded', () => {
    // --- CONTENIDO DE TEMAS CLÍNICOS ---
    const clinicalThemes = {
        'dm2-inicio': { name: 'Manejo Inicial de Diabetes Mellitus Tipo 2', content: `<h2>Manejo Inicial de Diabetes Mellitus Tipo 2</h2><p>Esta guía resume el enfoque inicial para un paciente recién diagnosticado con Diabetes Mellitus tipo 2 (DM2), basado en guías clínicas comunes.</p><h3>Paso 1: Diagnóstico y Metas Iniciales</h3><p>El diagnóstico se confirma con HbA1c ≥ 6.5%, Glucosa en ayuno ≥ 126 mg/dL, o Glucosa a las 2h post-carga ≥ 200 mg/dL. La meta inicial de <strong>HbA1c</strong> es generalmente <strong>< 7%</strong>.</p><h3>Paso 2: Tratamiento No Farmacológico</h3><p>Es la piedra angular del manejo e incluye:</p><ul><li><strong>Educación sobre la enfermedad:</strong> Automonitoreo, reconocimiento de hipo/hiperglucemia.</li><li><strong>Plan de alimentación:</strong> Reducción de carbohidratos simples y grasas saturadas.</li><li><strong>Actividad física:</strong> Mínimo 150 minutos de ejercicio aeróbico moderado a la semana.</li><li><strong>Pérdida de peso:</strong> Objetivo inicial del 5-10% del peso corporal.</li></ul><h3>Paso 3: Tratamiento Farmacológico de Primera Línea</h3><p>A menos que existan contraindicaciones, el tratamiento de elección para iniciar es:</p><ul><li><strong><a href="#" class="med-link" data-med-name="Metformina">Metformina</a>:</strong> Iniciar con 500-850 mg una o dos veces al día con los alimentos para minimizar efectos gastrointestinales. Incrementar gradualmente cada 1-2 semanas hasta una dosis objetivo de 2000 mg/día.</li></ul><h3>Paso 4: Terapia Dual (Si no se alcanzan metas en 3 meses)</h3><p>Si la HbA1c sigue por encima de la meta después de 3 meses de monoterapia con Metformina, se debe añadir un segundo agente.</p><h4><strong>Si existe enfermedad cardiovascular (ASCVD), insuficiencia cardíaca (IC) o enfermedad renal (ERC):</strong></h4><ul><li>Añadir un <strong>agonista del receptor de GLP-1</strong> (ej. <a href="#" class="med-link" data-med-name="Liraglutida">Liraglutida</a>) o un <strong>inhibidor de SGLT2</strong> (ej. <a href="#" class="med-link" data-med-name="Dapagliflozina">Dapagliflozina</a>).</li></ul><h4><strong>Para minimizar hipoglucemia:</strong></h4><ul><li>Añadir un <strong>inhibidor de DPP-4</strong> (ej. <a href="#" class="med-link" data-med-name="Sitagliptina">Sitagliptina</a>), un agonista de GLP-1, un inhibidor de SGLT2, o una <strong>Tiazolidinediona (TZD)</strong> (ej. <a href="#" class="med-link" data-med-name="Pioglitazona">Pioglitazona</a>).</li></ul><h4><strong>Para promover pérdida de peso:</strong></h4><ul><li>Añadir un <strong>agonista de GLP-1</strong> o un <strong>inhibidor de SGLT2</strong>.</li></ul><h4><strong>Si el costo es una barrera:</strong></h4><ul><li>Añadir una <strong>sulfonilurea</strong> (ej. <a href="#" class="med-link" data-med-name="Glibenclamida">Glibenclamida</a>) o una TZD.</li></ul><div class="bibliografia"><h4>Referencias</h4><p>Adaptado de: ADA. Standards of Medical Care in Diabetes—2023. Diabetes Care 2023;46(Suppl. 1):S140–S157.</p></div>` },
        'crisis-hipertensivas': { name: 'Manejo de Crisis Hipertensivas', content: `<h2>Manejo de Crisis Hipertensivas</h2><p>Una crisis hipertensiva se define como una elevación severa de la presión arterial (PA), generalmente >180/120 mmHg. Se clasifica en urgencia o emergencia según la presencia de daño a órgano blanco.</p><h3>1. Urgencia Hipertensiva</h3><p><strong>Definición:</strong> Elevación severa de la PA <strong>sin</strong> evidencia de daño agudo a órgano blanco (cerebro, corazón, riñón, retina).</p><p><strong>Manejo:</strong> El objetivo es reducir la PA gradualmente en 24-48 horas utilizando medicamentos orales. Una reducción demasiado rápida puede causar isquemia.</p><ul><li><strong>Tratamiento de elección:</strong> Reiniciar o ajustar el tratamiento antihipertensivo del paciente.</li><li><strong>Fármacos orales comúnmente usados:</strong><ul><li><strong><a href="#" class="med-link" data-med-name="Captopril">Captopril</a>:</strong> 25 mg vía oral. Es un IECA de acción rápida.</li><li><strong><a href="#" class="med-link" data-med-name="Nifedipino">Nifedipino</a> de liberación prolongada:</strong> 30-60 mg. <strong>NUNCA usar nifedipino sublingual de acción corta</strong> por el riesgo de caídas bruscas de la PA.</li></ul></li></ul><h3>2. Emergencia Hipertensiva</h3><p><strong>Definición:</strong> Elevación severa de la PA <strong>con</strong> evidencia de daño agudo y progresivo a órgano blanco. Requiere hospitalización y tratamiento intravenoso inmediato.</p><p><strong>Manejo:</strong> El objetivo es reducir la Presión Arterial Media (PAM) en un 10-20% en la primera hora, y otro 5-15% en las siguientes 23 horas.</p><ul><li><strong>Encefalopatía Hipertensiva:</strong> Reducción inmediata de la PAM en 20-25%. Fármaco de elección: <strong><a href="#" class="med-link" data-med-name="Labetalol">Labetalol</a></strong> o <strong><a href="#" class="med-link" data-med-name="Nitroprusiato de Sodio">Nitroprusiato</a></strong>.</li><li><strong>Accidente Cerebrovascular (EVC) Isquémico:</strong> No se recomienda bajar la PA a menos que sea >220/120 mmHg (o >185/110 si es candidato a trombólisis).</li><li><strong>Disección Aórtica:</strong> Reducción rápida de la PA sistólica a <120 mmHg. Fármaco de elección: Betabloqueadores como <strong><a href="#" class="med-link" data-med-name="Labetalol">Labetalol</a></strong>.</li><li><strong>Edema Agudo de Pulmón Cardiogénico:</strong> Vasodilatadores y diuréticos de asa como <strong><a href="#" class="med-link" data-med-name="Furosemida">Furosemida</a></strong>.</li></ul><div class="bibliografia"><h4>Referencias</h4><p>Adaptado de: Whelton PK, et al. 2017 ACC/AHA/AAPA/ABC/ACPM/AGS/APhA/ASH/ASPC/NMA/PCNA Guideline for the Prevention, Detection, Evaluation, and Management of High Blood Pressure in Adults.</p></div>` }
    };

    const state = {
        medications: { all: [], favorites: new Set() },
        ui: { view: 'medications', activeFamily: 'Todos', activeThemeId: null, searchTerm: '' },
        interactionChecker: { selected: [] },
        searchHistory: [],
    };

    const selectors = {
        medicationSection: document.getElementById('medication-section'),
        themesSection: document.getElementById('themes-section'),
        interactionSection: document.getElementById('interaction-section'),
        medicationList: document.getElementById('medication-list'),
        searchBar: document.getElementById('searchBar'),
        searchHistory: document.getElementById('search-history'),
        noResults: document.getElementById('no-results'),
        familyFilterContainer: document.getElementById('familyFilterContainer'),
        themesFilterContainer: document.getElementById('themesFilterContainer'),
        favoritesBtn: document.getElementById('favorites-btn'),
        interactionCheckerBtn: document.getElementById('interaction-checker-btn'),
        familiesDropdownBtn: document.getElementById('families-dropdown-btn'),
        familiesBtnText: document.getElementById('families-btn-text'),
        themesDropdownBtn: document.getElementById('themes-dropdown-btn'),
        familiesDropdownPanel: document.getElementById('families-dropdown-panel'),
        themesDropdownPanel: document.getElementById('themes-dropdown-panel'),
        modal: document.getElementById('medicationModal'),
        modalContent: document.getElementById('modal-content-wrapper'),
        cardTemplate: document.getElementById('medication-card-template'),
        medCount: document.getElementById('med-count'),
        loadingIndicator: document.getElementById('loading-indicator')
    };
    
    // --- LÓGICA DE DATOS Y ESTADO ---
    const normalizeText = (str = '') => str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    
    function loadStateFromStorage() {
        const favs = localStorage.getItem('medFavorites');
        if (favs) state.medications.favorites = new Set(JSON.parse(favs));
        const history = localStorage.getItem('medSearchHistory');
        if (history) state.searchHistory = JSON.parse(history);
    }

    function saveFavorites() {
        localStorage.setItem('medFavorites', JSON.stringify(Array.from(state.medications.favorites)));
    }

    function saveSearchHistory() {
        if (state.searchHistory.length > 10) state.searchHistory.shift();
        localStorage.setItem('medSearchHistory', JSON.stringify(state.searchHistory));
    }
    
    function addToSearchHistory(term) {
        const trimmedTerm = term.trim();
        if (!trimmedTerm || state.searchHistory.includes(trimmedTerm)) return;
        state.searchHistory.unshift(trimmedTerm);
        saveSearchHistory();
        renderSearchHistory();
    }

    function toggleFavorite(medId) {
        if (state.medications.favorites.has(medId)) {
            state.medications.favorites.delete(medId);
        } else {
            state.medications.favorites.add(medId);
        }
        saveFavorites();
        updateDisplay();
    }

    // --- LÓGICA DE VISTAS ---
    function setView(view) {
        state.ui.view = view;
        document.body.dataset.view = view; // Para posible CSS específico
        updateDisplay();
    }

    function updateDisplay() {
        const searchTerm = normalizeText(state.ui.searchTerm);
        
        selectors.medicationSection.classList.toggle('hidden', state.ui.view !== 'medications' && state.ui.view !== 'favorites');
        selectors.themesSection.classList.toggle('hidden', state.ui.view !== 'themes');
        selectors.interactionSection.classList.toggle('hidden', state.ui.view !== 'interaction-checker');
        
        switch(state.ui.view) {
            case 'themes':
                renderTheme(state.ui.activeThemeId);
                break;
            case 'interaction-checker':
                renderInteractionChecker();
                break;
            default: // 'medications' or 'favorites'
                let results = [];
                if (state.ui.view === 'favorites') {
                    results = state.medications.all.filter(med => state.medications.favorites.has(med.originalIndex));
                } else {
                    if (searchTerm) {
                        results = state.medications.all.map(med => ({ ...med, score: calculateRelevance(med, searchTerm) })).filter(med => med.score > 0).sort((a, b) => b.score - a.score);
                    } else {
                        results = state.ui.activeFamily === 'Todos' ? state.medications.all : state.medications.all.filter(med => med.simpleFamily === state.ui.activeFamily);
                    }
                }
                renderMedications(results);
                break;
        }
        updateActiveButtons();
    }

    function updateActiveButtons() {
        document.querySelectorAll('.filter-controls .active').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.dropdown-panel .active').forEach(btn => btn.classList.remove('active'));

        switch(state.ui.view) {
            case 'favorites':
                selectors.favoritesBtn.classList.add('active');
                break;
            case 'themes':
                selectors.themesDropdownBtn.classList.add('active');
                document.querySelector(`.theme-btn[data-theme-id="${state.ui.activeThemeId}"]`)?.classList.add('active');
                break;
            case 'interaction-checker':
                selectors.interactionCheckerBtn.classList.add('active');
                break;
            case 'medications':
                if (!state.ui.searchTerm) {
                    selectors.familiesDropdownBtn.classList.add('active');
                    document.querySelector(`.filter-btn[data-family="${state.ui.activeFamily}"]`)?.classList.add('active');
                }
                break;
        }
        selectors.familiesBtnText.textContent = (state.ui.activeFamily === 'Todos' || state.ui.view !== 'medications') ? 'Familias' : `Familia: ${state.ui.activeFamily}`;
    }

    // --- RENDERIZADO DE COMPONENTES ---
    
    function renderMedications(meds) {
        selectors.loadingIndicator.classList.add('hidden');
        selectors.medicationList.innerHTML = '';
        selectors.noResults.classList.toggle('hidden', meds.length > 0);
        meds.forEach(med => selectors.medicationList.appendChild(createMedicationCard(med)));
    }

    function renderTheme(themeId) {
        const theme = clinicalThemes[themeId];
        selectors.themesSection.innerHTML = theme ? theme.content : `<p>Tema no encontrado.</p>`;
        selectors.themesSection.querySelectorAll('.med-link').forEach(link => {
            link.addEventListener('click', e => {
                e.preventDefault();
                const med = state.medications.all.find(m => normalizeText(m.name) === normalizeText(e.target.dataset.medName));
                if (med) openModal(med);
            });
        });
    }
    
    // ... (El código para createMedicationCard, openModal, closeModal, calculateDose, etc., se mantiene igual que en la respuesta anterior)
    // ... (El código de inicialización initializeApp() también se mantiene)
    
    // --- INICIALIZACIÓN ---
    initializeApp();
});
