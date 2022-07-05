import {Request, Response} from 'express'
import { blogService } from '../services/blog.service'

export const blogCtrl = {
    createBlog: (req:Request, res:Response) => {
        return blogService.createBlog(req, res);
    },

    getBlogs:(req:Request, res:Response) => {
        return blogService.getBlogs(req, res);
    },

    update:(req:Request, res:Response) => {
        return blogService.update(req, res);
    },

    delete:(req:Request, res:Response) => {
        return blogService.delete(req, res);
    },

    getById:(req:Request, res:Response) => {
        return blogService.getById(req, res);
    },
}