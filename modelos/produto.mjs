import { DataTypes } from "sequelize";
import conexao from "../database/mysql.mjs";

const Produto = conexao.define('Produto', {
    nome: DataTypes.STRING,
    quantidade: DataTypes.INTEGER,
    descricao: DataTypes.STRING,
    preco: DataTypes.DECIMAL
   
});

Produto.sync();

export default Produto;