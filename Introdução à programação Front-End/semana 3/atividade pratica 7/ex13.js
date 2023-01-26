/*Faça um algoritmo que armazene um número e imprima os
números ímpares entre 1 e o número armazenado.
 */

const num = 50;

for (let i = 1; i <= num; i++) {
    if (i%2 != 0) {
        console.log(i);
    }
}