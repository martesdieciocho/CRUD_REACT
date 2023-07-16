import express from 'express';
import cors from 'cors';

/**Importando conexión a la DB */
import db from './database/db.js';

/**Importando el enrutador */
import blogRoutes from './routes/routes.js'

//Creando constante para utilizar express
const app = express();


//CORS
app.use(cors());
app.use(express.json());
app.use('/blogs', blogRoutes);





//Definiendo conexión a la DB
try {
    await db.authenticate()
    console.log('Conexión exitosa a la DB')
} catch (error) {
    console.log(`Error al conectarse: ${error}`);
}

app.listen(8000, () =>{
    console.log('Server Running: http://localhost:8000/');
})
