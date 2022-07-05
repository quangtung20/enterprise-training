import {Request, Response} from 'express';
import { Blogs } from '../models/blog.model';
import { Categories } from '../models/category.model';
import {statusCode} from '../utils/status.code'

export const blogService = {
    createBlog: async (req:Request,res:Response) => {
        try {
            const blog = await Blogs.create(req.body);
            await Categories.findOneAndUpdate({_id:req.body.category},{
                $push: {comments: blog._id}
            },{new:true})
            res.status(statusCode.SUCCESS).json(blog);
        } catch (error) {
            res.status(statusCode.INTERNAL).json(error.message);
        }
    },

    getBlogs: async (req:Request,res:Response) => {
        try {
            const blogs = await Blogs.find()
                .populate('category user');
            res.status(statusCode.SUCCESS).json(blogs);
        } catch (error) {
            res.status(statusCode.INTERNAL).json(error.message);
        }
    },

    update:async (req:Request,res:Response) => {
        try {
            const blog = await Blogs.findOneAndUpdate({_id:req.params.id},{...req.body},{new:true})
                .populate('category user');
            res.status(statusCode.SUCCESS).json(blog);
        } catch (error) {
            res.status(statusCode.INTERNAL).json(error.message);
        }
    },

    delete:async (req:Request,res:Response) => {
        try {
            const blog = await Blogs.findOneAndDelete({_id:req.params.id})
                .populate('category user');
            res.status(statusCode.SUCCESS).json(blog);
        } catch (error) {
            res.status(statusCode.INTERNAL).json(error.message);
        }
    },

    getById:async (req:Request,res:Response) => {
        try {
            console.log(req.params.id);
            const blog = await Blogs.findOne({_id:req.params.id})
                .populate('category user');
            res.status(statusCode.SUCCESS).json(blog);
        } catch (error) {
            res.status(statusCode.INTERNAL).json(error.message);
        }
    },
}

