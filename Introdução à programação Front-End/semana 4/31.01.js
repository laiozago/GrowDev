//* Função para verificar se o número é primo
function ePrimo(n) {
    // Se o número for 1, não é primo
    if (n == 1) {
        return false;
    }
    // Se o número for 2, é primo
    if (n == 2) {
        return true;
    }
    // Se o número for par, não é primo
    if (n % 2 == 0) {
        return false;
    }
    // Se o número for ímpar, verifica se é primo testando todos os números ímpares até a metade do número
    for (let i = 3; i < parseInt(n/2)+1; i+=2) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}


for (let i = 0; i < 1000; i++) {
    if (ePrimo(2**i-1)) {
        console.log(`${2**i-1} é primo de Mersenne: ${ePrimo(2**i-1)}`);
    }
}