/*Desenvolva um aplicativo que leia o salário e o sexo de vários
funcionários.No final, mostre o total de salários pagos aos homens e
o total pago às mulheres. O programa vai perguntar ao usuário se
ele quer continuar ou não sempre que ler os dados de um funcionário*/

let somaHomens = 0;
let somaMulheres = 0;
let contadorHomens = 0;
let contadorMulhere = 0;

let continua = true;

do {
    let sexo = prompt("Informe o sexo do funcionário");
    let salario = Number(prompt('Informe o salário do funcionário'))
    if (sexo == 'masculino') {
        contadorHomens++;
        somaHomens += salario;
    } else if (sexo == 'feminino'){
        contadorMulhere++;
        somaMulheres += salario
    }
    let resposta = prompt("Digite 999 se não quiser mais inserir funcionários ou 0 para continuar.")
    if (resposta == 999) {
        continua = false;
    }
} while (continua);

document.write(`A soma do salário dos ${contadorHomens} funcionários é ${somaHomens} e a média salarial destes é ${somaHomens / contadorHomens}`)
document.write(`<br>A soma do salário das ${contadorMulhere} funcionárias é ${somaMulheres} e a média salarial destas é ${somaMulheres / contadorMulhere}`)