import { altera, buscaUm, exclui, getLista, novo } from "./acessa_dados_produtos.js";

async function salvar() {
    const iptNome = document.getElementById('nome');
    const iptQuantidade = document.getElementById('quantiade');
    const iptDescricao = document.getElementById('descricao');
    const iptPreco = document.getElementById('preco');

    const obj = {
        "nome": iptNome.value,
        "quantiade": iptQuantidade.value,
        "descricao": iptDescricao.value,
        "preco": iptPreco.value
    };

    await novo(obj);
    desenhaTabela();
}


async function editar() {

    const iptId = document.getElementById('id');
    const iptNome = document.getElementById('nome');
    const iptQuantidade = document.getElementById('quantiade');
    const iptDescricao = document.getElementById('descricao');
    const iptPreco = document.getElementById('preco');

    const obj = {

        "id": iptId.value,
        "nome": iptNome.value,
        "quantiade": iptQuantidade.value,
        "descricao": iptDescricao.value,
        "preco": iptPreco.value,
    
    };
    await altera(obj);
    desenhaTabela();
}

function decideSalvarEditar(event) { // manipulaSalvar
    event.preventDefault();
    if (document.getElementById('id').value) {
        editar();
    } else {
        salvar();
    }

    document.getElementById('form1').reset();
    document.getElementById('id').value = '';

}


async function excluir(event) {
    const id = event.target.getAttribute('data-id');
    await exclui(id);
    desenhaTabela();
}

async function preencheDadosParaEdicao(event) {

    const id = event.target.getAttribute('data-id');
    const produto = await buscaUm(id);

    document.getElementById('id').value = produto.id;
    document.getElementById('nome').value = produto.nome;
    document.getElementById('quantidade').value = produto.quantiade;
    document.getElementById('descricao').value = produto.descricao;
    document.getElementById('preco').value = produto.preco;

}

async function desenhaTabela() {
    const tbody = document.getElementById('tbody1');
    tbody.innerHTML = '';
    const dados = await getLista();
    for (let i = 0; i < dados.length; i++) {

        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        const td4 = document.createElement('td');
        const td5 = document.createElement('td');

        const btEd = document.createElement('button');
        const btEx = document.createElement('button');

        btEd.innerText = 'Editar';
        btEd.setAttribute('data-id', dados[i].id);
        btEd.addEventListener('click', preencheDadosParaEdicao);

        btEx.innerText = 'Excluir';
        btEx.setAttribute('data-id', dados[i].id);
        btEx.addEventListener('click', excluir);

        td1.innerText = dados[i].nome;
        td2.innerText = dados[i].quantiade;
        td3.innerText = dados[i].descricao;
        td4.innerText = dados[i].preco;

        td5.append(btEd, btEx);

        tr.append(td1, td2, td3,td4, td5);
        tbody.append(tr);
    }
}

// Eventos
const btSalvar = document.getElementById('btSalvar');
btSalvar.addEventListener('click', decideSalvarEditar);

window.addEventListener('load', desenhaTabela);