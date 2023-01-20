// const numero1 = prompt('Digite o primeiro número')

// if(!numero1 || isNaN(Number(numero1))){
//     alert('Valor inválido')
// } else {
//     const numero2 = prompt('Digite o segundo número')

//     if(!numero2 || isNaN(Number(numero2))){
//         alert('Valor inválido')
//     } else {
//         const resultado = Number(numero1) + Number(numero2)
    
//         console.log(`O resultado é: ${resultado}`)
//     }
// }

// const num1=Number(prompt('primeiro valor'));
// const num2=Number(prompt('segundo valor'));
// const operacao = prompt('somar || subtrair || multiplicar || dividir')

// switch (operacao) {
//     case 'somar':
//         console.log(`${num1+num2}`);
//         break;
//     case 'subtrair':
//         console.log(`${num1-num2}`);
//         break;
//     case 'dividir':
//         console.log(`${num1/num2}`);
//         break;
//     case 'multiplicar':
//         console.log(`${num1*num2}`);
//         break;
//     default:
//         console.log('deu errado');
//         break;
// }

const mes = Number(prompt('Qual número do mês'))

switch (mes) {
    case 1:
        document.write('<h1>Janeiro</h1>')
        break;
    case 2:
        document.write('<h1>Fevereiro</h1>')
    break;
    case 3:
        document.write('<h1>Março</h1>')
    break;
    case 4:
        document.write('<h1>Abril</h1>')
    break;
    case 5:
        document.write('<h1>Maio</h1>')
    break;
    case 6:
        document.write('<h1>Junho</h1>')
    break;
    case 7:
        document.write('<h1>Julho</h1>')
        break;
    case 8:
        document.write('<h1>Agosto</h1>')
    break;
    case 9:
        document.write('<h1>Setembro</h1>')
    break;
    case 10:
        document.write('<h1>Outubro</h1>')
    break;
    case 11:
        document.write('<h1>Novembro</h1>')
    break;
    case 12:
        document.write('<h1>Dezembro</h1>')
    break;

    default:
        alert('numero do mês deve ser entre 1 e 12')
        break;
}