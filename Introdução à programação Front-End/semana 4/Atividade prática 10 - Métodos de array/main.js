/*1. Considere o seguinte array:
    const salarios = [5000.00, 5460.50, 3452.00, 6900.00, 7590.10, 8012.99,
        1290.00, 15000.00];
    a. Imprima no console o índice do primeiro salário maior que 7.500 utilizando o findIndex
    b. Imprima no console a lista de salários em ordem crescente utilizando o sort
    c. Imprima no console a lista de salários em ordem decrescente utilizando o sort
    d. Utilize a função Some, para descobrir se existe algum salário superior a 10.000, imprima verdadeiro no console caso exista, caso contrário falso.
    e. Crie uma nova lista filtrada com os salários que são maior que 8.000 utilizando o filter.
*/

const salarios = [5000.00, 5460.50, 3452.00, 6900.00, 7590.10, 8012.99,1290.00, 15000.00];
function exercicio1(array) {
    const maiorFindIndex = (numero) => numero>7500;
    const maiorSome = (numero) => numero>10000;
    const maiorFilter = (numero) => numero>8000;
    console.log('a)',array.findIndex(maiorFindIndex));
    console.log('b)',array.sort((a,b) => a - b));
    console.log('c)',array.sort((a,b) => b - a));
    console.log('d)',array.some(maiorSome));
    console.log('e',array.filter(maiorFilter));
}
//*exercicio1(salarios)

/*2. James estava criando uma array com as cores do arco-íris, e ele esqueceu algumas cores. As cores padrão de um arco-íris são normalmente listadas nesta ordem:
    const rainbow = ["Vermelho", "Laranja", "Amarelo", "Verde", "Azul","Roxo"];
    mas James tinha isto:
    const rainbow = ["Vermelho", "Laranja", "Preto", "Azul"];

    Usando somente o método splice insira as cores que faltam na array e remova a cor "Preto", seguindo estes passos:
    a. Remova "Preto"
    b. Adicione "Amarelo" e "Verde"
    c. Adicione "Roxo"
*/

const rainbow = ["Vermelho", "Laranja", "Preto", "Azul"];
function exercicio2(array) {
    array.splice(2,1,"Amarelo","Verde");
    array.splice(5,0,"Roxo")
    console.log(array);
}
exercicio2(rainbow);