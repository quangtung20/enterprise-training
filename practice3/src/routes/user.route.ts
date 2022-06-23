import express from 'express'
import { auth } from '../controller/auth.controller';

const router = express.Router();

router.get('/', auth.register)

export default router;