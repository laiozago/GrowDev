/*Escreva um algoritmo que armazene o ano atual e o ano de
nascimento de uma pessoa.Escrever uma mensagem no console
que diga se ela poderá ou não votar este ano(não é necessário
considerar o mês em que a pessoa nasceu). */

const anoAtual = 2023;
const anoDeNascimento = 1992;

if (anoAtual - anoDeNascimento >= 16) {
    console.log("Você pode votar esse ano!");
} else {
    console.log("Você ainda não pode votar!");
}