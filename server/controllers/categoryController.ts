import {Request, Response} from "express";
import  Category  from "../models/categoryModel";

export const getCategories = async (req: Request, res: Response) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const getCategory = async (req: Request, res: Response) => {
    try {
        const category = await Category.findById(req.params.id);
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const createCategory = async (req: Request, res: Response) => {
    try {
        const category = await Category.create(req.body);
        res.status(201).json(category);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const updateCategory = async (req: Request, res: Response) => {
    try {
        const category = await Category.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const deleteCategory = async (req: Request, res: Response) => {
    try {
        const category = await Category.findByIdAndDelete(req.params.id);
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json(error);
    }
}