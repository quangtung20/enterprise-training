import {Request, Response} from 'express'
import { AuthService } from '../services/auth.service';
import { userService } from '../services/user.service';
export const UserCtrl = {
    findAllUsers: (req: Request, res: Response) =>{
        userService.getAllUser(req, res);
    },

    findById: (req: Request, res:Response) => {
        userService.getUserById(req,res);
    },

    updateUser: (req: Request, res: Response) => {
        userService.updateUser(req, res);
    },

    deleteUser: (req: Request, res: Response) => {
        userService.deleteUser(req, res);
    },

}