const data = [
    {
        nome: 'Roger Medeiros',
        sexo: 'M',
        salario: 3250
    }, {
        nome: 'Carolina Silva',
        sexo: 'F',
        salario: 1200
    }, {
        nome: 'Cristina Avila',
        sexo: 'F',
        salario: 8100
    }, {
        nome: 'Gustavo Hoffman',
        sexo: 'M',
        salario: 5200.35
    }, {
        nome: 'Eva Trindade',
        sexo: 'F',
        salario: 2501
    }, {
        nome: 'Andre Mathias',
        sexo: 'M',
        salario: 1750
    }, {
        nome: 'Joice Castro da Silva',
        sexo: 'F',
        salario: 3350.25
    }
];

//* 1- Imprima no console a quantidade de pessoas Total.
function exercicio1() {
    console.log(`A quantidade de pessoas é ${data.length}.`);
};

//* 2 - Imprima no console a quantidade de pessoas pessoas do sexo Feminino.
function exercicio2() {
    let contador = 0;
    data.forEach((pessoa) => {
        if (pessoa.sexo === 'F') {
            contador++;
        }
    });
    console.log(`A quantidade de pessoas do sexo feminino é ${contador}.`);
};

//* 3 - Imprima no console a soma do salário de todas as pessoas.
function exercicio3() {
    let somaSalarios = 0;
    data.forEach((pessoa) => {
        somaSalarios += pessoa.salario;
    })
    console.log(`A soma dos salários é R$ ${somaSalarios.toFixed(2)}`);
};

//* 4 - Imprima no console a média do salário de todas as pessoas.
function exercicio4() {
    let somaSalarios = 0;
    data.forEach((pessoa) => {
        somaSalarios += pessoa.salario;
    })
    const mediaSalarios = somaSalarios / data.length;
    console.log(`A média dos salários é R$ ${mediaSalarios.toFixed(2)}`);
};

//* 5 - Imprima no console a soma do salário de todos as pessoas do sexo Masculino
function exercicio5() {
    let somaSalarios = 0;
    data.forEach(pessoa => {
        if (pessoa.sexo === 'M') {
            somaSalarios += pessoa.salario;
        }
    });
    console.log(
        `A soma do salário das pessoas do sexo masculino é R$ ${somaSalarios}.`
    )
};

//* 6 - Imprima no console a média do salário de todas as pessoas do sexo Masculino
function exercicio6() {
    let somaSalarios = 0;
    let contador = 0;
    data.forEach(pessoa => {
        if (pessoa.sexo === 'M') {
            somaSalarios += pessoa.salario;
            contador++;
        }
    });
    const media = somaSalarios / contador;
    console.log(
        `A média do salário das pessoas do sexo masculino é R$ ${media.toFixed(2)}.`
    );
};

//* 7 - Utilize a função Some, para descobrir se existe algum salário superior a R$ 7.000, imprima verdadeiro no console caso exista, caso contrário falso.
function exercicio7() {
    console.log(data.some((pessoa) => {
        pessoa.sexo > 7000;
    }))
};

//* 8 - Utilize a função findIndex, para descobrir a posição da pessoa de nome 'Eva Trindade'.
function exercicio8() {
    console.log(data.findIndex((pessoa) => {
        return pessoa.nome === 'Eva Trindade';
    }));
};

//* 9 - Utilize a função filter, para filtrar todas pessoas que o nome possua o sobrenome "Silva".
function exercicio9() {
    console.log(data.filter((pessoa) => {
        return pessoa.nome.includes("Silva");
    }))
};

//* 10 - Imprima os nomes utilizando o MAP
function exercicio10() {
    console.log(data.map((pessoa) => {
        return pessoa;
    }))
};

exercicio1();
exercicio2();
exercicio3();
exercicio4();
exercicio5();
exercicio6();
exercicio7();
exercicio8();
exercicio9();
exercicio10();