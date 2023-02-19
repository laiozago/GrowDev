const numero1 = document.getElementById('numero1');
const numero2 = document.getElementById('numero2');
const operacao = document.getElementById('operacao');
const opcoesLabel = document.querySelectorAll('label');
const opcoes = document.querySelectorAll('input');
const botao = document.getElementById('btnProximo');

const quiz = document.getElementById('quiz');

//*função para verificar se o resultado de uma divisão é uma dízima periódica
function verificaDizima(dividendo, divisor) {
    const restoAnterior = new Map();
    let resto = dividendo % divisor;

    while (resto !== 0 && !restoAnterior.has(resto)) {
        restoAnterior.set(resto, true);
        resto = (resto * 10) % divisor;
    }

    return resto !== 0;
}

//*função para calcular a fração mínima de uma divisão
function calcularFracaoMinima(divisor, dividendo) {
    // Verificar se o dividendo é zero
    if (dividendo === 0) {
        throw new Error("O dividendo não pode ser zero.");
    }

    // Calcular o máximo divisor comum usando o algoritmo de Euclides
    let a = Math.abs(divisor);
    let b = Math.abs(dividendo);
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    let mdc = a;

    const [numerador, denominador] = [divisor / mdc, dividendo / mdc];
    // Retornar a fração mínima
    return [numerador, denominador];
}

 //*função para calcular o resultado da operação
    function calcular(num1, num2, op) {
    let resultado;
    switch (op) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            //verifica se o resultado é uma dízima periódica
            if (verificaDizima(num1,num2)){
                sortear();//se for, sorteia novamente
            }
            const respostas = calcularFracaoMinima(num1,num2);//se não for, calcula a fração mínima
            resultado = respostas[0] + '/' + respostas[1];
            break;
    }
    return resultado;
}

//função para sortear dois numeros de -100 a +100 para o quiz e a operação
function sortear() {
    const operacoes = ['+', '-', '*', '/'];
    let num1 = Math.floor(Math.random() * 200) - 100;
    let num2 = Math.floor(Math.random() * 200) - 100;

    let op = operacoes[Math.floor(Math.random() * 4)];

    numero1.innerHTML = num1;
    numero2.innerHTML = num2;
    operacao.innerHTML = op;

    calcular(num1, num2, op);

    //função para criar outros 3 numeros inteiros aleatorios para as opções
    function criarOpcoes() {
        let opcoes = [];
        for (let i = 0; i < 3; i++) {
            let opcao = Math.floor(Math.random() * 200) - 100;
            opcoes.push(opcao);
        }
        return opcoes;
    }

    //função para colocar na tela as opçẽos e o resultado numa ordem aleatoria
    function colocarOpcoes() {
        let opcoesCriadas = criarOpcoes();
        let resultado = calcular(num1, num2, op);
        let posicao = Math.floor(Math.random() * 4);
        opcoesCriadas.splice(posicao, 0, resultado);
        opcoesCriadas.forEach((opcao,index) => {
            opcoesLabel[index].innerHTML = opcao;
            opcoes[index].value = opcao;
        });

    }
    colocarOpcoes();
}

//função para verificar se a opção escolhida está correta
function verificar() {
    let opcaoEscolhida = document.querySelector('input:checked');
    let resultado = calcular(Number(numero1.innerHTML), Number(numero2.innerHTML), operacao.innerHTML);
    if (opcaoEscolhida.value == resultado) {
        alert('Parabéns, você acertou!');
    } else {
        alert('Você errou, tente novamente!');
    }
    //desmarcar a opção escolhida
    opcaoEscolhida.checked = false;
    sortear();
}

//função para iniciar o quiz
sortear();

//função para o botão de proximo
botao.addEventListener('click', (event) => {
    event.preventDefault();
    verificar();
});
