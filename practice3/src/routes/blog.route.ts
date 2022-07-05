import express from 'express'
import { blogCtrl } from '../controllers/blog.controller';

const router = express.Router();

router.post('/',blogCtrl.createBlog)
router.get('/',blogCtrl.getBlogs)
router.put('/:id',blogCtrl.update)
router.delete('/:id',blogCtrl.delete)
router.get('/:id',blogCtrl.getById)

export default router;