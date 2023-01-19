/*5. Escreva um programa que pergunte a velocidade de um carro. Caso
ultrapasse 80Km/h, exiba uma mensagem dizendo que o usuário foi
multado. Nesse caso, exiba o valor da multa, cobrando R$5 por cada
km acima da velocidade permitida.*/

const velocidade = 100;

if (velocidade > 80) {
    console.log(`O valor da sua multa é R$ ${(velocidade-80)*5}`);
}