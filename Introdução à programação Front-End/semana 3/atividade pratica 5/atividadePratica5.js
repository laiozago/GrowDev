let valorDoSaque = 78; // variavel para o valor do saque

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