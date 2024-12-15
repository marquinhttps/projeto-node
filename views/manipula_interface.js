import { altera, buscaUm, exclui, getLista, novo } from "./acessa_dados.js";

async function salvar() {
    const iptNome = document.getElementById('nome');
    const iptIdade = document.getElementById('idade');
    const iptCpf = document.getElementById('cpf');
    const iptNumero = document.getElementById('numero');
    const iptCidade = document.getElementById('cidade');

    const obj = {
        "nome": iptNome.value,
        "idade": iptIdade.value,
        "cpf": iptCpf.value,
        "numero": iptNumero.value,
        "cidade": iptCidade.value
    };

    await novo(obj);
    desenhaTabela();
}



async function editar() {

    const iptId = document.getElementById('id');
    const iptNome = document.getElementById('nome');
    const iptIdade = document.getElementById('idade');
    const iptCpf = document.getElementById('cpf');
    const iptNumero = document.getElementById('numero');
    const iptCidade = document.getElementById('cidade');

    const obj = {

        "id": iptId.value,
        "nome": iptNome.value,
        "idade": iptIdade.value,
        "cpf": iptCpf.value,
        "numero": iptNumero.value,
        "cidade": iptCidade.value
    
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
    const cliente = await buscaUm(id);

    document.getElementById('id').value = cliente.id;
    document.getElementById('nome').value = cliente.nome;
    document.getElementById('idade').value = cliente.idade;
    document.getElementById('cpf').value = cliente.cpf;
    document.getElementById('numero').value = cliente.numero;
    document.getElementById('cidade').value = cliente.cidade;

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
        const td6 = document.createElement('td');

        const btEd = document.createElement('button');
        const btEx = document.createElement('button');

        btEd.innerText = 'Editar';
        btEd.setAttribute('data-id', dados[i].id);
        btEd.addEventListener('click', preencheDadosParaEdicao);

        btEx.innerText = 'Excluir';
        btEx.setAttribute('data-id', dados[i].id);
        btEx.addEventListener('click', excluir);

        td1.innerText = dados[i].nome;
        td2.innerText = dados[i].idade;
        td3.innerText = dados[i].cpf;
        td4.innerText = dados[i].numero;
        td5.innerText = dados[i].cidade;

        td6.append(btEd, btEx);

        tr.append(td1, td2, td3,td4, td5, td6);
        tbody.append(tr);
    }
}

// Eventos
const btSalvar = document.getElementById('btSalvar');
btSalvar.addEventListener('click', decideSalvarEditar);

window.addEventListener('load', desenhaTabela);