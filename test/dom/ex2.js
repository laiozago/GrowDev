const botao = document.querySelector('#btn');
botao.addEventListener('click', function() {
    const texto = document.querySelector('#txt');
    const valor = texto.value;
    if (valor !== '') {
        alert(valor);
        texto.value = '';
    } 
});