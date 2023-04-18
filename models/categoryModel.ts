import mongoose from "mongoose";
import { Schema } from "mongoose";

export const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    richDescription: {
        type: String,
        default: ''
    },
    image: {
        type: String,
        default: ''
    },
    images: [{
        type: String
 }],
})

const Category = mongoose.model('Category', categorySchema);
 export default Category