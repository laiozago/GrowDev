/*Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar
descontos para todos, mas especialmente para mulheres.Faça um
programa que leia nome,sexo e o valor das compras do cliente e
calcule o preço com desconto. Sabendo que:
a.Homens ganham 5% de desconto
b.Mulheres ganham 13% de desconto*/

const nome = prompt('Qual seu nome?');
const sexo = prompt('Qual seu sexo? **masculino ou feminino**');
const valor = Number(prompt('Qual o valor?'));
let valorAPagar;

if (sexo == 'masculino') {
    valorAPagar = 0.95*valor;
} else if (sexo == 'feminino'){
    valorAPagar = 0.87*valor;
}
console.log(valorAPagar);