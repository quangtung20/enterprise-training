import {Request, Response} from 'express'
import { Users } from '../models/user.model';
import { statusCode } from '../utils/status.code';
import * as bcrypt from 'bcryptjs';
export const AuthService = {
    register:async(req:Request,res:Response)=>{
        try {
            const passwordHash = await bcrypt.hash(req.body.password,12);

            const user = await Users.create({
                ...req.body,
                password:passwordHash,
            })
            res.json(user);
        } catch (error) {
            res.status(statusCode.INTERNAL).json('server error');
        }
    },

    login:async(req:Request,res:Response)=>{
        try {
            const user = await Users.findOne({email:req.body.email})

            if(!user){
                res.status(statusCode.BAD_REQUEST).json('Email does not exist');
            }
            if(await bcrypt.compare(user.password,req.body.password)){
                res.status(statusCode.BAD_REQUEST).json('Password does not match');
            }
    
            res.status(statusCode.SUCCESS).json('done');
        } catch (error) {
            res.status(statusCode.INTERNAL).json('server error');
        }
    }

}