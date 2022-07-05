import express from 'express'
import { categoryCtrl } from '../controllers/category.controller';

const router = express.Router();

router.get('/',categoryCtrl.findAll);
router.get('/:id',categoryCtrl.findById);
router.post('/',categoryCtrl.create);
router.put('/:id',categoryCtrl.update);
router.delete('/:id',categoryCtrl.delete);

export default router;