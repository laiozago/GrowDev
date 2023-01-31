/*Os caixas eletrônicos das Ilhas Growdev operam com todos os tipos de
notas disponíveis, mantendo um estoque de cédulas para cada valor. Os
clientes do banco utilizamos caixas eletrônicos para efetuar retiradas de
um certo número inteiro de GrowCoins.
Sua tarefa é escrever um algoritmo que, dado o valor de GrowCoins
desejado pelo cliente, determine o número de cada uma das notas
necessárias para totalizar esse valor. Por exemplo, se o Marcelo deseja
retirar GC$50,00 basta entregar uma única nota de cinquenta GrowCoins.
Se o Édson deseja retirar GC$72,00 será necessário entregar uma nota de
GC$ 50,00, duas de GC$ 10,00 e duas de GC$ 1,00 */

//* variavel para o valor do saque
let valorDoSaque = 78;

let notas50 = 0;
let notas10 = 0;
let notas5 = 0;
let notas1 = 0;

while (valorDoSaque >= 50) {
    notas50++
    valorDoSaque -= 50;
}
while (valorDoSaque>=10) {
    notas10++
    valorDoSaque =valorDoSaque - 10;
}
while (valorDoSaque>=5) {
    notas5++
    valorDoSaque = valorDoSaque - 5;
}
while (valorDoSaque>=1) {
    notas1++
    valorDoSaque = valorDoSaque - 1;
}

console.log(`GC$ 50,00 = ${notas50}`);
console.log(`GC$ 10,00 = ${notas10}`);
console.log(`GC$ 5,00 = ${notas5}`);
console.log(`GC$ 1,00 = ${notas1}`);