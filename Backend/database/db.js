import { Sequelize } from "sequelize";

//Creación de conexión a BD mediante Sequelize
const db = new Sequelize('crud_react', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

export default db