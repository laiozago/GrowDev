/*Informe um valor a uma variável e imprima no console se o número
é primo */

const num = 500369;
divisores = 0

for (let i = 1; i <= num; i++){
    if (num%i==0) {
        divisores++
    }
}
if (divisores === 2) {
    console.log('É primo');
} else {
    console.log('Não é primo');
}