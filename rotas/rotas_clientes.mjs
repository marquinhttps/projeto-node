import { Router } from "express";
import { altera, exclui, novo, todos, um } from "../controles/controle_clientes.mjs";

const rotas_clientes = Router();

rotas_clientes.post('/cadastrar', novo);
rotas_clientes.get('/listar', todos);
rotas_clientes.get('/listar/:id', um);
rotas_clientes.put('/editar', altera);
rotas_clientes.delete('/deletar', exclui);

export default rotas_clientes;