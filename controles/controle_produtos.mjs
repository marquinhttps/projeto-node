import Produto from "../modelos/produto.mjs";

async function novo(req, res) {
    const criado = await Produto.create({
        nome: req.body.nome,
        quantidade: req.body.quantidade,
        descricao: req.body.descricao,
        preco: req.body.preco,
    });
    res.json(criado);
}

async function todos(req, res) {
    const todos = await Produto.findAll();
    res.json(todos);
}

async function um(req, res) {
    const um = await Produto.findOne({
        where: { id: req.params.id }
    });
    res.json(um);
}

async function altera(req, res) {
    const pro = await Produto.findOne({
        where: { id: req.body.id }
    })
    pro.nome = req.body.nome,
        pro.quantidade = req.body.quantidade,
        pro.descricao = req.body.descricao,
        pro.preco = req.body.preco,

        await pro.save();
    res.json(pro);
}

async function exclui(req, res) {
    const pro = await Produto.findOne({
        where: { id: req.body.id }
    });
    await pro.destroy();
    res.json(pro);
}

export { novo, todos, altera, exclui, um };
