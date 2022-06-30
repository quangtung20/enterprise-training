import { statusCode } from "../utils/status.code";
import {Request, Response} from 'express';
import { Categories } from "../models/category.model";

export const categoryService = {
    findAll: async(req: Request, res: Response)=>{
        try {
            const categories = await Categories.find();
            res.status(statusCode.SUCCESS).json(categories);
        } catch (error) {
            res.status(statusCode.INTERNAL).json('server error');
        }
    },

    findById: async(req: Request, res: Response)=>{
        try {
            const category = await Categories.findById(req.param.id)
            res.status(statusCode.SUCCESS).json(category);
        } catch (error) {
            res.status(statusCode.INTERNAL).json('server error');
        }
    },

    createCate:async(req: Request, res: Response)=>{
        try {
            const category = await Categories.create({...req.body});
            res.status(statusCode.SUCCESS).json(category);
        } catch (error) {
            res.status(statusCode.INTERNAL).json('server error');
        }
    },

    update:async(req: Request, res: Response)=>{
        try {
            const category = await Categories.findOneAndUpdate({_id:req.param.id},{...req.body},{new:true})
            res.status(statusCode.SUCCESS).json(category);
        } catch (error) {
            res.status(statusCode.INTERNAL).json('server error');
        }
    },

    delete:async(req: Request, res: Response)=>{
        try {
            const category = await Categories.findOneAndDelete({_id:req.param.id})
        } catch (error) {
            res.status(statusCode.INTERNAL).json('server error');
        }
    },
}