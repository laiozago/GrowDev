/*Escreva uma lgoritmo que faça a tabuada de um número e
apresente o resultado de acordo como modelo a seguir,sabendo
que o multiplicando deverá ser fornecido pelo usuário(n) e a
quantidade de iterações também (i).
1 * 2 = 2
2 * 2 = 4
3 * 2 = 6
...
*/

const n = 5; //numero que quero a tabuada
const i = 10; //tabuada até que valor

let index = 1
while (index <= i) {
    console.log(`${index} * ${n} = ${index*n}`)
    index++
}