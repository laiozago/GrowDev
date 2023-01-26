/*Uma loja de eletrodomésticos estabeleceu as seguintes
modalidades de pagamento para a venda de suas mercadorias:

a vista: desconto de 2.5% no valor de tabela
de 2 até 5 vezes: preço de tabela
de 6 até 10 vezes: juros de 6% sobre o preço de tabela
de 11 até 15 vezes: juros de 13% sobre o preço de tabela

Escreva um algoritmo que armazene o preço de tabela e o número
de vezes em que o pagamento será feito. Calcule o valor de cada
parcela e o preço total da compra e imprima no console. */

const preco = 1000;
const vezes = 15;

if (vezes === 1) {
    console.log(`Valor a pagar: ${0.975*preco}`);
} else if (vezes<=5){
    console.log(`Valor a pagar: ${preco}`);
} else if (vezes<=10){
    console.log(`Valor a pagar: ${1.06*preco}`);
} else if (vezes<=15){
    console.log(`Valor a pagar: ${1.13*preco}`);
} 