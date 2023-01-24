/*Desenvolva um algoritmo que leia 10 números, calcule e escreva a
média aritmética dos valores lidos,a quantidade de valores
positivos,a quantidade de valores negativos e o percentual de
valores negativos e positivos.*/

const arrayNumeros = [1, 3, 5, 6, 9, 15, 2, 3, 5, 7];

let positivos = 0;
let negativos = 0;
let soma = 0
for (let i = 0; i < arrayNumeros.length; i++) {
    soma += arrayNumeros[i];
    if (arrayNumeros[i]<0) {
        negativos++
    }else if (arrayNumeros[i]>0) {
        positivos++
    }
}
const media = soma/arrayNumeros.length;

console.log(`A média dos valores é ${media}, foram passados ${positivos} valores positivos e ${negativos} valores negativos fazendo com que ${100*positivos/arrayNumeros.length}% sejam valores positivos e ${100*negativos/arrayNumeros.length}% sejam valores negativos`);