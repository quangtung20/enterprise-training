import { Users } from "../models/user.model";
import { statusCode } from "../utils/status.code";
import {Request, Response} from 'express';

export const userService = {
    getAllUser : async(req:Request, res:Response)=>{
        try {
            const users = await Users.find();
            res.status(statusCode.SUCCESS).json(users);
        } catch (error) {
            res.status(statusCode.INTERNAL).json('server error');
        }
    },

    getUserById : async(req:Request, res:Response)=>{
        try {
            const user = await Users.findOne({_id: req.params.id});
            res.status(statusCode.SUCCESS).json(user);
        } catch (error) {
            res.status(statusCode.INTERNAL).json('server error');
        }
    },

    updateUser : async(req:Request, res:Response)=>{
        try {
            const user = await Users.findOneAndUpdate({_id: req.params.id},{...req.body},{new:true});
            res.status(statusCode.SUCCESS).json(user);
        } catch (error) {
            res.status(statusCode.INTERNAL).json('server error');
        }
    },

    deleteUser : async(req:Request, res:Response)=>{
        try {
           const user = await Users.findOneAndDelete(req.params.id);
           res.status(statusCode.SUCCESS).json(user);
        } catch (error) {
            res.status(statusCode.INTERNAL).json('server error');
        }
    }
}