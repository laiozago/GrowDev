/*Desenvolva um algoritmo que mostre uma contagem regressiva de
30 até 1,marcando os números que forem primos,exatamente
como mostrado abaixo:
30 [29] 28 27 26 25 24 [23] 22 21 20 [19] 18 [17] 16...*/

let i = 30; // variavel que guarda o primeiro numero da lista aser formada
//let contadorDeDividores = 0;

while(i >= 1){
    let contador = 1;
    let contadorDeDividores = 0;
    while (contador <= i) {
        if (i%contador == 0) {
            contadorDeDividores++
        }
        
        contador++
    }
    if (contadorDeDividores == 2) {
        console.log(`[${i}]`);
    } else {
        console.log(`${i}`);
    }
    i--
}
