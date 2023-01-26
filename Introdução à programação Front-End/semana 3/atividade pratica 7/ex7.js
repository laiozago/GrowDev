/*Utilizando do...while, imprima na tela a soma de todos os números
entre 10 e 100 */

let soma = 0;
let contador = 10;

do {
    soma += contador;
    contador++
} while (contador<=100);
document.write(`A soma dos numeros de 10 até 100 é ${soma}`);
