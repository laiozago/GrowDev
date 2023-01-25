/*Faça um algoritmo que leia a idade de vários alunos de uma turma.
O programa vai parar quando for digitada a idade 999. No final,
mostre quantos alunos existem na turma e qual é a média de idade
do grupo.*/

let continua = 1;
let contador = 0;
let soma = 0;

while (continua === 1) {
    
    const nota = Number(prompt("Digite a nota do aluno, ou 999 para sair."));
    if (nota != 999) {
        soma += nota;
        contador++ 
    } else {
        continua = 0;
    }
}

console.log(`Foram registradas ${contador} notas e a média dos ${contador} alunos foi ${soma/contador}`);