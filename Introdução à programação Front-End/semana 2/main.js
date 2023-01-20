// Criar um algoritmo para calcular a média de 3 notas e no final fazer as seguintes validações:

//-> Se a média ficar entre 9 e 10 deve ser mostrado no html a mensagem: Aprovado com nota excelente

//-> Se a média ficar entre 7 e 9 (não incluso) deve ser mostrado no html a mensagem: Aprovado com uma nota boa

//-> Se a média ficar abaixo de 7 deve ser solicitado uma outra nota que será a nota de recuperação.

//-> Se a nota de recuperação for maior que 6 deve ser mostrado a mensagem no html: Aprovado na recuperação

//-> Se a nota ficar abaixo de 6 deve ser mostrado a mensagem no html: Reprovado, estude e pratique mais.

const nota1 = 10;
const nota2 = 9;
const nota3 = 10;

const media = (nota1+nota2+nota3)/3;
console.log(media);
if (media>=9) {
    console.log('Aprovado com nota excelente');
} else if (media>=7 && media<9) {
    console.log('Aprovado com boa nota');
} else {
    const notaRec = 5;
    if (notaRec>=6) {
        console.log('Aprovado em recuperação');
    } else {
        console.log('Reprovado, estude mais e pratique.');
    }
}