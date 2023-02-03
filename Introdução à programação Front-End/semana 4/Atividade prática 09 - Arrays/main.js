/*1. Desenvolva um algoritmo para percorrer um vetor de 15 elementos
inteiros já preenchido e imprima todos os valores pares.*/

function exercicio1() {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const pares = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element%2 === 0) {
            pares.push(element)
        }
    }
    alert(`Os pares são: ${pares}`)
}

/*2. Desenvolva um algoritmo para percorrer um vetor de 20 elementos
inteiros e no final mostre a soma de todos os elementos.*/

function exercicio2() {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    let soma = 0;
    let string = array.join("+");
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        soma += element;
    }
    alert(`${string} = ${soma}`);
}

/*3. Desenvolva um algoritmo que preenche um vetor com os 4
primeiros números perfeitos.*/

function exercicio3() {
    let quantosPerfeitos = Number(prompt("Quantos números perfeitos você quer?"));
    let perfeitos = [];
    function numPerfeito(num) {
        let soma = 0;
        for (let i = 1; i < num; i++) {
            if (num % i == 0) {
                soma += i;
            }
        }
        if (soma == num) {
            return true;
        } else {
            return false;
        }
    }
    for (let i = 1; perfeitos.length < quantosPerfeitos; i++) {
        if (numPerfeito(i)) {
            perfeitos.push(i);
        }
    }
    alert(perfeitos);
}


/*4. Crie uma função que recebe 2 vetores de 10 elementos inteiros e que
retorne a união dos dois em um novo vetor.*/

function exercicio4() {
    let array1 = [1,2,3,4,5,6,7,8,9,10];
    let array2 = [11,12,13,14,15,16,17,18,19,20];
    let arrayUniao = [];
    for (let i = 0; i < array1.length; i++) {
        const numero = array1[i];
        arrayUniao.push(numero)
    }
    for (let i = 0; i < array2.length; i++) {
        const numero = array2[i];
        arrayUniao.push(numero)
    }
    alert(arrayUniao);
}

/*5. Crie uma função que recebe um vetor de inteiros e um número
inteiro e retorne verdadeiro se o número faz parte do vetor ou falso
se não faz parte.*/

function exercicio5() {
    let array = [1,2,3,4,5,6,7,8,9,10];
    let numero = Number(prompt("Digite um número para saber se está no array:"));
    for (let i = 0; i < array.length; i++) {
        const num = array[i];
        if (num === numero) {
            alert(`O número ${numero} pertence ao array`);
            return
        }
    }
    alert("Não pertence ao array!");
}

/*6. Escreva um algoritmo que solicite ao usuário a entrada de 5 nomes,
e que exiba a lista desses nomes na tela. Após exibir essa lista, o
programa deve mostrar também os nomes na ordem inversa em
que o usuário os digitou.

Ex:
Entrada: Édson, Marcelo, Letícia, Ju, Thobias
Saída: Thobias, Ju, Letícia, Marcelo, Édson*/

function exercicio6() {
    let array = [];
    for (let i = 0; i < 5; i++) {
        let nome = prompt("Digite um nome:");
        array.push(nome);
    }
    let arrayIvertido = [];
    for (let index = array.length-1; index >= 0 ; index--) {
        const element = array[index];
        arrayIvertido.push(element)
    }
    alert(`Array normal: ${array}`);
    alert(`Array invertido: ${arrayIvertido}`);
}