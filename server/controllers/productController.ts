import Product from "../models/productModel";
import {Request, Response} from "express";

// Create product
export const createProduct = async(req: Request, res: Response)=>{
    try {
        const newProduct= await Product.create(req.body)
        res.send(newProduct)
    } catch (error) {
        console.error(error)
    }
}

// Get all products
export const getAllProducts = async(req: Request, res: Response)=>{
    try {
        const products = await Product.find()
        res.send(products)
    } catch (error) {
        console.error(error)
    }
}

// Get product
export const getProduct = async(req: Request, res: Response)=>{
    try {
        const product = await Product.findById(req.params.id)
        res.send(product)
    } catch (error) {
        console.error(error)
    }
}

// Edit product
export const editProduct = async(req: Request, res: Response)=>{
    try {
        const product = await Product.findByIdAndUpdate(req.params.id,req.body)
        res.send(product)
    } catch (error) {
        console.error(error)
    }
}

// Delete product
export const deleteProduct = async(req: Request, res: Response)=>{
    try {
        const product = await Product.findByIdAndDelete(req.params.id)
        res.send(product)
    } catch (error) {
        console.error(error)
    }
}