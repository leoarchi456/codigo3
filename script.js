const bar = document.getElementById('bar');
const lista = document.getElementById('b_inicio');

if (bar) {
  bar.addEventListener('click', () => {
    lista.classList.toggle('activar');
  });
}

