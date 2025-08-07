document.addEventListener('DOMContentLoaded', () => {
    // Definición de temas clínicos
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

    // Estado de la aplicación
    const state = {
        medications: {
            all: [],
            favorites: new Set()
        },
        ui: {
            view: 'medications',
            activeFamily: 'Todos',
            activeThemeId: null,
            searchTerm: ''
        },
        searchHistory: [],
    };

    // Selectores del DOM
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
        loadingIndicator: document.getElementById('loading-indicator'),
        searchHistoryDatalist: document.getElementById('search-history'),
        familiesBtnText: document.getElementById('families-btn-text'),
    };

    // --- FUNCIONES AUXILIARES ---
    const normalizeText = (str = '') => str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    function calculateRelevance(med, term) {
        if (normalizeText(med.name).includes(term)) return 10;
        if (normalizeText(med.family).includes(term)) return 5;
        if (normalizeText(med.uses).includes(term)) return 3;
        return 0;
    }

    // --- MANEJO DEL ESTADO (FAVORITOS, HISTORIAL) ---
    function loadStateFromStorage() {
        const favs = localStorage.getItem('medFavorites');
        if (favs) state.medications.favorites = new Set(JSON.parse(favs));
        
        const history = localStorage.getItem('medSearchHistory');
        if (history) state.searchHistory = JSON.parse(history);
        updateSearchHistoryDatalist();
    }

    function saveFavorites() {
        localStorage.setItem('medFavorites', JSON.stringify(Array.from(state.medications.favorites)));
    }

    function saveSearchHistory() {
        localStorage.setItem('medSearchHistory', JSON.stringify(state.searchHistory));
        updateSearchHistoryDatalist();
    }
    
    function updateSearchHistoryDatalist() {
        selectors.searchHistoryDatalist.innerHTML = state.searchHistory.map(term => `<option value="${term}"></option>`).join('');
    }

    function toggleFavorite(medId, button) {
        if (state.medications.favorites.has(medId)) {
            state.medications.favorites.delete(medId);
            button.classList.remove('is-favorite');
        } else {
            state.medications.favorites.add(medId);
            button.classList.add('is-favorite');
        }
        saveFavorites();
        if (state.ui.view === 'favorites') {
            updateDisplay();
        }
    }

    // --- RENDERIZADO Y VISTAS ---
    function setView(view, id = null) {
        state.ui.view = view;
        state.ui.searchTerm = '';
        selectors.searchBar.value = '';

        if (view !== 'medications') {
            state.ui.activeFamily = 'Todos';
            selectors.familiesBtnText.textContent = 'Familias';
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelector('.filter-btn[data-family="Todos"]').classList.add('active');
        }
        
        if (view === 'themes') {
            state.ui.activeThemeId = id;
        }

        updateDisplay();
    }

    function updateDisplay() {
        selectors.medicationSection.classList.toggle('hidden', state.ui.view !== 'medications' && state.ui.view !== 'favorites');
        selectors.themesSection.classList.toggle('hidden', state.ui.view !== 'themes');
        selectors.interactionSection.classList.toggle('hidden', state.ui.view !== 'interaction-checker');
        
        let results = [];
        const searchTerm = normalizeText(state.ui.searchTerm);

        if (state.ui.view === 'favorites') {
            results = state.medications.all.filter(med => state.medications.favorites.has(med.originalIndex));
        } else if (state.ui.view === 'medications') {
            if (searchTerm) {
                results = state.medications.all
                    .map(med => ({ ...med, score: calculateRelevance(med, searchTerm) }))
                    .filter(med => med.score > 0)
                    .sort((a, b) => b.score - a.score);
            } else {
                results = state.ui.activeFamily === 'Todos' ?
                    state.medications.all :
                    state.medications.all.filter(med => med.simpleFamily === state.ui.activeFamily);
            }
        } else if (state.ui.view === 'interaction-checker') {
            renderInteractionChecker();
        }
        
        renderMedications(results);

        if (state.ui.view === 'themes') {
            renderTheme(state.ui.activeThemeId);
        }
    }
    
    function renderInteractionChecker() {
        selectors.interactionSection.innerHTML = `
            <div class="interaction-checker-container">
                <div class="interaction-header">
                    <h2>Verificador de Interacciones</h2>
                    <p>Seleccione dos o más medicamentos para verificar posibles interacciones.</p>
                </div>
                <div class="interaction-body">
                    <div class="med-selection-list">
                        ${state.medications.all.map(med => `
                            <button class="interaction-med-btn" data-med-name="${med.name}">${med.name}</button>
                        `).join('')}
                    </div>
                    <div class="interaction-results">
                        <h3>Resultados</h3>
                        <div id="interaction-results-content">
                            <p class="text-slate-500">Seleccione medicamentos de la lista.</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    
        const medButtons = selectors.interactionSection.querySelectorAll('.interaction-med-btn');
        const resultsContent = document.getElementById('interaction-results-content');
        let selectedMeds = [];
    
        medButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                btn.classList.toggle('selected');
                const medName = btn.dataset.medName;
                if (selectedMeds.includes(medName)) {
                    selectedMeds = selectedMeds.filter(name => name !== medName);
                } else {
                    selectedMeds.push(medName);
                }
                checkInteractions(selectedMeds, resultsContent);
            });
        });
    }

    function checkInteractions(selectedMedNames, resultsContent) {
        if (selectedMedNames.length < 2) {
            resultsContent.innerHTML = '<p class="text-slate-500">Seleccione al menos dos medicamentos.</p>';
            return;
        }
    
        const interactions = [];
        const selectedMeds = state.medications.all.filter(med => selectedMedNames.includes(med.name));
    
        for (let i = 0; i < selectedMeds.length; i++) {
            for (let j = i + 1; j < selectedMeds.length; j++) {
                const med1 = selectedMeds[i];
                const med2 = selectedMeds[j];
    
                if (med1.interactions) {
                    for (const level in med1.interactions) {
                        med1.interactions[level].forEach(interaction => {
                            if (interaction.toLowerCase().includes(med2.name.toLowerCase())) {
                                interactions.push({
                                    meds: [med1.name, med2.name],
                                    level: level,
                                    description: interaction
                                });
                            }
                        });
                    }
                }
    
                if (med2.interactions) {
                    for (const level in med2.interactions) {
                        med2.interactions[level].forEach(interaction => {
                            if (interaction.toLowerCase().includes(med1.name.toLowerCase())) {
                                interactions.push({
                                    meds: [med2.name, med1.name],
                                    level: level,
                                    description: interaction
                                });
                            }
                        });
                    }
                }
            }
        }
    
        if (interactions.length === 0) {
            resultsContent.innerHTML = '<p class="text-green-600">No se encontraron interacciones conocidas entre los medicamentos seleccionados.</p>';
        } else {
            resultsContent.innerHTML = interactions.map(int => `
                <div class="interaction-item">
                    <p><strong>${int.meds[0]} + ${int.meds[1]}</strong></p>
                    <p class="level-${int.level}">${int.level.charAt(0).toUpperCase() + int.level.slice(1)}: ${int.description}</p>
                </div>
            `).join('');
        }
    }

    function renderMedications(meds) {
        selectors.loadingIndicator.classList.add('hidden');
        selectors.medicationList.innerHTML = '';
        selectors.noResults.classList.toggle('hidden', meds.length > 0 || state.ui.view === 'themes' || state.ui.view === 'interaction-checker');
        meds.forEach(med => {
            const card = createMedicationCard(med);
            selectors.medicationList.appendChild(card);
        });
    }

    function createMedicationCard(med) {
        const cardClone = selectors.cardTemplate.content.cloneNode(true);
        const cardElement = cardClone.querySelector('article');
        const favButton = cardClone.querySelector('.favorite-btn-card');
        const imgElement = cardClone.querySelector('.card-img');

        cardClone.querySelector('.card-name').textContent = med.name;
        cardClone.querySelector('.card-presentation').textContent = med.presentation;
        cardClone.querySelector('.card-family').textContent = med.family;
        cardClone.querySelector('.card-uses').textContent = med.uses;

        if (state.medications.favorites.has(med.originalIndex)) {
            favButton.classList.add('is-favorite');
        }
        
        imgElement.src = `https://placehold.co/400x200/e0f2fe/083344?text=${encodeURIComponent(med.name)}`;
        imgElement.alt = med.name;


        favButton.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleFavorite(med.originalIndex, favButton);
        });

        cardElement.addEventListener('click', () => openModal(med));
        return cardClone;
    }

    function renderTheme(themeId) {
        const theme = clinicalThemes[themeId];
        if (theme && theme.content) {
            selectors.themesSection.innerHTML = theme.content;
            selectors.themesSection.querySelectorAll('.med-link').forEach(link => {
                link.addEventListener('click', e => {
                    e.preventDefault();
                    const medName = e.target.dataset.medName;
                    const med = state.medications.all.find(m => normalizeText(m.name) === normalizeText(medName));
                    if (med) openModal(med);
                });
            });
        } else {
            selectors.themesSection.innerHTML = `<p class="text-center p-8">Contenido del tema no encontrado.</p>`;
        }
    }
    
    function openModal(med) {
        const isFavorite = state.medications.favorites.has(med.originalIndex);
    
        let calculatorHtml = '';
        if (med.isCalculable) {
            calculatorHtml = `
            <div class="md:col-span-2 mt-4">
                <div class="calculator-card">
                    <div class="calculator-header">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M12 21a9 9 0 110-18 9 9 0 010 18z" /></svg>
                        <h4 class="font-bold">Calculadora de Dosis Pediátrica</h4>
                    </div>
                    <div class="calculator-body">
                        <input type="number" id="patientWeight" placeholder="Peso del paciente en kg" class="w-full p-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500">
                        <button id="calculateDoseBtn" class="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors">Calcular Dosis</button>
                    </div>
                    <div id="doseResult" class="calculator-result"></div>
                </div>
            </div>`;
        }
    
        selectors.modalContent.innerHTML = `
            <div class="p-6 border-b flex justify-between items-start">
                <div>
                    <h2 id="modalTitle" class="text-2xl font-bold text-slate-800">${med.name}</h2>
                    <p class="text-slate-600">${med.presentation}</p>
                </div>
                <button id="modalFavButton" class="text-3xl ${isFavorite ? 'is-favorite' : 'text-slate-300'}" aria-label="Añadir a favoritos">★</button>
            </div>
    
            <div class="p-6 overflow-y-auto">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-700">
                    <div class="md:col-span-2">
                        <img src="https://placehold.co/600x300/e0f2fe/083344?text=${encodeURIComponent(med.name)}" alt="${med.name}" class="w-full h-48 object-cover rounded-lg mb-4">
                    </div>

                    <div class="md:col-span-2 info-box-success">
                         <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
                        <p><strong>Indicaciones:</strong> ${med.indications || 'No especificadas'}</p>
                    </div>
                    <div class="md:col-span-2 info-box-danger">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" /></svg>
                        <p><strong>Contraindicaciones:</strong> ${med.contraindications || 'No especificadas'}</p>
                    </div>
                    <div class="md:col-span-2 info-box-warning">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.21 3.03-1.742 3.03H4.42c-1.532 0-2.492-1.696-1.742-3.03l5.58-9.92zM10 13a1 1 0 110-2 1 1 0 010 2zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" /></svg>
                        <p><strong>Nota:</strong> ${med.notes || 'Revisar indicaciones específicas del fabricante. Administrar con alimentos si causa malestar gastrointestinal.'}</p>
                    </div>
                    
                    <div class="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-2 text-center">
                        <div class="info-box-age">
                            <span class="font-bold">Edad Mínima</span>
                            <span>${med.minimumAge || '?'}</span>
                        </div>
                        <div class="info-box-pregnancy">
                             <span class="font-bold">Embarazo</span>
                            <span>${med.pregnancy || 'Consultar'}</span>
                        </div>
                        <div class="info-box-lactation">
                             <span class="font-bold">Lactancia</span>
                            <span>${med.lactation || 'Consultar'}</span>
                        </div>
                    </div>

                    <div><strong>Familia:</strong><p>${med.family || 'N/A'}</p></div>
                    <div><strong>Usos:</strong><p>${med.uses || 'N/A'}</p></div>
                    <div><strong>Dosis Adulto:</strong><p>${med.dose_adult || 'N/A'}</p></div>
                    <div><strong>Dosis Pediátrica:</strong><p>${med.dose_pediatric || 'No especificada'}</p></div>

                    ${calculatorHtml}
                </div>
            </div>
    
            <div class="p-4 bg-slate-50 border-t flex justify-end">
                <button id="closeModalBtn" class="px-4 py-2 bg-slate-200 rounded-md hover:bg-slate-300 transition-colors">Cerrar</button>
            </div>
        `;
        
        selectors.modal.classList.remove('hidden');
        selectors.modal.scrollTop = 0;
        
        selectors.modalContent.focus();
        document.getElementById('closeModalBtn').addEventListener('click', closeModal);
        document.getElementById('modalFavButton').addEventListener('click', (e) => toggleFavorite(med.originalIndex, e.currentTarget));

        if (med.isCalculable) {
            const calculateBtn = document.getElementById('calculateDoseBtn');
            const weightInput = document.getElementById('patientWeight');
            const resultDiv = document.getElementById('doseResult');

            calculateBtn.addEventListener('click', () => {
                const weight = parseFloat(weightInput.value);
                if (isNaN(weight) || weight <= 0) {
                    resultDiv.innerHTML = '<p class="text-red-600">Por favor, ingrese un peso válido.</p>';
                    return;
                }
                
                let doseText = '';
                let copyText = '';
                const unit = med.isDrops ? 'gotas' : 'ml';
                const via = 'vía oral';
                const dropsPerMl = 20;

                let doseRange, frequency, durationText;

                if (med.doseMin_mg_kg_dosis) {
                    const minDoseMg = weight * med.doseMin_mg_kg_dosis;
                    const maxDoseMg = weight * med.doseMax_mg_kg_dosis;
                    let minDoseUnit = minDoseMg / med.concentration;
                    let maxDoseUnit = maxDoseMg / med.concentration;
                    
                    if (med.isDrops) {
                        minDoseUnit *= dropsPerMl;
                        maxDoseUnit *= dropsPerMl;
                    }
                    
                    doseRange = `${minDoseUnit.toFixed(1)} - ${maxDoseUnit.toFixed(1)} ${unit}`;
                    frequency = med.doseFreq ? `cada ${Math.round(24 / med.doseFreq)} horas` : '';
                } else {
                    const minDoseMgDay = weight * med.doseMin_mg_kg_dia;
                    const maxDoseMgDay = weight * med.doseMax_mg_kg_dia;
                    const intervals = med.doseIntervals.split('-').map(Number);
                    const avgIntervals = (intervals[0] + (intervals[1] || intervals[0])) / 2;
                    let minDoseUnitPerTime = (minDoseMgDay / avgIntervals) / med.concentration;
                    let maxDoseUnitPerTime = (maxDoseMgDay / avgIntervals) / med.concentration;

                    if (med.isDrops) {
                        minDoseUnitPerTime *= dropsPerMl;
                        maxDoseUnitPerTime *= dropsPerMl;
                    }
                    
                    doseRange = `${minDoseUnitPerTime.toFixed(1)} - ${maxDoseUnitPerTime.toFixed(1)} ${unit}`;
                    frequency = `cada ${Math.round(24 / avgIntervals)} horas`;
                }

                durationText = med.duration || '';
                copyText = `${doseRange.replace(' - ', ' a ')} ${via} ${frequency} ${durationText}.`;

                resultDiv.innerHTML = `
                    <div class="result-item">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v2a2 2 0 01-2 2H7a2 2 0 01-2-2V4z" /><path d="M5 12a2 2 0 012-2h6a2 2 0 012 2v2a2 2 0 01-2 2H7a2 2 0 01-2-2v-2z" /></svg>
                        <span><strong>Dosis:</strong> ${doseRange}</span>
                    </div>
                    <div class="result-item">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" /></svg>
                        <span><strong>Frecuencia:</strong> ${frequency}</span>
                    </div>
                    ${durationText ? `
                    <div class="result-item">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" /></svg>
                        <span><strong>Duración:</strong> ${durationText}</span>
                    </div>` : ''}
                    <button id="copyDoseBtn" class="copy-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" /><path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" /></svg>
                        Copiar Indicación
                    </button>`;

                document.getElementById('copyDoseBtn').addEventListener('click', (e) => {
                    navigator.clipboard.writeText(copyText).then(() => {
                        e.currentTarget.innerHTML = `
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
                            ¡Copiado!`;
                        setTimeout(() => {
                           e.currentTarget.innerHTML = `
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" /><path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" /></svg>
                                Copiar Indicación`;
                        }, 2000);
                    });
                });
            });
        }
    }

    function closeModal() {
        selectors.modal.classList.add('hidden');
    }

    // --- CONFIGURACIÓN INICIAL ---
    function populateFilters() {
        const families = ['Todos', ...new Set(state.medications.all.map(med => med.simpleFamily).filter(Boolean))].sort();
        selectors.familyFilterContainer.innerHTML = families.map(family =>
            `<button class="filter-btn ${family === 'Todos' ? 'active' : ''}" data-family="${family}">${family}</button>`
        ).join('');

        selectors.themesFilterContainer.innerHTML = Object.entries(clinicalThemes).map(([id, theme]) =>
            `<button class="theme-btn" data-theme-id="${id}">${theme.name}</button>`
        ).join('');

        addFilterEventListeners();
    }

    function addFilterEventListeners() {
        selectors.familyFilterContainer.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                selectors.familyFilterContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                state.ui.activeFamily = btn.dataset.family;
                selectors.familiesBtnText.textContent = btn.dataset.family;
                setView('medications');
                closeAllDropdowns();
            });
        });

        selectors.themesFilterContainer.querySelectorAll('.theme-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                setView('themes', btn.dataset.themeId);
                closeAllDropdowns();
            });
        });
    }

    function closeAllDropdowns() {
        selectors.familiesDropdownPanel.classList.remove('is-open');
        selectors.themesDropdownPanel.classList.remove('is-open');
        selectors.familiesDropdownBtn.classList.remove('active');
        selectors.themesDropdownBtn.classList.remove('active');
    }

    function setupEventListeners() {
        selectors.searchBar.addEventListener('input', (e) => {
            state.ui.searchTerm = e.target.value;
            // Reset filters for a better search experience
            state.ui.activeFamily = 'Todos';
            selectors.familiesBtnText.textContent = 'Familias';
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            document.querySelector('.filter-btn[data-family="Todos"]').classList.add('active');
            
            state.ui.view = 'medications';
            updateDisplay();
        });
        
        selectors.searchBar.addEventListener('change', (e) => {
            const term = e.target.value.trim();
            if (term && !state.searchHistory.includes(term)) {
                state.searchHistory.unshift(term);
                if (state.searchHistory.length > 10) state.searchHistory.pop();
                saveSearchHistory();
            }
        });

        selectors.favoritesBtn.addEventListener('click', () => setView('favorites'));
        selectors.interactionCheckerBtn.addEventListener('click', () => setView('interaction-checker'));
        
        selectors.familiesDropdownBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            selectors.familiesDropdownPanel.classList.toggle('is-open');
            selectors.familiesDropdownBtn.classList.toggle('active');
            selectors.themesDropdownPanel.classList.remove('is-open');
            selectors.themesDropdownBtn.classList.remove('active');
        });

        selectors.themesDropdownBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            selectors.themesDropdownPanel.classList.toggle('is-open');
            selectors.themesDropdownBtn.classList.toggle('active');
            selectors.familiesDropdownPanel.classList.remove('is-open');
            selectors.familiesDropdownBtn.classList.remove('active');
        });

        document.addEventListener('click', () => {
            closeAllDropdowns();
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === "Escape" && !selectors.modal.classList.contains('hidden')) {
                closeModal();
            }
        });
        
        selectors.modal.addEventListener('click', (e) => {
            if (e.target.id === 'medicationModal') {
                closeModal();
            }
        });

        document.getElementById('modoAlfredoToggle').addEventListener('click', () => {
            document.body.classList.toggle('dark');
        });
    }
    
    // --- FUNCIÓN DE INICIO ---
    function initializeApp() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('./service-worker.js').catch(err => {
                console.error('Service worker registration failed:', err);
            });
        }
        
        loadStateFromStorage();
        setupEventListeners();

        fetch('./medicamentos.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                // Simulación de datos de embarazo/lactancia para demostración
                const dataWithMockInfo = data.map(med => {
                    if (med.name.includes("Ibuprofeno")) {
                        med.pregnancy = "Riesgo. Evitar 3er trimestre.";
                        med.lactation = "Seguro (e-lactancia.org)";
                        med.minimumAge = "3 meses";
                        med.notes = "No administrar con otros AINEs. Riesgo de sangrado gastrointestinal en uso prolongado.";
                    }
                    if (med.name.includes("Amoxicilina")) {
                        med.pregnancy = "Seguro";
                        med.lactation = "Seguro (e-lactancia.org)";
                        med.minimumAge = "Recién nacido";
                        med.notes = "Tomar el tratamiento completo aunque los síntomas mejoren antes para evitar resistencias.";
                    }
                    if (med.name.includes("Paracetamol")) {
                        med.pregnancy = "Seguro";
                        med.lactation = "Seguro (e-lactancia.org)";
                        med.minimumAge = "Recién nacido";
                        med.notes = "Dosis excesivas pueden causar daño hepático grave. No exceder 4g/día en adultos.";
                    }
                    if (med.name.includes("Loratadina")) {
                         med.pregnancy = "Consultar Médico";
                        med.lactation = "Seguro (e-lactancia.org)";
                        med.minimumAge = "2 años";
                        med.notes = "Aunque no suele causar somnolencia, puede ocurrir en algunos pacientes.";
                    }
                    if (med.name.includes("Ambroxol")) {
                         med.pregnancy = "Evitar 1er Trimestre";
                        med.lactation = "Seguro (e-lactancia.org)";
                        med.minimumAge = "2 años";
                        med.notes = "Asegurar una buena hidratación para ayudar a fluidificar las secreciones.";
                    }
                     if (med.name.includes("Ácido Fólico")) {
                        med.pregnancy = "Esencial";
                        med.lactation = "Seguro";
                        med.minimumAge = "N/A";
                        med.notes = "Dosis profiláctica para embarazo es de 400 mcg/día.";
                    }
                    return med;
                });

                const uniqueMeds = Array.from(new Map(dataWithMockInfo.map(med => [med.name + med.presentation, med])).values());
                state.medications.all = uniqueMeds.map((med, index) => ({
                    ...med,
                    originalIndex: index,
                    normalizedName: normalizeText(med.name),
                    isFavorite: state.medications.favorites.has(index)
                }));
                selectors.medCount.textContent = state.medications.all.length;
                populateFilters();
                updateDisplay();
            })
            .catch(error => {
                console.error('Error al cargar o procesar medicamentos.json:', error);
                selectors.loadingIndicator.innerHTML = '<p class="text-red-500">No se pudieron cargar los medicamentos. Revisa la consola para más detalles.</p>';
            });
    }

    // Iniciar la aplicación
    initializeApp();
});
