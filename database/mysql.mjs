import { Sequelize } from "sequelize";

const conexao = new Sequelize({
    // "host": "dpg-cte1042lqhvc73db7upg-a",
    "host": "dpg-cte1042lqhvc73db7upg-a.oregon-postgres.render.com",
    "port": "5432",
    database: 'bdlpr2',
    username: 'root',
    password: 'hiszmOIWdMz92jbbu9MZYWNrVZwF3aaC',
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
});

export default conexao;
