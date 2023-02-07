//* Crie um array com 10 números inteiros aleatórios e para ordená-los.

function exercicio1() {
    //sorteia 10 numeros
    const numeros = [];
    for (let i = 0; i < 10; i++) {
        numeros.push(parseInt(Math.random()*100));
    }
    //coloca os numeros em ordem
    for (let i = 0; i < numeros.length; i++) {
        for (let j = 0; j < numeros.length - i - 1; j++) {
            if (numeros[j] > numeros[j + 1]) {
                let temp = numeros[j];
                numeros[j] = numeros[j + 1];
                numeros[j + 1] = temp;
            }
        }
    }
    return numeros;
}


//* Crie um array com 5 strings e inverter a ordem.

function exercicio2() {
    const nomes = ["Laio","Maria","Guilherme","Gabriela","Luisa"];
    const invert = [];
    for (let i = nomes.length; i >= 0; i--) {
        const element = nomes[i];
        invert.push(element);
    }
    invert.shift()
    return invert;
}

//* Crie um array com 8 números inteiros e encontrar a soma de todos os elementos.

function exercicio3() {
    const numeros = [1,2,3,4,5,6,7,8];
    let soma = 0;
    numeros.forEach(numero => {
        soma += numero
    });
    return soma;
}

//* Crie um array com 10 elementos e criar um novo array com os elementos duplicados.

function exercicio4() {
    const numeros = [1,2,3,4,5,6,7,8,9,10];
    const numerosDuplicados = [];
    numeros.forEach(numero => {
        numerosDuplicados.push(numero);
        numerosDuplicados.push(numero);
    });
    return numerosDuplicados;
}
console.log(exercicio4());