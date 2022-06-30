import {Request, Response} from 'express'
import { AuthService } from '../services/auth.service';
export const UserCtrl = {
    register:(req:Request,res:Response)=>{
        return AuthService.register(req,res);
    },

    login:(req:Request,res:Response)=>{
        return AuthService.login(req,res);
    }
}