/*5) Escreva um programa para ler as notas da 1ª e 2ª avaliações de um aluno, calcular e imprimir a
média semestral. Faça com que o algoritmo só aceite notas válidas (uma nota válida deve pertencer
ao intervalo [0,10]). Cada nota deve ser validada separadamente. Deve ser impressa a mensagem
"Nota inválida" caso a nota informada não pertença ao intervalo [0,10].

6) Reescreva o programa para o exercício 5 para que no final seja impressa a mensagem Novo cálculo
(1.sim 2.não) solicitando ao usuário que informe um código (1 ou 2) indicando se ele deseja ou não
executar o programa novamente. Se for informado o código 1 deve ser repetida a execução de todo o
programa para permitir um novo cálculo, caso contrário ele deve ser encerrado.

7) Reescreva o programa do exercício 6 validando a resposta do usuário para a pergunta Novo Cálculo
(1.sim 2.não)? (aceitar apenas o código 1 ou 2). */

let contador = 0;
let resposta;
while (contador === 0) {
    let nota2;
    let nota1;
    contador = 0;
    while (contador === 0) {
        nota1 = parseFloat(prompt("Nota da 1ª avaliação:"));
        if (nota1 < 0 || nota1 > 10) {
            alert("Nota da primeira avaliação inválida, valor deve estar entre 0 e 10")
        } else {
            contador = 1;
        }
    
    }
    contador = 0;
    while (contador === 0) {
        nota2 = parseFloat(prompt("Nota da 2ª avaliação:"));
        if (nota2 < 0 || nota2 > 10) {
            alert("Nota da segunda avaliação inválida, valor deve estar entre 0 e 10")
        } else {
            contador = 1;
        }
    
    }
    contador = 0;
    let media = (nota1+nota2)/2;
    
    document.write(`<br>A média é ${media}</br>`);

    let contadorSecundario = 0;
    while(contadorSecundario == 0){
        resposta = prompt("Digite 1 para calcular nova media ou 2 para sair do programa")
        if (resposta == 1) {
            contadorSecundario = 1;
        } else if (resposta == 2){
            contador = 1;
            contadorSecundario = 1;
        } else {
            confirm(`Sua resposta foi ${resposta} e esse valor é inválido!`)
        }
    }
}



