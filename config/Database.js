import { Sequelize } from "sequelize";

const db = new Sequelize("pplai", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
