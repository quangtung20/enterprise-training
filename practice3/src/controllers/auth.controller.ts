import {Request, Response} from 'express'
import { AuthService } from '../services/auth.service';
export const AuthCtrl = {
    register:(req:Request,res:Response)=>{
        return AuthService.register(req,res);
    }
}