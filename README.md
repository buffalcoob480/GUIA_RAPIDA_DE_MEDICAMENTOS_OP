# 🏥 Guía Rápida de Medicamentos - Centro de Salud Colonia Azteca

Una aplicación web interactiva para consultar medicamentos disponibles, con filtros por familia terapéutica, búsqueda inteligente, visualización detallada y cálculo de dosis pediátrica.

[🌐 Ver demo en línea](https://tusitio.github.io/GUIA_RAPIDA_DE_MEDICAMENTOS_OP/)

---

## 📦 Características Principales

- 🔍 **Búsqueda instantánea** por nombre, padecimiento o familia
- 🧬 **Filtros dinámicos** por familia terapéutica
- 💊 **Modal con información detallada** de cada medicamento
- ⚖️ **Calculadora de dosis pediátrica** (si aplica)
- 🌗 **Modo oscuro automático** según preferencias del navegador
- 💻 **Responsive** y optimizada para móviles

---

## 📁 Estructura del Proyecto

```plaintext
.
├── index.html              # Página principal
├── css/
│   └── styles.css          # Estilos personalizados + modo oscuro
├── js/
│   └── main.js             # Lógica principal (render, filtro, modal, dosis)
├── data/
│   └── medications.json    # Base de datos de medicamentos
└── img/
    └── *.jpg               # (opcional) Imágenes personalizadas de medicamentos
