let quebrada = false;

function acendeLampada() {
    if (!quebrada) {
        const imagem = document.querySelector("#lampada");
        imagem.src = './img/lampada_acesa.jpg'
    }
}

function apagaLampada() {
    if (!quebrada) {
        const imagem = document.querySelector("#lampada");
        imagem.src = './img/lampada_apagada.jpg'
    }
}

function quebraLampada() {
    const imagem = document.querySelector("#lampada");
    imagem.src = './img/lampada_quebrada.jpg'
    
if (!quebrada) {
        const botao = document.createElement("button");
        botao.innerText = "Restaurar lâmpada";
        botao.classList.add("btn-restaurar");
        const div = document.querySelector("div");
        div.appendChild(botao);
        botao.onclick = restauraLampada;
}
    quebrada = true;
}

function restauraLampada() {
    const imagem = document.querySelector("#lampada");
    imagem.src = './img/lampada_apagada.jpg'
    quebrada = false;
    const botao = document.querySelector(".btn-restaurar");
    botao.remove();
}

