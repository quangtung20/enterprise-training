import {Request, Response} from 'express'
import { Users } from '../models/user.model';
export const AuthService = {
    register:async(req:Request,res:Response)=>{
        const user = await Users.create({...req.body})
        res.json(user);
    }
}