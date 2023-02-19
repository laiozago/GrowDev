const input = document.querySelector('#inputTxt');
const btn = document.querySelector('#btn');
//quando clicar no botao excluir ultimo item da lista
btn.addEventListener('click', function() {
    const list = document.querySelector('ul');
    const lastItem = list.lastElementChild;
    list.removeChild(lastItem);
    input.focus();
});

//função para adicionar item na lista pelo input
function addItem() {
    if (input.value !== '') {
        const list = document.querySelector('ul');
        const item = document.createElement('li');
        item.innerHTML = input.value;
        list.appendChild(item);
        input.value = '';
        input.focus();
    }
}

//função para o botão adicionar
const btnAdd = document.querySelector('#inputBtn');
btnAdd.addEventListener('click', addItem);