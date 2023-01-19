/*2. Escreva um algoritmo que solicite 2 números e uma operação
matemática. O algoritmo deve realizar o cálculo com os 2 números
digitados conforme a operação informada.*/

const num1 = 15;
const num2 = 12;

const operacao = '*';

if (operacao == '*'){
    console.log(num1*num2)
} else if(operacao == '+') {
    console.log(num1+num2);
} else if (operacao == '-') {
    console.log(num1-num2);
} else if (operacao == '/') {
    console.log(num1/num2);
}