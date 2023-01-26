/*Crie um algoritmo que armazene três valores, para cada um dos
lados de um triângulo:A,B e C. Verifique se os lados fornecidos
formam realmente um triângulo. Se formar, deve mostrar no console
o tipo de triângulo: isósceles, escaleno ou equilátero.
a.Para verificar se os lados fornecidos formam um triângulo:
A < B + C e B < A + C e C < A + B.
b.Triângulo isósceles: possui dois lados iguais(A=B ou A=C ou B=C);
c.Triângulo escaleno:possui todos os lados diferentes (A<>BeB<>C e A<>C);
d.Triângulo equilátero: possui todos os lados iguais(A=B e B=C); */

const lado1 = 3;
const lado2 = 4;
const lado3 = 5;

if (lado1 < lado2 + lado3 && lado2 < lado1 + lado3 && lado3 < lado2 + lado1) { // confere se é triângulo
    if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) { //confere se tem dois lados iguais (isósceles)
        if (lado1 === lado2 && lado2 === lado3) { //confere se tem 3 lados iguais (equilátero)
            console.log("Esse triângulo é equilátero");
        } else {
            console.log("Esse triângulo é isósceles");
        }
    } else {
        console.log("Esse triângulo é escaleno");
    }
} else {
    console.log("Esse triângulo não existe");
}