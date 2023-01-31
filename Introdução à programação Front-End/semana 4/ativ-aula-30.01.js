let saldo = 1000
let operacao;
do {
    operacao = Number(prompt(`Olá Marcela, seu saldo é R$ ${saldo}
1 - Depósito
2 - Saque
3 - Transferência
0 - Sair`)
    )

    switch (operacao) {
        case 1:
            let deposito = Number(prompt(` Qual o valor que deseja depositar ?`))
            if (deposito <= 0 || deposito == '' || (isNaN(deposito))) {
                alert('O valor do depósito de ser maior que 0')
            } else {
                saldo += deposito
                alert(` Seu saldo ficou ${saldo}`)
            }
            break;
        case 2:
            let saque = Number(prompt(`Qual o valor que deseja sacar ? `))
            if (saque <= 0 || saque == '' || (isNaN(saque))) {
                alert(`Valor tem que ser maior que zero.`)

            } else if (saque > saldo) {
                alert(`Você esta sem grana.`)

            } else {
                saldo -= saque
                alert(`Seu saldo ficou ${saldo}`)
            }
            break
        case 3:
            let transferencia = Number(prompt(`Qual o valor que deseja transferir?`))

            if (isNaN(transferencia) || transferencia == '' || transferencia <= 0) {
                alert(`Digite um numero valido.`)
            } else if (transferencia > 0 && transferencia < saldo3) {

                let destino = prompt(`Escreva o destinatario: `)

                saldo -= transferencia
                alert(`Seu saldo ficou ${saldo} , conta destino ${destino}, a transferencia foi de ${transferencia}.`)
            }
        default:
            alert('operação invalida')
            break;

    }
} while (operacao != 0);