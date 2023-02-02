//* Refatorei a atividade de 30.01, para funções.

let saldo = 1000
let operacao;
do {
    operacao = Number(
        prompt(`Olá Marcela, seu saldo é R$ ${saldo}
	1 - Depósito
	2 - Saque
	3 - Transferência
	0 - Sair`)
    )

    switch (operacao) {
        case 1:
            saque();
            break;
        case 2:
            deposito();
            break
        case 3:
            transferencia();
            break;
        default:
            alert('operação invalida')
            break;

    }
} while (operacao != 0);


//* Função para saque
function saque() {
    let deposito = Number(prompt(` Qual o valor que deseja depositar ?`))
    if (deposito <= 0 || deposito == '' || (isNaN(deposito))) {
        alert('O valor do depósito de ser maior que 0')
    } else {
        saldo += deposito
        alert(` Seu saldo ficou ${saldo}`)
    }
}

//* Função para depósito
function deposito() {
    let saque = Number(prompt(`Qual o valor que deseja sacar ? `))
    if (saque <= 0 || saque == '' || (isNaN(saque))) {
        alert(`Valor tem que ser maior que zero.`)

    } else if (saque > saldo) {
        alert(`Você esta sem grana.`)

    } else {
        saldo -= saque
        alert(`Seu saldo ficou ${saldo}`)
    }
}

//* Função para transferência
function transferencia() {
    let transferencia = Number(prompt(`Qual o valor que deseja transferir?`))

    if (isNaN(transferencia) || transferencia == '' || transferencia <= 0) {
        alert(`Digite um numero valido.`)
    } else if (transferencia > 0 && transferencia < saldo) {

        let destino = prompt(`Escreva o destinatario: `)

        saldo -= transferencia
        alert(
            `Seu saldo ficou ${saldo} , conta destino ${destino}, a transferencia foi de ${transferencia}.`
        )
    }
}