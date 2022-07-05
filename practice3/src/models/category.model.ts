import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },

    blogs: [{type: mongoose.Types.ObjectId, ref: 'blogs'}],
})

export const Categories = mongoose.model('categories',categorySchema);