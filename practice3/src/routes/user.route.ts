import express from 'express'
import { AuthCtrl } from '../controllers/auth.controller';
import { UserCtrl } from '../controllers/user.controller';

const router = express.Router();

router.get('/',UserCtrl.findAllUsers);
router.get('/:id',UserCtrl.findById);
router.get('/:id',UserCtrl.updateUser);
router.get('/:id',UserCtrl.deleteUser);

export default router;