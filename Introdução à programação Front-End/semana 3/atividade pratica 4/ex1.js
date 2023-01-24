//Desenvolva um algoritmo que leia a altura de 15 pessoas.Este programa deverá calcular e mostrar: a.A menor altura do grupo;b.A maior altura do grupo
const alturas = [1.70, 1.72, 1.83, 1.25, 1.36, 1.59, 1.98, 1.86, 2.01, 1.85, 1.63, 1.45, 1.37, 1.85, 1.56]
let maiorAltura = alturas[0];
let menorAltura = alturas[0];

let contador = 0
while (contador <= 14) {
    if (alturas[contador] > maiorAltura) {
        maiorAltura = alturas[contador];
    } else if (alturas[contador] < menorAltura) {
        menorAltura = alturas[contador];
    }
    contador++
}

console.log(`A maior altura é ${maiorAltura} e a menor altura é ${menorAltura}`);