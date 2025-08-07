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
                <div class="md:col-span-2 p-3 mt-4 bg-blue-50 border-l-4 border-blue-400">
                    <h4 class="font-bold text-blue-800">Calculadora de Dosis Pediátrica</h4>
                    <div class="flex items-center gap-2 mt-2">
                        <input type="number" id="patientWeight" placeholder="Peso en kg" class="w-full p-2 border border-slate-300 rounded-md">
                        <button id="calculateDoseBtn" class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Calcular</button>
                    </div>
                    <div id="doseResult" class="mt-2 text-blue-900 font-semibold"></div>
                </div>
            `;
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
                    <div><strong>Familia:</strong><p>${med.family}</p></div>
                    <div><strong>Usos:</strong><p>${med.uses}</p></div>
                    <div class="md:col-span-2"><strong>Indicaciones:</strong><p>${med.indications}</p></div>
                    <div><strong>Dosis Adulto:</strong><p>${med.dose_adult}</p></div>
                    <div><strong>Dosis Pediátrica:</strong><p>${med.dose_pediatric || 'No especificada'}</p></div>
                    <div class="md:col-span-2"><strong>Contraindicaciones:</strong><p>${med.contraindications}</p></div>
                    
                    ${calculatorHtml}

                    ${med.renalDoseAdjust && med.renalDoseAdjust.enabled ? `
                        <div class="md:col-span-2 p-3 bg-yellow-50 border-l-4 border-yellow-400">
                            <h4 class="font-bold text-yellow-800">Ajuste en Insuficiencia Renal</h4>
                            <p class="text-sm text-yellow-700"><strong>Moderada (TFG 30-59):</strong> ${med.renalDoseAdjust.moderate}</p>
                            <p class="text-sm text-yellow-700"><strong>Severa (TFG < 15):</strong> ${med.renalDoseAdjust.severe}</p>
                        </div>
                    ` : ''}
                    ${med.interactions ? `
                        <div class="md:col-span-2 p-3 bg-red-50 border-l-4 border-red-400">
                            <h4 class="font-bold text-red-800">Interacciones Importantes</h4>
                            ${Object.entries(med.interactions).map(([level, descriptions]) => `
                                ${descriptions.map(desc => `<p class="text-sm text-red-700"><strong>${level.charAt(0).toUpperCase() + level.slice(1)}:</strong> ${desc}</p>`).join('')}
                            `).join('')}
                        </div>
                    ` : ''}
                </div>
            </div>
    
            <div class="p-4 bg-slate-50 border-t flex justify-end">
                <button id="closeModalBtn" class="px-4 py-2 bg-slate-200 rounded-md hover:bg-slate-300 transition-colors">Cerrar</button>
            </div>
        `;
        
        selectors.modal.classList.remove('hidden');
        selectors.modal.scrollTop = 0;
        
        // Add focus to the modal and set up listeners
        selectors.modalContent.focus();
        document.getElementById('closeModalBtn').addEventListener('click', closeModal);
        const modalFavButton = document.getElementById('modalFavButton');
        modalFavButton.addEventListener('click', () => {
            toggleFavorite(med.originalIndex, modalFavButton);
        });

        if (med.isCalculable) {
            document.getElementById('calculateDoseBtn').addEventListener('click', () => {
                const weight = parseFloat(document.getElementById('patientWeight').value);
                const resultDiv = document.getElementById('doseResult');
                if (isNaN(weight) || weight <= 0) {
                    resultDiv.textContent = 'Por favor, ingrese un peso válido.';
                    return;
                }
                
                let doseText = '';
                const unit = med.isDrops ? 'gotas' : 'ml';
                const dropsPerMl = 20; // Standard assumption

                if (med.doseMin_mg_kg_dosis) { // Dosis por toma
                    const minDoseMg = weight * med.doseMin_mg_kg_dosis;
                    const maxDoseMg = weight * med.doseMax_mg_kg_dosis;
                    let minDoseUnit = minDoseMg / med.concentration;
                    let maxDoseUnit = maxDoseMg / med.concentration;
                    
                    if (med.isDrops) {
                        minDoseUnit *= dropsPerMl;
                        maxDoseUnit *= dropsPerMl;
                    }
                    
                    const frequency = med.doseFreq ? `cada ${Math.round(24 / med.doseFreq)} horas` : '';
                    doseText = `Dosis: ${minDoseUnit.toFixed(1)} a ${maxDoseUnit.toFixed(1)} ${unit} ${frequency}`;

                } else { // Dosis por día
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
                    
                    const frequency = `cada ${Math.round(24 / avgIntervals)} horas`;
                    doseText = `Dosis: ${minDoseUnitPerTime.toFixed(1)} a ${maxDoseUnitPerTime.toFixed(1)} ${unit} ${frequency}`;
                }

                if(med.duration){
                    doseText += ` ${med.duration}.`;
                }

                resultDiv.textContent = doseText;
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
                const uniqueMeds = Array.from(new Map(data.map(med => [med.name + med.presentation, med])).values());
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
