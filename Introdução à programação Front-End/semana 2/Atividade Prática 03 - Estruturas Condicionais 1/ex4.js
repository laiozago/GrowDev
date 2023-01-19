/*4. Faça um algoritmo que leia a idade e peso de um atleta e imprima
a sua categoria, de acordo com a seguinte tabela:

Idade            Peso              Categoria
Até 12 anos                        - Infantil
13 a 16 anos    Até 40kg           Juvenil leve
                Acima de 40kg      Juvenil pesado
17 a 24 anos    Até 45kg           Sênior leve
                Acima de 45kg até 60kg Sênior médio
                Acima de 60kg      Sênior pesado
Acima de 24 anos                   - Veterano*/

const idade = 25;
const peso = 60;

if (idade<=12) {
    console.log('Categoria Infantil')
} else if (idade<16 && peso<=40) {
    console.log('categoria juvenil leve');
} else if (idade<16 && peso>40){
    console.log('categoria juvenil pesado');
} else if (idade<24 && peso<=45){
    console.log('categoria sênior leve');
} else if(idade<24 && peso<=60) {
    console.log('categoria sênio médio');
} else if (idade<24 && peso>60){
    console.log('categoria sênior pesado');
} else {
    console.log('categoria veterano');
}