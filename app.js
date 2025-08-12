document.addEventListener('DOMContentLoaded', () => {

    // --- ESTADO GLOBAL Y SELECTORES DEL DOM ---
    const state = {
        medications: { all: [] },
        favorites: new Set(),
        searchTerm: '',
    };

    const selectors = {
        medicationList: document.getElementById('medication-list'),
        searchBar: document.getElementById('searchBar'),
        noResults: document.getElementById('no-results'),
        modal: document.getElementById('medicationModal'),
        modalContent: document.getElementById('modal-content-wrapper'),
        cardTemplate: document.getElementById('medication-card-template'),
        medCount: document.getElementById('med-count'),
    };

    // --- MAPAS DE ESTILO PARA LAS TARJETAS ---
    const familyColorMap = {
        'Antihipertensivos': 'antihipertensivos',
        'Antibióticos': 'antibioticos',
        'Gastrointestinales': 'gastrointestinales',
        'Respiratorios': 'respiratorios',
        'Antidiabéticos': 'antidiabeticos',
        'Analgésicos': 'analgesicos',
        'default': 'default'
    };

    const familyIconMap = {
        'Antihipertensivos': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>',
        'Antibióticos': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 20.93c-3.14-.5-5.63-2.98-6.13-6.12C4.32 12.44 5.86 11 7.6 11h8.8c1.74 0 3.28 1.44 2.73 3.81-.5 3.14-2.99 5.62-6.13 6.12-.5.08-1.01.08-1.5 0zM12 2a1 1 0 00-1 1v5.38c0 .39.21.74.55.91L15 11H9l3.45-1.72c.34-.17.55-.52.55-.91V3a1 1 0 00-1-1z"/></svg>',
        'Gastrointestinales': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M12.96 3.2a1 1 0 00-1.92 0C9.643 5.026 8 8.08 8 10c0 1.93 1.643 4.974 3.04 6.8 1.4-1.826 3.04-4.87 3.04-6.8 0-1.92-1.643-4.974-3.04-6.8zM12 18c-3.1 0-7-4.03-7-8s3.9-8 7-8 7 4.03 7 8-3.9 8-7 8z" clip-rule="evenodd" /></svg>',
        'Respiratorios': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm3.5 12.07c.41.41.41 1.07 0 1.48-.41.41-1.07.41-1.48 0L12 13.41l-2.02 2.14c-.41.41-1.07.41-1.48 0-.41-.41-.41-1.07 0-1.48L10.59 12 8.52 9.93c-.41-.41-.41-1.07 0-1.48.41-.41 1.07-.41 1.48 0L12 10.59l2.02-2.14c.41-.41 1.07-.41 1.48 0 .41.41.41 1.07 0 1.48L13.41 12l2.09 2.07z"/></svg>',
        'Antidiabéticos': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"/><path d="M12.5 11.5h-1V7h1v4.5zm0 4h-1v-2h1v2z"/></svg>',
        'Analgésicos': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M12 2.25c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5S10.5 4.58 10.5 3.75s.67-1.5 1.5-1.5zM12 8.25c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5S10.5 10.58 10.5 9.75s.67-1.5 1.5-1.5zM12 14.25c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM12 20.25c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5z" clip-rule="evenodd" /></svg>',
        'default': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z" /></svg>'
    };

    // --- FUNCIONES PRINCIPALES ---

    const normalizeText = (str = '') => str ? str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") : "";

    const debounce = (func, delay = 250) => {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => { func.apply(this, args); }, delay);
        };
    };

    function loadFavorites() {
        try {
            const favs = localStorage.getItem('medFavorites');
            if (favs) state.favorites = new Set(JSON.parse(favs));
        } catch (error) {
            console.error("Error al cargar favoritos, se reiniciará.", error);
            localStorage.removeItem('medFavorites');
        }
    }

    function saveFavorites() {
        localStorage.setItem('medFavorites', JSON.stringify(Array.from(state.favorites)));
    }

    function toggleFavoriteInModal(medId, button) {
        if (state.favorites.has(medId)) {
            state.favorites.delete(medId);
            button.classList.remove('is-favorite');
        } else {
            state.favorites.add(medId);
            button.classList.add('is-favorite');
        }
        saveFavorites();
        renderMedications(); // Re-render para actualizar el estado visual de la tarjeta en la cuadrícula
    }
    
    function applyFilterAndSearch() {
        const searchTerm = normalizeText(state.searchTerm);
        return state.medications.all.filter(med =>
            normalizeText(med.name).includes(searchTerm) ||
            normalizeText(med.family).includes(searchTerm) ||
            normalizeText(med.uses).includes(searchTerm) ||
            normalizeText(med.simpleFamily).includes(searchTerm)
        );
    }
    
    const renderMedications = () => {
        const filteredMeds = applyFilterAndSearch();
        selectors.medicationList.innerHTML = '';
        selectors.noResults.style.display = filteredMeds.length === 0 ? 'block' : 'none';

        const fragment = document.createDocumentFragment();
        filteredMeds.forEach(med => {
            fragment.appendChild(createMedicationCard(med));
        });
        selectors.medicationList.appendChild(fragment);
    };

    const debouncedRender = debounce(renderMedications, 250);

    function createMedicationCard(med) {
        const cardClone = selectors.cardTemplate.content.cloneNode(true);
        const cardElement = cardClone.querySelector('.med-card');
        const header = cardClone.querySelector('.card-header');
        
        const familyKey = med.simpleFamily || 'default';
        const colorClass = familyColorMap[familyKey] || familyColorMap['default'];
        header.classList.add(`family-color-${colorClass}`);

        cardClone.querySelector('.card-icon').innerHTML = familyIconMap[familyKey] || familyIconMap['default'];
        cardClone.querySelector('.card-family-name').textContent = med.simpleFamily;
        cardClone.querySelector('.card-med-name').textContent = med.name;
        cardClone.querySelector('.card-med-presentation').textContent = med.presentation;
        cardClone.querySelector('.card-link-family').textContent = med.family.split('(')[0].trim();
        cardClone.querySelector('.card-link-subfamily').textContent = (med.family.split('(')[1] || '').replace(')','');
        cardClone.querySelector('.card-use-text').textContent = med.indications || med.uses;

        cardElement.addEventListener('click', () => openModal(med));
        return cardClone;
    }
    
    function openModal(med) {
        const isFavorite = state.favorites.has(med.originalIndex);

        selectors.modalContent.innerHTML = `
            <div class="modal-header">
                <div>
                    <h2 id="modalTitle">${med.name}</h2>
                    <p>${med.presentation}</p>
                </div>
                <button class="fav-btn ${isFavorite ? 'is-favorite' : ''}" aria-label="Añadir a favoritos">★</button>
            </div>
            <div class="modal-body">
                <div class="info-box indications">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" /></svg>
                    <p><strong>Indicaciones:</strong> ${med.indications || 'No especificadas'}</p>
                </div>
                <div class="info-box contraindications">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clip-rule="evenodd" /></svg>
                    <p><strong>Contraindicaciones:</strong> ${med.contraindications || 'No especificadas'}</p>
                </div>
                <div class="patient-info-grid">
                    <div class="patient-info-item">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clip-rule="evenodd" /></svg>
                        <span class="label">Edad Mínima</span>
                        <span class="value">${med.minimumAge || 'N/A'}</span>
                    </div>
                    <div class="patient-info-item">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-1-5h2v2h-2zm0-8h2v6h-2z"/></svg>
                        <span class="label">Embarazo</span>
                        <span class="value">${med.pregnancy || 'No especificado'}</span>
                    </div>
                    <div class="patient-info-item">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                        <span class="label">Lactancia</span>
                        <span class="value">${med.lactation || 'No especificado'}</span>
                    </div>
                </div>
                <div class="info-section">
                    <div class="info-item">
                        <div class="label">Familia:</div>
                        <p>${med.family || 'N/A'}</p>
                    </div>
                    <div class="info-item">
                        <div class="label">Usos:</div>
                        <p>${med.uses || 'N/A'}</p>
                    </div>
                    <div class="info-item">
                        <div class="label">Dosis Adulto:</div>
                        <p>${med.dose_adult || 'No especificada'}</p>
                    </div>
                    <div class="info-item">
                        <div class="label">Dosis Pediátrica:</div>
                        <p>${med.dose_pediatric || 'No recomendada'}</p>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button id="closeModalBtn">Cerrar</button>
            </div>
        `;
        
        selectors.modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';

        document.getElementById('closeModalBtn').addEventListener('click', closeModal);
        selectors.modal.querySelector('.fav-btn').addEventListener('click', (e) => toggleFavoriteInModal(med.originalIndex, e.currentTarget));
    }

    function closeModal() {
        selectors.modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // --- INICIALIZACIÓN DE LA APLICACIÓN ---
    async function initializeApp() {
        loadFavorites();
        
        selectors.searchBar.addEventListener('input', (e) => {
            state.searchTerm = e.target.value;
            debouncedRender();
        });

        selectors.modal.addEventListener('click', (e) => {
            if (e.target.id === 'medicationModal') closeModal();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === "Escape" && selectors.modal.style.display === 'flex') closeModal();
        });
        
        try {
            const response = await fetch('./medicamentos.json');
            if (!response.ok) throw new Error(`Error en la red: ${response.status}`);
            const data = await response.json();
            
            // Asignar índice original para mantener la referencia de los favoritos
            state.medications.all = data
                .map((med, index) => ({ ...med, originalIndex: index }))
                .sort((a, b) => a.name.localeCompare(b.name));
            
            selectors.medCount.textContent = state.medications.all.length;
            renderMedications();

        } catch (error) {
            console.error('Error al inicializar la aplicación:', error);
            selectors.medicationList.innerHTML = `<p class="error-message">Error al cargar la base de datos de medicamentos.</p>`;
        }
    }

    initializeApp();
});
