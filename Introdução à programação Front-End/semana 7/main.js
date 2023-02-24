alert('Bem vindo ao CRUD Carros')
let continuar = true;
const carros = [
    {
        modelo: 'civic',
        marca: 'honda',
        ano: '2000',
        cor: 'prata',
        preco: '20000',
        id: '1'
    }, {
        modelo: 'city',
        marca: 'honda',
        ano: '2000',
        cor: 'prata',
        preco: '4000',
        id: '2'
    }, {
        modelo: 'ka',
        marca: 'ford',
        ano: '2000',
        cor: 'prata',
        preco: '4000',
        id: '3'
    }, {
        modelo: 'palio',
        marca: 'fiat',
        ano: '2000',
        cor: 'prata',
        preco: '40000',
        id: '4'
    }
]

//função para criar id uma unidade maior que o maior id já criado
const criaId = () => {
    let maiorId = 0;
    for (let i = 0; i < carros.length; i++) {
        if (Number(carros[i].id) > maiorId) {
            maiorId = Number(carros[i].id)
        }
    }
    return maiorId + 1
}

//função para adicionar um carro
const addCarro = (modelo, marca, ano, cor, preco) => {
    const carro = {
        modelo: modelo,
        marca: marca,
        ano: ano,
        cor: cor,
        preco: preco,
        id: criaId(),
    }
    carros.push(carro)
}

//função para ordenar os carros por preço
const ordenarCarros = () => {
    carros.sort((a, b) => {
        return b.preco - a.preco
    })
}

//função para filtrar por marca
const filtrarMarca = (marca) => {
    ordenarCarros()
    const carrosFiltrados = carros.filter((carro) => {
        return carro.marca === marca
    })
    return carrosFiltrados
}

//função para listar todos os carros
const listarCarros = () => {
    let listaCarros = ''
    ordenarCarros()
    carros.forEach(carro => {
        listaCarros += `ID: ${carro.id} |`
        listaCarros += `Modelo: ${carro.modelo} |`
        listaCarros += `Marca: ${carro.marca} |`
        listaCarros += `Ano: ${carro.ano} |`
        listaCarros += `Cor: ${carro.cor} |`
        listaCarros += `Preço: ${carro.preco} |`
        //pula linha
        listaCarros += '\n';
    });
    alert(listaCarros)
}

//função para atualizar um carro, apenas cor e preço
const atualizarCarro = (id, cor, preco) => {
    const carro = carros.find((carro) => {
        return carro.id === id
    })
    if (!carro) {
        alert('Carro não encontrado')
        return
    }
    carro.cor = cor
    carro.preco = preco
}

//função para remover um carro
const removerCarro = (id) => {
    const carro = carros.find((carro) => {
        return carro.id === id
    })
    if (!carro) {
        alert('Carro não encontrado')
        return
    }
    const index = carros.indexOf(carro)
    carros.splice(index, 1)
}

do {
    const opcao = prompt(
        `
                Digite:
                1 - Cadastrar veículo
                2 - Listar todos os veículos
                3 - Filtrar por marca
                4 - Atualizar veículo
                5 - Remover veículo
                6 - Sair
            `
    )

    switch (opcao) {
        case '1':
            const modelo = prompt('Modelo do veículo:')
            const marca = prompt('Marca do veículo:')
            const ano = Number(prompt('Ano do veículo:'))
            const cor = prompt('Cor do veículo:')
            const preco = Number(prompt('Preço do veículo:'))
            addCarro(modelo, marca, ano, cor, preco)
            break;
        case '2':
            listarCarros()
            break;
        case '3':
            const marcaFiltro = prompt('Digite a marca para filtrar')
            const carrosFiltrados = filtrarMarca(marcaFiltro)
            let listaCarros = ''
            carrosFiltrados.forEach(carro => {
                listaCarros += `ID: ${carro.id} |`
                listaCarros += `Modelo: ${carro.modelo} |`
                listaCarros += `Marca: ${carro.marca} |`
                listaCarros += `Ano: ${carro.ano} |`
                listaCarros += `Cor: ${carro.cor} |`
                listaCarros += `Preço: ${carro.preco} |`
                //pula linha
                listaCarros += '\n';
            });
            alert(listaCarros)
            break;
        case '4':
            const filtroID = prompt('Digite o Identificador:')
            const carro = carros.find((carro) => {
                return carro.id === filtroID
            })
            if (!carro) {
                alert('Carro não encontrado')
                break
            }
            const corAtualizada = prompt('Digite a nova cor:')
            const precoAtualizado = Number(prompt('Digite o novo preço:'))
            atualizarCarro(filtroID, corAtualizada, precoAtualizado)
            break;
        case '5':
            const id = prompt('Digite o Identificador:')
            removerCarro(id)
            break;
        case '6':
            continuar = false
            break;
        default:
            alert('Opção inválida')
            break;
    }
} while (continuar)
