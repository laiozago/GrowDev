/*Utilizando o IF,ELSE,ELSEIF crie uma estrutura para receber um
número de 1 a 7 e imprimir no console o dia da Semana. Para este
exercício assumimos que o dia 1 é Domingo, dia 2 é segunda e assim
por diante.Caso o número recebido não esteja neste intervalo
imprimir “Dia não reconhecido” */

const dia = Number(prompt("Digite o número do dia da semana"));

if (dia === 1) {
    console.log('domingo');
} else if(dia === 2){
    console.log('segunda-feira');
} else if (dia === 3) {
    console.log('terça-feira');
} else if (dia === 4) {
    console.log('quarta-feira');
} else if (dia === 5) {
    console.log('quinta-feira');
} else if (dia === 6) {
    console.log('sexta-feira');
} else if (dia === 7) {
    console.log('sabado');
} else {
    console.log('escreva números de 1 a 7');
}