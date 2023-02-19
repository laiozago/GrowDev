const body = document.body;
const button = document.querySelector('input');
const texto = document.querySelector('p');
let darkMode = false;

button.addEventListener('click', () => {
    if (darkMode) {
        body.classList.remove('dark-mode');
        button.value = 'Dark Mode';
        texto.innerHTML = 'Light Mode';
        texto.classList.remove('dark-mode');
        darkMode = false;
    } else {
        body.classList.add('dark-mode');
        button.value = 'Light Mode';
        texto.innerHTML = 'Dark Mode';
        texto.classList.add('dark-mode');
        darkMode = true;
    }
});
