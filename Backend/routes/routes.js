import express from 'express';
import { createBlog, deleteOneBlog, getAllBlogs, getOneBlog, updateOneBlog } from '../controllers/BlogController.js';

/**Utilizando el enrutador de express */
const router= express.Router();

/**Creando rutas para cada método del CRUD */
router.get('/', getAllBlogs);
router.get('/:id', getOneBlog);
router.post('/create', createBlog);
router.post('/update/:id', updateOneBlog);
router.delete('/delete/:id', deleteOneBlog);

export default router;