/*Faça um algoritmo que pergunte a distância que um passageiro
deseja percorrer em Km. Calcule o preço da passagem, cobrando
R$0.50 por Km para viagens até 200Km e R$0.45 paraviagens mais
longas.*/

const distancia = Number(prompt("Qual a distância da sua viagem? ** APENAS NÚMEROS **"));

if (distancia > 200) {
    document.write(`O valor da viagem será ${0.45*distancia}`);
} else {
    document.write(`O valor da viagem será ${0.5*distancia}`);
}