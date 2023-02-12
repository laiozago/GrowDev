/*Crie um objeto em JavaScript para colocar dois atributos de um
produto. Atribua o preço e descrição do produto com o valor “90” e a
descrição com o valor “Mouse”. Mostre no console o valor dos dois
atributos.*/
const produto = {
    preco:90,
    descricao:'mouse'
};

/*Crie um objeto em JavaScript para colocar 5 atributos de um
notebook. Atribua os seguintes atributos:
Processador = i7
Memória = 16GB
Preço = 5000
HD = 1TB
SSD = 256GB
Por fim, mostre o nome e valor de cada atributo no console,
exatamente como está na atividade. */
const computador = {
    processador:'i7',
    memoria: '16GB',
    preco: 5000,
    ssd:'256GB'
};
//console.log(computador);

/*Crie um objeto para colocar nome e duas notas. Atribua nome e
duas notas para o primeiro objeto, que será nosso primeiro aluno.
Agora crie mais um objeto para colocar informações do nosso
segundo aluno. Mostre as informações de cada aluno no console.
Mostre também a média do primeiro aluno e a média do segundo
aluno. Por fim mostre a média desta turma de 2 alunos. */
const aluno1 = {
    nome: 'Laio',
    nota1: 9,
    nota2: 10,
    media: function(){
        return (this.nota1+this.nota2)/2},
};
const aluno2 = {
    nome: 'Julia',
    nota1: 8,
    nota2: 9,
    media: function(){
        return (this.nota1+this.nota2)/2},
};

//console.log(aluno1,aluno2);
//console.log(`Média do ${aluno1.nome} é ${aluno1.media()}`);
//console.log(`Média do ${aluno2.nome} é ${aluno2.media()}`);
//console.log(`A média da turma é ${(aluno1.media()+aluno2.media())/2}`);

/*Crie cinco objetos JavaScript dentro de um Array contendo
nome(texto), idade(número), skills (array), ou seja um total de cinco

alunos. Agora crie uma função que receba estes cinco objetos e
mais um parâmetro skill. Dependendo da skill enviada mostrar no
console.log(), quais alunos têm a skill enviada por parâmetro,
mostrar todo o objeto.
Exemplo: Pedro, 24, [JavaScript, TypeScript, React]. Se mandar
chamar a função enviando (alunos, “JavaScript”), precisa mostrar o
Pedro e qual mais se encaixa nessa skill. */
const alunos = [{
    nome:'Laio',
    idade:30,
    skills:['javascript','typescript','react']
},
{
    nome:'Pedro',
    idade:35,
    skills:['javascript','typescript','react']
},
{
    nome:'Liz',
    idade:25,
    skills:['Nodejs','typescript','fluter']
},
{
    nome:'Julia',
    idade:33,
    skills:['sass','html','css']
},
{
    nome:'Marcela',
    idade:22,
    skills:['git','typescript','react']
}];
function quemSabe(arrayAlunos,skill) {
    arrayAlunos.forEach(aluno => {
        if (aluno.skills.includes(skill)) {
            console.log(aluno.nome);
        }
    });
};

quemSabe(alunos,'typescript');

/*Crie um cadastro de pessoas onde o usuário informe o nome, idade
e se está trabalhando ou não, se a pessoa estiver trabalhando
pergunte para ele o salário que está ganhando. Para cada pessoa
cadastrada, pergunte ao usuário se ele deseja continuar
cadastrando ou não. No final, mostre as pessoas que estão
desempregadas, as pessoas que estão empregadas separadas
pelas que ganham mais que 2500 e menos que 2500.

Exemplo de resultado:
Pessoas desempregadas:
Nome: Alessandro, Idade: 28
Nome: Alessandro, Idade: 28

Pessoas empregadas com salários menores que 2500:
Nome: Alessandro, Idade: 28, Salário: 1500
Nome: Alessandro, Idade: 28, Salário: 2400

Pessoas empregadas com salários maiores que 2500:
Nome: Alessandro, Idade: 28, Salário: 2700
Nome: Alessandro, Idade: 28, Salário: 3000 */
const pessoas = [];
let continuar = true;
while (continuar) {
    const pessoa = {
        nome: prompt('Digite o nome'),
        idade: prompt('Digite a idade'),
        trabalhando: confirm('Trabalhando?'),
    };
    if (pessoa.trabalhando) {
        pessoa.salario = prompt('Digite o salário');
    }
    pessoas.push(pessoa);
    continuar = confirm('Deseja continuar?');
}
console.log(pessoas);
