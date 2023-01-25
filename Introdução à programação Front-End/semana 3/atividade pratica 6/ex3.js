/*Crie um algoritmo que leia o valor inicial da contagem, o valor final e
o incremento, mostrando em seguida todos os valores no intervalo:
Ex:
Digite o primeiro Valor: 3
Digite o último Valor: 10
Digite o incremento: 2
Contagem: 3 5 7 9 Acabou!*/

let valorInicial = 10;
let valorFinal = 1010;
const incremento = 37;

// while (valorInicial<=valorFinal) {
//     console.log(valorInicial);
//     valorInicial += incremento;
// }

for (let index = valorInicial; index <= valorFinal; index += incremento) {
    console.log(index);
}