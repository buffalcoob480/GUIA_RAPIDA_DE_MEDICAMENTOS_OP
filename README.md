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
```

---

## 🚀 Uso

### 1. Clonar el repositorio
```bash
git clone https://github.com/tusitio/GUIA_RAPIDA_DE_MEDICAMENTOS_OP.git
cd GUIA_RAPIDA_DE_MEDICAMENTOS_OP
```

### 2. Abrir en navegador
Solo abre el archivo `index.html` en tu navegador favorito.

---

## 🧮 Cálculo de dosis pediátrica

Cuando un medicamento lo permite (`isCalculable: true`), puedes ingresar el peso del paciente y la app te dará la dosis mínima y máxima recomendada según el rango mg/kg.

---

## 🌗 Modo Oscuro

La interfaz se adapta automáticamente si tu sistema operativo o navegador tiene activado el modo oscuro. Puedes personalizar aún más los estilos en `styles.css`.

---

## 👨‍⚕️ Destinatarios

- Profesionales de salud
- Centros de atención primaria
- Estudiantes de medicina y enfermería
- Proyectos institucionales y comunitarios

---

## 🛠️ Tecnologías Utilizadas

- [TailwindCSS](https://tailwindcss.com)
- HTML5 + Vanilla JS
- Diseño responsive con flexbox y grid

---

## ✅ Licencia

MIT - Puedes modificar, reutilizar y redistribuir libremente con atribución adecuada.

---

## 🧠 Créditos

Proyecto desarrollado por [Tu Nombre o Institución].

Si deseas contribuir, sugerir mejoras o reportar errores, no dudes en abrir un issue o pull request.
