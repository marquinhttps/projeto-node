import urlBackEnd from "./constantes/urls.mjs";

async function getLista() {
    const resposta = await fetch(urlBackEnd + '/clientes/listar');
    const clientes = await resposta.json();
    return clientes;
}

async function buscaUm(id) {
    const resposta = await fetch(urlBackEnd + '/clientes/listar/' + id);
    const cliente = await resposta.json();
    return cliente;
}   

async function novo(obj) {
    const opt = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj)
    };
    const resposta = await fetch(urlBackEnd + '/clientes/cadastrar', opt);
    const cadastrado = await resposta.json();
    return cadastrado;
}

async function altera(obj) {
    const opt = {
        method: 'put',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    };
    const resposta = await fetch(urlBackEnd + '/clientes/editar', opt);
    const editado = await resposta.json();
    return editado;
}

async function exclui(id) {
    /* Remove um elemento do vetor
    a partir da posição indice */
    const opt = {

        method: 'delete',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: id })
    }
    const resposta = await fetch(urlBackEnd + '/clientes/deletar', opt);
    const apagado = await resposta.json();
    return apagado;
}

export { getLista, buscaUm, novo, altera, exclui };