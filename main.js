document.addEventListener('DOMContentLoaded', async () => {
  const listEl = document.getElementById('medication-list');
  const searchBar = document.getElementById('searchBar');
  const familyFilterEl = document.getElementById('familyFilter');
  const noResultsEl = document.getElementById('no-results');
  const template = document.getElementById('medication-card-template');
  const openSidebarBtn = document.getElementById('openSidebarBtn');
  const sidebar = document.getElementById('sidebar');

  let medications = [];

  try {
    const res = await fetch('data/medications.json');
    medications = await res.json();
  } catch (e) {
    console.error('Error al cargar medicamentos:', e);
  }

  const uniqueFamilies = [...new Set(medications.map(m => m.simpleFamily))];
  let activeFamily = null;

  function renderFamilyButtons() {
    uniqueFamilies.forEach(family => {
      const btn = document.createElement('button');
      btn.className = 'filter-btn block w-full text-left px-4 py-2 rounded hover:bg-blue-100 transition';
      btn.textContent = family;
      btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        if (activeFamily === family) {
          activeFamily = null;
          btn.classList.remove('active');
        } else {
          activeFamily = family;
          btn.classList.add('active');
        }
        renderList();
      });
      familyFilterEl.appendChild(btn);
    });
  }

  function renderList() {
    listEl.innerHTML = '';
    let query = searchBar.value.toLowerCase();

    const filtered = medications.filter(m => {
      const matchesText =
        m.name.toLowerCase().includes(query) ||
        m.uses.toLowerCase().includes(query) ||
        m.simpleFamily.toLowerCase().includes(query);

      const matchesFamily = !activeFamily || m.simpleFamily === activeFamily;
      return matchesText && matchesFamily;
    });

    if (filtered.length === 0) {
      noResultsEl.classList.remove('hidden');
    } else {
      noResultsEl.classList.add('hidden');
      filtered.forEach(med => {
        const card = template.content.cloneNode(true);
        card.querySelector('.card-img').src = `img/${med.name}.jpg`;
        card.querySelector('.card-name').textContent = med.name;
        card.querySelector('.card-presentation').textContent = med.presentation;
        card.querySelector('.card-family').textContent = med.simpleFamily;
        card.querySelector('.card-uses').textContent = med.uses;
        listEl.appendChild(card);
      });
    }
  }

  renderFamilyButtons();
  renderList();

  searchBar.addEventListener('input', () => {
    renderList();
  });

  openSidebarBtn.addEventListener('click', () => {
    sidebar.classList.toggle('-translate-x-full');
  });
});
