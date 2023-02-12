const cliente = [{
    cpf:12111222663,
    nome:'Laio dos Santos Zago Passos',
    nascimento:'09/12/1992',
    sexo:'masculino',
    saldo:900.00,
    tipoDeConta:'A',
},{
    cpf:55412036687,
    nome:'Guido Manoel da Fonseca',
    nascimento:'19/06/1982',
    sexo:'masculino',
    saldo:10900.00,
    tipoDeConta:'A',
},
{
    cpf:55797823652,
    nome:'Julia Klein Paixão',
    nascimento:'15/01/2002',
    sexo:'feminino',
    saldo:523.63,
    tipoDeConta:'B',
},
{
    cpf:12584566992,
    nome:'Sofia Tinoco Chaves',
    nascimento:'10/04/2000',
    sexo:'feminino',
    saldo:158013.21,
    tipoDeConta:'B',
}]
const cpfs = []
cliente.forEach(pessoa => {
    cpfs.push(pessoa.cpf)
});

function deposito(praQuem,valor) { //pra quem por cpf e valor
    cliente.forEach(pessoa => {
        if (pessoa.cpf === praQuem) {
            pessoa.saldo += valor;
        }
    });
}
function saque(praQuem,valor) { //pra quem por cpf e valor
    cliente.forEach(pessoa => {
        if (pessoa.cpf === praQuem) {
            pessoa.saldo -= valor;
        }
    });
}
function transferencia(deQuem,paraQuem,valor) { //de quem por cpf, para quem por cpf e valor
    cliente.forEach(pessoa => {
        if (pessoa.cpf === deQuem) {
            pessoa.saldo -= valor;
        }
    });
    cliente.forEach(pessoa => {
        if (pessoa.cpf === paraQuem) {
            pessoa.saldo += valor;
        }
    });
}
function saldo(quem) { //quem por cpf
    cliente.forEach(pessoa => {
        if (pessoa.cpf === quem) {
            console.log(pessoa.saldo);
        }
    });
}

