/*Desenvolva um algoritmo que mostre uma contagem regressiva de
30 até 1,marcando os números que forem primos,exatamente
como mostrado abaixo:
30 [29] 28 27 26 25 24 [23] 22 21 20 [19] 18 [17] 16...*/

function primo(n) {
    let divisores = 0
    for (let i = 1; i <= n; i++) {
        if (n%i==0) {
            divisores++
        }
    }
    if (divisores>2) {
        return false
    } else {
        return true
    }
}

let i = 30 // Valor para alista começar

while (i>1) {
    if (primo(i)) {
        console.log(`[${i}]`);
    } else {
        console.log(`${i}`);
    }
    i--
}
console.log(1);
