/* Desenvolva aqui a rotina */
//inicia as variáveis
let valorBase, valorTransporte, valorAlimentacao, receitaTotal, valorAutomovel, faltas, totalDescontos, valorTotal;
//*adiciona o evento de carregamento da página
window.addEventListener('load', function() {
    //atribui os elementos do DOM às variáveis
    valorBase = document.getElementById('valorBase');
    valorTransporte = document.getElementById('valorTransporte');
    valorAlimentacao = document.getElementById('valorAlimentacao');
    receitaTotal = document.getElementById('receitaTotal');
    valorAutomovel = document.getElementById('valorAutomovel');
    faltas = document.getElementById('faltas');
    totalDescontos = document.getElementById('totalDescontos');
    valorTotal = document.getElementById('valorTotal');
    /*const botao = document.getElementById('btnCalcular');
    //*adiciona o evento de click no botão
    botao.addEventListener('click', function() {
        calcular();
    })*/
    lerLocalStorage();
    //*adiciona o evento de focus nos inputs
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            //chama a função para limpar o campo
            limpar(input);
        })
    })
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            //chama a função para calcular os valores
            calcular();
        })
    })
})
//*função para salvar os dados no localStorage
const salvarLocalStorage = () => {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        localStorage.setItem(input.id, input.value);
    })
}
//*função para calcular os valores
const calcular = () => {
    const totalReceita = parseFloat(valorBase.value) + parseFloat(valorTransporte.value) + parseFloat(valorAlimentacao.value);
    receitaTotal.value = totalReceita.toFixed(2);
    const totalDesconto = parseFloat(valorAutomovel.value) + parseFloat(faltas.value);
    totalDescontos.value = totalDesconto.toFixed(2);
    const total = totalReceita - totalDesconto;
    valorTotal.value = total.toFixed(2);
    salvarLocalStorage();
}
//*função para ler os dados do localStorage
const lerLocalStorage = () => {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        const valor = localStorage.getItem(input.id);
        if(valor) {
            input.value = valor
        } else {
            input.value = 0;
        }
    })
}
//função para quando clicar no input limpar o campo
const limpar = (input) => {
    input.value = '';
}
