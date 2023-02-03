//*Crie um array com 10 números inteiros aleatórios e use o método .sort() para ordená-los.

function exercicio1() {
    //criando array com 10 números inteiros aleatórios
    let array = [];
    for (let i = 0; i < 10; i++) {
        array.push(Math.floor(Math.random() * 100));
    }
    //ordenando array
    let arrayOrdenado = array.sort((a, b) => a - b);
    alert(`Array original: ${array}
    Array ordenado: ${arrayOrdenado}`);
}

//*Crie um array com 5 strings e use o método .reverse() para inverter a ordem.

function exercicio2() {
    //criando array com 5 strings
    let array = ["a", "b", "c", "d", "e"];
    //inverter a ordem
    let arrayInvertido = array.reverse();
    alert(`Array original: ${array}
    Array invertido: ${arrayInvertido}`);
}

//* Crie um array com 7 objetos, onde cada objeto representa uma pessoa, com nome, idade e cidade. 
//* Use o método .filter() para encontrar todas as pessoas com idade maior ou igual a 18 anos.

function exercicio3() {
    //criando array com 7 objetos
    let array = [
        { nome: "João", idade: 18, cidade: "São Paulo" },
        { nome: "Maria", idade: 20, cidade: "Rio de Janeiro" },
        { nome: "José", idade: 15, cidade: "São Paulo" },
        { nome: "Ana", idade: 17, cidade: "Rio de Janeiro" },
        { nome: "Pedro", idade: 25, cidade: "São Paulo" },
        { nome: "Paula", idade: 30, cidade: "Rio de Janeiro" },
        { nome: "Júlia", idade: 22, cidade: "São Paulo" }
    ];
    //filtrando array
    let arrayFiltrado = array.filter((pessoa) => pessoa.idade >= 18);
    alert(`Array original: ${JSON.stringify(array)}
    Array filtrado: ${JSON.stringify(arrayFiltrado)}`);
}

//* Crie um array com 8 números inteiros e use o método .reduce() para encontrar a soma de todos os elementos.

function exercicio4() {
    let array = [1, 2, 3, 4, 5, 6, 7, 8];
    let soma = array.reduce((a, b) => a + b);
    alert (soma);
}

//* Crie um array com 10 elementos e use o método .map() para criar um novo array com os elementos duplicados.

function exercicio5() {
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let arrayDuplicado = array.map((numero) => numero * 2);
    alert(`Array original: ${array}
    Array duplicado: ${arrayDuplicado}`);
}

//* Crie um array com 6 strings e use o método .join() para concatená-los em uma única string separados por vírgulas.

function exercicio6() {
    let array = ["a", "b", "c", "d", "e", "f"];
    let string = array.join(", ");
    alert(string);
}

//* Crie um array com 5 objetos, onde cada objeto representa um produto, com nome, preço e quantidade. 
//*Use o método .forEach() para exibir o nome e o preço de cada produto.

function exercicio7() {
    let array = [
        { nome: "Arroz", preço: 10, quantidade: 1 },
        { nome: "Feijão", preço: 8, quantidade: 1 },
        { nome: "Macarrão", preço: 5, quantidade: 1 },
        { nome: "Carne", preço: 20, quantidade: 1 },
        { nome: "Frango", preço: 15, quantidade: 1 }
    ];
    array.forEach((produto) => alert(`Nome: ${produto.nome}
    Preço: ${produto.preço}`));
}

//* Crie um array com 9 números inteiros e use o método .slice() para criar um novo array com os 3 últimos elementos.

function exercicio8() {
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let arraySlice = array.slice(6);
    alert(`Array original: ${array}
    Array slice: ${arraySlice}`);
}

//* Crie um array com 8 elementos e use o método .splice() para remover os 3 primeiros elementos.

function exercicio9() {
    let array = [1, 2, 3, 4, 5, 6, 7, 8];
    let arrayRemover = array.splice(0, 3);
    alert(`Array original: ${array}`);
    alert(`Array removido: ${arrayRemover}`);
}

//* Crie um array com 10 números inteiros e use o método .indexOf() para encontrar a posição de um elemento específico.

function exercicio10() {
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let posicao = array.indexOf(10);
    alert(`Posição: ${posicao}`);
}