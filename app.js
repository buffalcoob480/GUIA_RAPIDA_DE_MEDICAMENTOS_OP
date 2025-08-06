document.addEventListener('DOMContentLoaded', () => {
    // --- ESTADO DE LA APLICACIÓN ---
    const state = {
        medications: {
            all: [],
            favorites: new Set(),
        },
        ui: {
            view: 'medications',
            activeFamily: 'Todos',
            activeTheme: null,
            searchTerm: '',
        },
        searchHistory: [],
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

    function saveFavorites() {
        localStorage.setItem('medFavorites', JSON.stringify(Array.from(state.medications.favorites)));
    }

    function saveSearchHistory() {
        if (state.searchHistory.length > 10) {
            state.searchHistory.shift();
        }
        localStorage.setItem('medSearchHistory', JSON.stringify(state.searchHistory));
    }

    function addToSearchHistory(term) {
        if (!term || state.searchHistory.includes(term)) return;
        state.searchHistory.unshift(term);
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

    // --- LÓGICA DE RENDERIZADO Y UI ---

    function updateDisplay() {
        let results = [];
        const searchTerm = normalizeText(state.ui.searchTerm);

        if (state.ui.view === 'favorites') {
            results = state.medications.all.filter(med => state.medications.favorites.has(med.originalIndex));
        } else if (searchTerm) {
            results = state.medications.all.map(med => ({
                ...med,
                score: calculateRelevance(med, searchTerm)
            })).filter(med => med.score > 0).sort((a, b) => b.score - a.score);
        } else if (state.ui.view === 'medications') {
            results = state.ui.activeFamily === 'Todos' ?
                state.medications.all :
                state.medications.all.filter(med => med.simpleFamily === state.ui.activeFamily);
        }

        if (state.ui.view === 'medications' || state.ui.view === 'favorites') {
            renderMedications(results);
        }

        selectors.medicationSection.classList.toggle('hidden', state.ui.view === 'themes');
        selectors.themesSection.classList.toggle('hidden', state.ui.view !== 'themes');

        if (state.ui.view === 'themes' && state.ui.activeTheme) {
            selectors.themesSection.innerHTML = `<div class="prose max-w-none"><h2>${state.ui.activeTheme.name}</h2><p>El contenido para este tema clínico estará disponible próximamente.</p></div>`;
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

        if (state.medications.favorites.has(med.originalIndex)) {
            favoriteBtn.classList.add('is-favorite');
        }

        favoriteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleFavorite(med.originalIndex);
        });

        contentWrapper.addEventListener('click', () => {
            const medication = state.medications.all.find(m => m.originalIndex === med.originalIndex);
            if (medication) openModal(medication);
        });
        return cardElement;
    }

    function renderSearchHistory() {
        selectors.searchHistory.innerHTML = state.searchHistory.map(term => `<option value="${term}"></option>`).join('');
    }

    function updateActiveButtons() {
        document.querySelectorAll('.filter-controls .active, .dropdown-panel .active').forEach(btn => btn.classList.remove('active'));

        if (state.ui.view === 'favorites') {
            selectors.favoritesBtn.classList.add('active');
            selectors.familiesBtnText.textContent = 'Familias';
        } else if (state.ui.view === 'medications') {
            selectors.familiesDropdownBtn.classList.add('active');
            selectors.familiesBtnText.textContent = state.ui.activeFamily === 'Todos' ? 'Familias' : `Familia: ${state.ui.activeFamily}`;
            document.querySelector(`.filter-btn[data-family="${state.ui.activeFamily}"]`)?.classList.add('active');
        } else if (state.ui.view === 'themes') {
            selectors.themesDropdownBtn.classList.add('active');
            document.querySelector(`.theme-btn[data-theme="${state.ui.activeTheme.id}"]`)?.classList.add('active');
        }
    }

    function openModal(med) {
        selectors.modalContent.innerHTML = createModalHtml(med);
        selectors.modal.classList.remove('hidden');
        setTimeout(() => selectors.modalContent.classList.remove('scale-95', 'opacity-0'), 10);

        document.getElementById('closeModalBtn').addEventListener('click', closeModal);
        document.querySelector('.favorite-btn-modal').addEventListener('click', () => {
            toggleFavorite(med.originalIndex);
            document.querySelector('.favorite-btn-modal').classList.toggle('is-favorite');
        });

        if (med.isCalculable) {
            const calculateBtn = document.querySelector('.calculate-btn-modal');
            calculateBtn.addEventListener('click', () => {
                calculateBtn.textContent = 'Calculando...';
                calculateBtn.disabled = true;
                setTimeout(() => {
                    calculateDose(med);
                    calculateBtn.textContent = 'Calcular Dosis';
                    calculateBtn.disabled = false;
                }, 250);
            });
        }
    }

    function createModalHtml(med) {
        const isFav = state.medications.favorites.has(med.originalIndex);
        let calculatorHtml = '';
        if (med.isCalculable) {
            calculatorHtml = `
                <div class="mt-6 pt-6 border-t border-slate-200">
                    <h4 class="text-base font-semibold text-slate-800 mb-2">Calculadora de Dosis Pediátrica</h4>
                    <div class="flex items-center space-x-3">
                        <input type="number" placeholder="Peso en kg" class="weight-input-modal border border-slate-300 rounded-md p-2 w-28 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        <button class="calculate-btn-modal bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">Calcular Dosis</button>
                    </div>
                    <div class="result-div-modal mt-3 text-blue-800 font-semibold text-sm p-3 bg-blue-50 rounded-md min-h-[44px]"></div>
                    <div class="dose-warning-modal text-xs text-amber-600 mt-2"></div>
                </div>`;
        }
        let notesHtml = '';
        if (med.notes) {
            notesHtml = `<p class="mt-2 text-sm text-slate-500 bg-gray-100 p-2 rounded-md"><strong class="font-semibold text-slate-600">Nota:</strong> ${med.notes}</p>`;
        }
        let warningsHtml = '';
        if (med.warnings) {
            warningsHtml = `<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800">
                <strong class="font-bold">Advertencia:</strong>
                <p>${med.warnings}</p>
            </div>`;
        }

        return `
            <div class="flex justify-between items-start p-5 border-b border-slate-200 sticky top-0 bg-white z-10">
                <div>
                    <h3 id="modalTitle" class="text-xl font-bold text-slate-900">${med.name} - ${med.presentation}</h3>
                    <p class="text-lg font-semibold text-blue-600">${med.family}</p>
                </div>
                <div class="flex items-center gap-4">
                    <button class="favorite-btn-modal text-3xl ${isFav ? 'is-favorite' : 'text-slate-300'} hover:text-yellow-400 transition-colors" aria-label="Añadir a favoritos">★</button>
                    <button id="closeModalBtn" aria-label="Cerrar modal" class="text-slate-400 hover:text-slate-800 text-3xl">&times;</button>
                </div>
            </div>
            <div class="overflow-y-auto p-6">
                <div class="space-y-3 text-sm text-slate-700">
                    <p><strong class="font-semibold text-slate-900">Usos:</strong> ${med.uses}</p>
                    <p><strong class="font-semibold text-slate-900">Indicaciones:</strong> ${med.indications}</p>
                    <p><strong class="font-semibold text-slate-900">Dosis Adulto:</strong> ${med.dose_adult}</p>
                    <p><strong class="font-semibold text-slate-900">Dosis Pediátrica:</strong> ${med.dose_pediatric}</p>
                    <div class="mt-4 p-3 bg-red-50 border-l-4 border-red-400 text-red-800">
                        <strong class="font-bold">Contraindicaciones:</strong>
                        <p>${med.contraindications}</p>
                    </div>
                    ${warningsHtml}
                    ${notesHtml}
                </div>
                ${calculatorHtml}
            </div>`;
    }

    function closeModal() {
        selectors.modalContent.classList.add('scale-95', 'opacity-0');
        setTimeout(() => selectors.modal.classList.add('hidden'), 300);
    }

    function calculateDose(med) {
        const weightInput = selectors.modalContent.querySelector('.weight-input-modal');
        const resultDiv = selectors.modalContent.querySelector('.result-div-modal');
        const warningDiv = selectors.modalContent.querySelector('.dose-warning-modal');
        const weight = parseFloat(weightInput.value);
        const DROPS_PER_ML = 20;

        resultDiv.innerHTML = '';
        warningDiv.innerHTML = '';

        if (!weight || weight <= 0) {
            resultDiv.innerHTML = '<span class="text-red-500">Ingrese un peso válido en kg.</span>';
            return;
        }

        let resultText = '';
        let totalDoseMgDia = 0;
        const durationText = med.duration ? `, ${med.duration}` : '';

        const calculateRange = (minMg, maxMg, concentration) => {
            const minMl = (weight * minMg) / concentration;
            const maxMl = (weight * maxMg) / concentration;

            if (med.isDrops) {
                const minDrops = Math.round(minMl * DROPS_PER_ML);
                const maxDrops = Math.round(maxMl * DROPS_PER_ML);
                if (minDrops === maxDrops) {
                    return `<strong>${maxDrops} gotas (${maxMl.toFixed(1)} ml)</strong>`;
                }
                return `<strong>${minDrops} a ${maxDrops} gotas (${minMl.toFixed(1)} a ${maxMl.toFixed(1)} ml)</strong>`;
            } else {
                if (minMl.toFixed(1) === maxMl.toFixed(1)) {
                    return `<strong>${maxMl.toFixed(1)} ml</strong>`;
                }
                return `<strong>${minMl.toFixed(1)} a ${maxMl.toFixed(1)} ml</strong>`;
            }
        };

        if (med.doseMin_mg_kg_dia) {
            const intervals = String(med.doseIntervals).split('-').map(Number);
            const minTakes = intervals[intervals.length - 1]; 
            const maxTakes = intervals[0];
            
            const doseMinPerTake = med.doseMin_mg_kg_dia / maxTakes;
            const doseMaxPerTake = med.doseMax_mg_kg_dia / minTakes;

            const hoursMin = Math.round(24 / maxTakes);
            const hoursMax = Math.round(24 / minTakes);

            const doseRangeText = calculateRange(doseMinPerTake, doseMaxPerTake, med.concentration);
            const frequencyText = (hoursMin === hoursMax) ? `cada ${hoursMax} horas` : `cada ${hoursMin} a ${hoursMax} horas`;
            resultText = `Dosis: ${doseRangeText}, ${frequencyText}${durationText}.`;
            totalDoseMgDia = weight * med.doseMax_mg_kg_dia;

        } else if (med.doseMin_mg_kg_dosis) {
            const frequency = med.doseFreq || 1;
            const hours = Math.round(24 / frequency);
            const doseRangeText = calculateRange(med.doseMin_mg_kg_dosis, med.doseMax_mg_kg_dosis, med.concentration);
            resultText = `Dosis: ${doseRangeText} cada ${hours} horas${durationText}.`;
            totalDoseMgDia = weight * med.doseMax_mg_kg_dosis * frequency;
        }

        resultDiv.innerHTML = resultText;
        if (med.name.toLowerCase().includes("paracetamol") && totalDoseMgDia > (weight * 90)) {
             warningDiv.innerHTML = '<div class="mt-2 p-2 bg-amber-100 border border-amber-300 rounded-md">⚠️ <strong>¡Atención!</strong> La dosis diaria total podría exceder el máximo recomendado. Verifique la dosis.</div>';
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

    async function initializeApp() {
        try {
            loadStateFromStorage();
            const response = await fetch('medicamentos.json');
            if (!response.ok) throw new Error(`Error de red: ${response.statusText}`);
            const rawMedications = await response.json();

            state.medications.all = rawMedications.map((med, index) => ({
                ...med,
                originalIndex: index,
                image: `https://placehold.co/400x200/e0f2fe/083344?text=${encodeURIComponent(`${med.name}\\n${med.presentation}`)}&font=inter`
            }));

            selectors.medCount.textContent = state.medications.all.length;
            initFilters();
            initEventListeners();
            renderSearchHistory();
            updateDisplay();
        } catch (error) {
            console.error("Falló la inicialización:", error);
            selectors.loadingIndicator.innerHTML = `<p class="text-red-600">Error: No se pudo cargar la información.<br>Por favor, revisa tu conexión o intenta más tarde.</p>`;
        }
    }

    function initFilters() {
        const families = ['Todos', ...new Set(state.medications.all.map(med => med.simpleFamily).filter(f => f).sort())];
        selectors.familyFilterContainer.innerHTML = families.map(f => `<button class="filter-btn" data-family="${f}">${f}</button>`).join('');

        const themes = [{
            id: 'gpc-insulina',
            name: 'Guía Clínica de Insulinoterapia'
        }, {
            id: 'dm2-inicio',
            name: 'Manejo Inicial DM2'
        }, {
            id: 'crisis-hipertensivas',
            name: 'Crisis Hipertensivas'
        }];
        selectors.themesFilterContainer.innerHTML = themes.map(t => `<button class="theme-btn" data-theme="${t.id}" data-name="${t.name}">${t.name}</button>`).join('');
    }

    function initEventListeners() {
        selectors.searchBar.addEventListener('input', debounce((e) => {
            state.ui.searchTerm = e.target.value;
            if (state.ui.searchTerm) {
                state.ui.view = 'medications';
                state.ui.activeFamily = 'Todos';
            }
            updateDisplay();
        }));
        selectors.searchBar.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') addToSearchHistory(e.target.value.trim());
        });

        selectors.familiesDropdownBtn.addEventListener('click', e => {
            e.stopPropagation();
            toggleDropdown('families');
        });
        selectors.themesDropdownBtn.addEventListener('click', e => {
            e.stopPropagation();
            toggleDropdown('themes');
        });
        selectors.favoritesBtn.addEventListener('click', () => {
            state.ui.view = 'favorites';
            state.ui.searchTerm = '';
            selectors.searchBar.value = '';
            updateDisplay();
            closeDropdowns();
        });

        selectors.familyFilterContainer.addEventListener('click', e => {
            const btn = e.target.closest('.filter-btn');
            if (btn) {
                state.ui.view = 'medications';
                state.ui.activeFamily = btn.dataset.family;
                state.ui.searchTerm = '';
                selectors.searchBar.value = '';
                updateDisplay();
                closeDropdowns();
            }
        });
        selectors.themesFilterContainer.addEventListener('click', e => {
            const btn = e.target.closest('.theme-btn');
            if (btn) {
                state.ui.view = 'themes';
                state.ui.activeTheme = {
                    id: btn.dataset.theme,
                    name: btn.dataset.name
                };
                updateDisplay();
                closeDropdowns();
            }
        });

        document.addEventListener('click', () => closeDropdowns());
        selectors.modal.addEventListener('click', e => {
            if (e.target.id === 'medicationModal') closeModal();
        });
        window.addEventListener('keydown', e => {
            if (e.key === 'Escape') closeModal();
        });
    }

    function toggleDropdown(type) {
        const panel = type === 'families' ? selectors.familiesDropdownPanel : selectors.themesDropdownPanel;
        const isOpen = panel.classList.contains('is-open');
        closeDropdowns();
        if (!isOpen) panel.classList.add('is-open');
    }

    function closeDropdowns() {
        selectors.familiesDropdownPanel.classList.remove('is-open');
        selectors.themesDropdownPanel.classList.remove('is-open');
    }

    function normalizeText(str) {
        if (!str) return '';
        return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    function calculateRelevance(med, term) {
        let score = 0;
        if (!term) return 0;
        
        const normName = normalizeText(med.name);
        const normFamily = normalizeText(med.family);
        const normUses = normalizeText(med.uses);
        const normIndications = normalizeText(med.indications);

        if (normName.startsWith(term)) {
            score += 50;
        } else if (normName.includes(term)) {
            score += 20;
        }

        if (normFamily.includes(term)) score += 5;
        if (normUses.includes(term)) score += 3;
        if (normIndications.includes(term)) score += 1;
        
        return score;
    }

    initializeApp();
});
