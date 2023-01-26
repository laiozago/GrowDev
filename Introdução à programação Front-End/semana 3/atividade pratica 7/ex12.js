/*Para doar sangue é necessário ter entre 18 e 67 anos. Faça um
programa que armazene a idade de uma pessoa e diga se ela pode
doar sangue ou não.Use alguns dos operadores lógicos OU (||) e E (&&).*/

const idade = Number(prompt("Informe sua idade"))

if( idade>=18 && idade < 67){
    alert("Você pode doar sangue")
} else {
    alert("Você não pode doar sangue.")
}