import {Request, Response} from 'express';
import { categoryService } from '../services/category.service';

export const categoryCtrl = {
    findAll:(req: Request, res: Response)=>{
        return categoryService.findAll(req, res);
    },

    findById:(req: Request, res: Response)=>{
        return categoryService.findById(req, res);
    },

    create:(req: Request, res: Response)=>{
        return categoryService.createCate(req, res);
    },

    update:(req: Request, res: Response)=>{
        return categoryService.update(req, res);
    },

    delete:(req: Request, res: Response)=>{
        return categoryService.delete(req, res);
    },
}