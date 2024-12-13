import { DataTypes } from "sequelize";
import conexao from "../database/mysql.mjs";

const Cliente = conexao.define('Cliente', {
    nome: DataTypes.STRING,
    idade: DataTypes.INTEGER,
    cpf: DataTypes.STRING,
    numero: DataTypes.STRING,
    cidade: DataTypes.STRING
});

Cliente.sync();

export default Cliente;