import { Sequelize } from "sequelize";

const conexao = new Sequelize({
    "host": "dpg-cte1042lqhvc73db7upg-a",
    "port": "5432",
    database: 'bdlpr2',
    username: 'root',
    password: 'hiszmOIWdMz92jbbu9MZYWNrVZwF3aaC',
    dialect: 'postgres'
});

export default conexao;
