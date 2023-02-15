/*Capture, armazene e manipule todos os elementos de classe "card".
Modifique os estilos necessários nesses elementos para que fique
semelhante a imagem.

Capture, armazene e manipule todos os elementos de classe
"titulo-card". Modifique os estilos necessários nesses elementos
para que fique semelhante a imagem.

Modifique o texto dos títulos nos cards para "Meu card".

Capture, armazene e manipule todos os elementos de classe
"descricao-card". Modifique os estilos necessários nesses elementos
para que fique semelhante a imagem.

Modifique o texto das descrições nos cards para "Descrição
modificada pelo JavaScript".

Capture, armazene e manipule todos os elementos de classe
"botao-editar". Modifique o estilo desses elementos para que fique
semelhante a imagem.

Capture, armazene e manipule todos os elementos de classe
"botao-apagar". Modifique o estilo desses elementos para que fique
semelhante a imagem.

Adicione o atributo 'onclick' nos elementos de classe “botão-editar”.
Ao clicar nesses elementos, deve chamar a função 'editarCard()'.
Essa função deve mostrar um alerta com a mensagem "Clicou em
Editar!".

Adicione o atributo 'onclick' nos elementos de classe
“botão-apagar”. Ao clicar nesses elementos deve chamar a função
'apagarCard()'. Essa função deve perguntar ao usuário se ele tem
certeza da exclusão do card. Se o usuário confirmar a exclusão deve
mostrar um alerta com a mensagem "Confirmado!", se não deve
mostrar a mensagem "Cancelou!".
*/

const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
    card.setAttribute("style", "background-color: #E16E0E")
});

const cardTitulo = document.querySelectorAll('.titulo-card');
cardTitulo.forEach((titulo) => {
    titulo.setAttribute("style", "color: #000;margin:0 0 2em 0;")
    titulo.innerHTML = "Meu card";
});

const descricaoCard = document.querySelectorAll('.descricao-card');
descricaoCard.forEach((descricao) => {
    descricao.setAttribute("style", "color: #f0f0f0;margin:0 0 2em 0;")
    descricao.innerHTML = "Descrição modificada pelo JavaScript";
});

const btnEditar = document.querySelectorAll('.botao-editar');
btnEditar.forEach((btn) => {
    btn.setAttribute("style", "background-color: #008000;color: #f0f0f0;border: 1px solid #008000;padding:0.5em;border-radius:5px;cursor:pointer;")
    btn.addEventListener("click", editarCard);
});

const btnApagar = document.querySelectorAll('.botao-apagar');
btnApagar.forEach((btn) => {
    btn.setAttribute("style", "background-color: #FF0000;color: #f0f0f0;border: 1px solid #FF0000;padding:0.5em;border-radius:5px;cursor:pointer;")
    btn.addEventListener("click", apagarCard);
});

function editarCard() {
    alert("Clicou em Editar!");
}

function apagarCard() {
    const confirma = confirm("Tem certeza que deseja apagar o card?");
    if (confirma) {
        alert("Confirmado!");
    }else {
        alert("Cancelou!");
    }
}