const numero1 = document.getElementById('numero1');
const numero2 = document.getElementById('numero2');
const operacao = document.getElementById('operacao');
const opcoesLabel = document.querySelectorAll('label');
const opcoes = document.querySelectorAll('input');
const botao = document.getElementById('btnProximo');

const quiz = document.getElementById('quiz');

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
            resultado = num1 / num2;
            break;
        default:
            sortear();//se não for nenhuma das operações, sorteia novamente
    }
    return resultado;
}

//*função para sortear dois numeros de -100 a +100 para o quiz e a operação
function sortear() {
    const operacoes = ['+', '-', '*', '/'];
    let num1 = Math.floor(Math.random() * 100);
    let num2 = Math.floor(Math.random() * 100);

    let op = operacoes[Math.floor(Math.random() * 4)];

    numero1.innerHTML = num1;
    numero2.innerHTML = num2;
    operacao.innerHTML = op;

    calcular(num1, num2, op);

    //função para criar outros 3 numeros inteiros aleatorios para as opções
    function criarOpcoes() {
        let opcoes = [];
        for (let i = 0; i < 3; i++) {
            let opcao = Math.floor(Math.random() * 10000);
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

//*função para verificar se a opção escolhida está correta
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

//*função para iniciar o quiz
sortear();

//*função para o botão de proximo
botao.addEventListener('click', (event) => {
    event.preventDefault();
    verificar();
});

//*função para ouvir o enter e chamar a função verificar
document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        verificar();
    }
});