/*Utilizando Switch,faça um programa que pergunte em que turno
você estuda.Peça para digitar “M” para matutino ou “V” para
vespertino ou “N” para noturno. Mostre uma lerta com a mensagem
“Bom dia!” ou “Boa tarde” ou “Boa Noite”ou“Valorinválido”,
conforme o caso. */

const turno = prompt(`
Em que turno você estuda? 
Digite:
M para matutino
T para vesperino
N para noturno
`).toUpperCase();

switch (turno) {
    case 'M':
        alert("Bom dia")
        break;
    case 'T':
        alert('Boa tarde')
        break;
    case 'N':
        alert('Boa noite')
        break;

    default:
        break;
}