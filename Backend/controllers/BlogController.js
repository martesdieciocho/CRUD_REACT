import BlogModel from "../models/BlogModel.js";

//Creando métodos CRUD

/* Mostrar todos los registros */
export const getAllBlogs = async (req, res) =>{
    try {
        //Método para mostrar todos los registris de la DB
        const getBlogs = await BlogModel.findAll()
        res.json(getBlogs)
        
    } catch (error) {
            res.json({message: error.message})
    }
}


/* Mostrar un registro según su id */
export const getOneBlog = async (req, res) =>{
    try {
        //Método para mostrar un registro según su id
        const getBlog = await BlogModel.findAll({
            where: {
                id: req.params.id
            }
        })
        res.json(getBlog)
        
    } catch (error) {
            res.json({message: error.message})
    }
}


/* Crear un registro */
export const createBlog = async (req, res) =>{
    try {
        //Método para crear un registro
        await BlogModel.create(req.body)
        res.json({"message":"Se creó correctamente el blog"})
        
    } catch (error) {
            res.json({message: error.message})
    }
}

/* Actualizar un registro según su id */
export const updateOneBlog = async (req, res) =>{
    try {
        //Método para mostrar un registro según su id
        await BlogModel.update(req.body,{
            where: {
                id: req.params.id
            }
        })
        res.json({"message":"Se actualizó correctamente el blog"})
        
    } catch (error) {
            res.json({message: error.message})
    }
}

/* Eliminar un registro según su id */
export const deleteOneBlog = async (req, res) =>{
    try {
        //Método para mostrar un registro según su id
        await BlogModel.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json({"message":"Se eliminó correctamente el blog"})
        
    } catch (error) {
            res.json({message: error.message})
    }
}