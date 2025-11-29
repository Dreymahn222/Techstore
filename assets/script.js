// Minimal JS for mobile nav toggle, simple search handling, and filter demo.

document.addEventListener('DOMContentLoaded',()=>{

  // Mobile nav toggle
  const ham = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');
  if(ham && nav){
    ham.addEventListener('click',()=>{ nav.classList.toggle('open'); nav.style.display = nav.classList.contains('open') ? 'flex' : '' })
  }

  // Simple search query redirect (search.html?q=...)
  const searchForms = document.querySelectorAll('form[data-search]');
  searchForms.forEach(f=>{
    f.addEventListener('submit', e=>{
      e.preventDefault();
      const q = (new FormData(f)).get('q') || '';
      location.href = `search.html?q=${encodeURIComponent(q)}`;
    })
  });

  // Read URL query to prefill search input on search page
  const urlParams = new URLSearchParams(location.search);
  const q = urlParams.get('q');
  const searchInput = document.querySelector('input[name="q"].prefill');
  if(q && searchInput){ searchInput.value = q; }

  // Simple filter demo: show/hide cards by data-filter attribute
  const filterContainer = document.querySelector('.filters');
  if(filterContainer){
    filterContainer.addEventListener('click', e=>{
      const btn = e.target.closest('[data-filter]');
      if(!btn) return;
      const value = btn.getAttribute('data-filter');
      document.querySelectorAll('[data-cat]').forEach(card=>{
        if(value === 'all' || card.getAttribute('data-cat') === value) card.style.display = '';
        else card.style.display = 'none';
      })
    })
  }

});