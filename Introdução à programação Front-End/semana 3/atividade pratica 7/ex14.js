/*Leia um número,utilizando WHILE multiplique este número por 3
enquanto a soma seja menor que 500 e no final mostre qual o
último valor */

const num = 90//Number(prompt("Informe o valor"));
let resultado = 0;
let contador = 0;

while (contador < 3) {
    if (resultado + num < 500) {
        resultado += num
    }
    contador++
}

console.log(resultado);