import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    image:{
        type:String
    },
    
    category: { type: mongoose.Types.ObjectId, ref: 'categories' },

    user: { type: mongoose.Types.ObjectId, ref: 'users' },

},{
    timestamps: true,
})

export const Blogs = mongoose.model('blogs',blogSchema);