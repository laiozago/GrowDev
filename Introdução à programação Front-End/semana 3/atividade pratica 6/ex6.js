/*Faça um programa que leia a largura e o comprimento de um
terreno retangular, calculando e mostrando a sua área em m².O
programa também deve mostrar a classificação desse terreno, de
acordo com a lista abaixo:
Abaixo de 100m² = TERRENO POPULAR
Entre 100m² e 500m² = TERRENO MASTER
Acima de 500m² = TERRENO VIP
*/

const comprimento = prompt('Informe o comprimento do terreno. **APENAS NUMEROS**');
const largura = prompt('Informe a largura do terreno. **APENAS NUMEROS**');
const area = comprimento*largura;

if (area < 100) {
    document.write(`TERRENO POPULAR`)
} else if (area > 500){
    document.write(`TERRENO VIP`)
} else {
    document.write(`TERRENO MASTER`)
}