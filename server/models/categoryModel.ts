import mongoose from "mongoose";
import { Schema } from "mongoose";
import { ICategory } from "../interfaces/categoryInterface";

export const categorySchema = new mongoose.Schema<ICategory>({
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
    images: [{
        type: String
 }],
})

const Category = mongoose.model('Category', categorySchema);
 export default Category