/*Escreva um algoritmo que armazene o número total de eleitores de
um município, o número de votos brancos,nulos e válidos.Calcular
e escrever o percentual que cada um representa em relação ao
total de eleitores.O algoritmo deve fazer uma validação para que as
porcentagens dos votos armazenados(brancos,nulos e válidos)
respeitem o limite do número total de eleitores, ou seja, garantir que
a soma dos votos brancos,nulos e válidos não seja maior que o
número total de eleitores.
*/

const eleitores = Number(prompt('Qual o número de eleitores de seu município?'));
let soma = 0;
let brancos = 0;
let nulos = 0;
let validos = 0;
do {
    if (soma != 0){
        alert('Escreva novamente os números de votos.');
    }
    soma = 0
    brancos = Number(prompt('Qual o número de votos brancos?'));
    nulos = Number(prompt('Qual o número de votos nulos?'));
    validos = Number(prompt('Qual o número de votos válidos?'));
    soma = brancos + nulos + validos;
} while (soma != eleitores)

document.write(`Abaixo o resultado:<br>
Brancos: ${100*brancos/eleitores}%<br>
Nulos: ${100*nulos/eleitores}%<br>
Válidos: ${100*validos/eleitores}%
`);