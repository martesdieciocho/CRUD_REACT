//Importando la conexión hecha a la BD
import db from '../database/db.js';
//Importando el DataTypes de Sequelize 
import {DataTypes} from 'sequelize';


//Creando modelo para la tabla de la bd
const BlogModel = db.define('blogs', {
    //Se define cada campo de la tabla junto con su tipo de dato
    title: {type: DataTypes.STRING},
    content: {type: DataTypes.STRING},
});

export default BlogModel;