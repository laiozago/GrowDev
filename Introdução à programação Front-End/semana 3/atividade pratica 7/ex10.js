/*Tendo como entrada a altura e o sexo (codificado da seguinte
forma:
1 para sexo feminino e 
2 para sexo masculino) 
de uma pessoa,construa um programa que calcule e mostre seu peso ideal,
utilizando as seguintes fórmulas:
- para homens: (72.7 * Altura) – 58
- para mulheres: (62.1 * Altura) – 44.7 */

const altura = Number(prompt('Informe sua altura'));
const sexo = Number(prompt('Informe seu sexo: 1: HOMENS || 2: MULHERES'));
if (sexo === 1) {
    document.write(`Seu peso ideal é ${72.7*altura-58}`)
} else if (sexo === 2) {
    document.write(`Seu peso ideal é ${62.1*altura-44.7}`)
}