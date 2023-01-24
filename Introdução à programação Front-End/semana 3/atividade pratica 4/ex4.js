/*Escreva um algoritmo que percorra os números inteiros entre 1 e 250
e verifique quais números são múltiplos de 3 e quais são múltiplos
de 5.*/

const multiplo1 = 3;
const multiplo2 = 5;

const limiteSuperior = 250;

let i = 1
console.log(`Esses são os numeros que são multiplos de ${multiplo1}:`);
while (i <= limiteSuperior) {
    if (i%multiplo1==0) {
        console.log(i);
    }
    i++
}

let k = 1;

console.log(`Esses são os numeros que são multiplos de ${multiplo2}:`);
while (k <= limiteSuperior) {
    if (k%multiplo2==0) {
        console.log(k);
    }
    k++
}