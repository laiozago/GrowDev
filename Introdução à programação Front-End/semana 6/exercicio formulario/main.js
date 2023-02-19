const usuarios = [];
const botaoCadastrar = document.querySelector('#botaoCadastrar');
const formulario = document.querySelector('#formulario');
const usuario = {
    nome: formulario.nomeCompleto.value,
    email: formulario.email.value,
    cpf: formulario.cpf.value,
    endereco: formulario.endereco.value,
    cidade: formulario.cidade.value,
    estado: formulario.estado.value,
    cargo: formulario.cargo.value,
}

botaoCadastrar.addEventListener('click', function(event) {
    event.preventDefault();
    usuarios.push(usuario)
    console.log(usuarios);
});