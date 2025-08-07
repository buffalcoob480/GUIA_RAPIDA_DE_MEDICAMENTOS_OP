document.addEventListener('DOMContentLoaded', () => {
    // --- CONTENIDO DE TEMAS CLÍNICOS ---
    const clinicalThemes = {
        'dm2-inicio': { name: 'Manejo Inicial de Diabetes Mellitus Tipo 2', content: `...` }, // Contenido del tema DM2 (muy largo para incluir aquí, pero el código lo asume)
        'crisis-hipertensivas': {
            name: 'Manejo de Crisis Hipertensivas',
            content: `
                <h2>Manejo de Crisis Hipertensivas</h2>
                <p>Una crisis hipertensiva se define como una elevación severa de la presión arterial (PA), generalmente >180/120 mmHg. Se clasifica en urgencia o emergencia según la presencia de daño a órgano blanco.</p>
                
                <h3>1. Urgencia Hipertensiva</h3>
                <p><strong>Definición:</strong> Elevación severa de la PA <strong>sin</strong> evidencia de daño agudo a órgano blanco (cerebro, corazón, riñón, retina).</p>
                <p><strong>Manejo:</strong> El objetivo es reducir la PA gradualmente en 24-48 horas utilizando medicamentos orales. Una reducción demasiado rápida puede causar isquemia.</p>
                <ul>
                    <li><strong>Tratamiento de elección:</strong> Reiniciar o ajustar el tratamiento antihipertensivo del paciente.</li>
                    <li><strong>Fármacos orales comúnmente usados:</strong>
                        <ul>
                            <li><strong><a href="#" class="med-link" data-med-name="Captopril">Captopril</a>:</strong> 25 mg vía oral. Es un IECA de acción rápida.</li>
                            <li><strong><a href="#" class="med-link" data-med-name="Nifedipino">Nifedipino</a> de liberación prolongada:</strong> 30-60 mg. <strong>NUNCA usar nifedipino sublingual de acción corta</strong> por el riesgo de caídas bruscas de la PA.</li>
                        </ul>
                    </li>
                </ul>

                <h3>2. Emergencia Hipertensiva</h3>
                <p><strong>Definición:</strong> Elevación severa de la PA <strong>con</strong> evidencia de daño agudo y progresivo a órgano blanco. Requiere hospitalización y tratamiento intravenoso inmediato.</p>
                <p><strong>Manejo:</strong> El objetivo es reducir la Presión Arterial Media (PAM) en un 10-20% en la primera hora, y otro 5-15% en las siguientes 23 horas. Se usan fármacos IV titulables.</p>
                <ul>
                    <li><strong>Encefalopatía Hipertensiva:</strong> Reducción inmediata de la PAM en 20-25%. Fármaco de elección: <strong><a href="#" class="med-link" data-med-name="Labetalol">Labetalol</a></strong> o <strong><a href="#" class="med-link" data-med-name="Nitroprusiato de Sodio">Nitroprusiato</a></strong>.</li>
                    <li><strong>Accidente Cerebrovascular (EVC) Isquémico:</strong> No se recomienda bajar la PA a menos que sea >220/120 mmHg (o >185/110 si es candidato a trombólisis).</li>
                    <li><strong>Disección Aórtica:</strong> Reducción rápida de la PA sistólica a <120 mmHg. Fármaco de elección: Betabloqueadores como <strong><a href="#" class="med-link" data-med-name="Labetalol">Labetalol</a></strong>.</li>
                    <li><strong>Edema Agudo de Pulmón Cardiogénico:</strong> Vasodilatadores como <strong>Nitroglicerina</strong> (no en base de datos) y diuréticos de asa como <strong><a href="#" class="med-link" data-med-name="Furosemida">Furosemida</a></strong>.</li>
                </ul>
                 <div class="bibliografia"><h4>Referencias</h4><p>Adaptado de: Whelton PK, et al. 2017 ACC/AHA/AAPA/ABC/ACPM/AGS/APhA/ASH/ASPC/NMA/PCNA Guideline for the Prevention, Detection, Evaluation, and Management of High Blood Pressure in Adults.</p></div>
            `
        }
    };
    clinicalThemes['dm2-inicio'].content = `<h2>Manejo Inicial de Diabetes Mellitus Tipo 2</h2><p>Esta guía resume el enfoque inicial para un paciente recién diagnosticado con Diabetes Mellitus tipo 2 (DM2), basado en guías clínicas comunes.</p><h3>Paso 1: Diagnóstico y Metas Iniciales</h3><p>El diagnóstico se confirma con HbA1c ≥ 6.5%, Glucosa en ayuno ≥ 126 mg/dL, o Glucosa a las 2h post-carga ≥ 200 mg/dL. La meta inicial de <strong>HbA1c</strong> es generalmente <strong>< 7%</strong>.</p><h3>Paso 2: Tratamiento No Farmacológico</h3><p>Es la piedra angular del manejo e incluye:</p><ul><li><strong>Educación sobre la enfermedad:</strong> Automonitoreo, reconocimiento de hipo/hiperglucemia.</li><li><strong>Plan de alimentación:</strong> Reducción de carbohidratos simples y grasas saturadas.</li><li><strong>Actividad física:</strong> Mínimo 150 minutos de ejercicio aeróbico moderado a la semana.</li><li><strong>Pérdida de peso:</strong> Objetivo inicial del 5-10% del peso corporal.</li></ul><h3>Paso 3: Tratamiento Farmacológico de Primera Línea</h3><p>A menos que existan contraindicaciones, el tratamiento de elección para iniciar es:</p><ul><li><strong><a href="#" class="med-link" data-med-name="Metformina">Metformina</a>:</strong> Iniciar con 500-850 mg una o dos veces al día con los alimentos para minimizar efectos gastrointestinales. Incrementar gradualmente cada 1-2 semanas hasta una dosis objetivo de 2000 mg/día.</li></ul><h3>Paso 4: Terapia Dual (Si no se alcanzan metas en 3 meses)</h3><p>Si la HbA1c sigue por encima de la meta después de 3 meses de monoterapia con Metformina, se debe añadir un segundo agente.</p><h4><strong>Si existe enfermedad cardiovascular (ASCVD), insuficiencia cardíaca (IC) o enfermedad renal (ERC):</strong></h4><ul><li>Añadir un <strong>agonista del receptor de GLP-1</strong> (ej. <a href="#" class="med-link" data-med-name="Liraglutida">Liraglutida</a>) o un <strong>inhibidor de SGLT2</strong> (ej. <a href="#" class="med-link" data-med-name="Dapagliflozina">Dapagliflozina</a>).</li></ul><h4><strong>Para minimizar hipoglucemia:</strong></h4><ul><li>Añadir un <strong>inhibidor de DPP-4</strong> (ej. <a href="#" class="med-link" data-med-name="Sitagliptina">Sitagliptina</a>), un agonista de GLP-1, un inhibidor de SGLT2, o una <strong>Tiazolidinediona (TZD)</strong> (ej. <a href="#" class="med-link" data-med-name="Pioglitazona">Pioglitazona</a>).</li></ul><h4><strong>Para promover pérdida de peso:</strong></h4><ul><li>Añadir un <strong>agonista de GLP-1</strong> o un <strong>inhibidor de SGLT2</strong>.</li></ul><h4><strong>Si el costo es una barrera:</strong></h4><ul><li>Añadir una <strong>sulfonilurea</strong> (ej. <a href="#" class="med-link" data-med-name="Glibenclamida">Glibenclamida</a>) o una TZD.</li></ul><div class="bibliografia"><h4>Referencias</h4><p>Adaptado de: ADA. Standards of Medical Care in Diabetes—2023. Diabetes Care 2023;46(Suppl. 1):S140–S157.</p></div>`;


    const state = { /* ... (igual que antes) ... */ };
    const selectors = { /* ... (igual que antes, más #interaction-section) ... */ };
    
    // El resto del código de app.js es muy largo para pegarlo aquí, pero puedes encontrarlo
    // en la respuesta anterior. La lógica clave a añadir es:
    // 1. Un nuevo estado para 'interaction-checker' en state.ui.view.
    // 2. Un event listener para el nuevo botón #interaction-checker-btn.
    // 3. Una función renderInteractionChecker() que construya el HTML de la herramienta.
    // 4. Lógica para manejar la selección de medicamentos y mostrar las interacciones.
    // 5. Una función para renderizar el nuevo tema clínico.
    // 6. La función para calcular la dosis renal y su HTML correspondiente en el modal.

    // A continuación, se muestra la implementación de las nuevas funciones clave.
    // Debes integrar esto en tu archivo app.js existente.

    function renderInteractionChecker() {
        const selectedMeds = state.interactionChecker.selected.map(id => state.medications.all.find(m => m.originalIndex === id));
        
        let medListHtml = state.medications.all.map(med => {
            const isSelected = state.interactionChecker.selected.includes(med.originalIndex);
            return `<button data-med-id="${med.originalIndex}" class="interaction-med-btn ${isSelected ? 'selected' : ''}">${med.name}</button>`;
        }).join('');

        let resultsHtml = 'Seleccione 2 o más medicamentos para ver las interacciones.';
        if (selectedMeds.length >= 2) {
            // Lógica para encontrar y mostrar interacciones
            resultsHtml = findAndRenderInteractions(selectedMeds);
        }

        selectors.interactionSection.innerHTML = `
            <div class="interaction-checker-container">
                <div class="interaction-header">
                    <h2>Verificador de Interacciones</h2>
                    <p>Seleccione los medicamentos de la lista para verificar posibles interacciones.</p>
                </div>
                <div class="interaction-body">
                    <div class="med-selection-list">${medListHtml}</div>
                    <div class="interaction-results">${resultsHtml}</div>
                </div>
            </div>
        `;
        
        document.querySelectorAll('.interaction-med-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const medId = parseInt(btn.dataset.medId, 10);
                toggleInteractionMed(medId);
            });
        });
    }

    function createRenalCalculatorHtml(med) {
        if (!med.renalDoseAdjust?.enabled) return '';
        // HTML para la calculadora de dosis renal
        return `
            <div class="mt-6 pt-6 border-t border-slate-200">
                <h4 class="text-base font-semibold text-slate-800 mb-3">Calculadora de Ajuste Renal (Cockcroft-Gault)</h4>
                <button class="calculate-renal-btn">Calcular Aclaramiento</button>
                <div class="renal-result-div"></div>
            </div>
        `;
    }
};
