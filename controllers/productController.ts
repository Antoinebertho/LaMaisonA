const Product = require("../models/productModel")
const express = require("express");
const productRouter = express.Router();

// Create product
const createProduct = async(req,res)=>{
    try {
        const newProduct= await Product.create(req.body)
        res.send(newProduct)
    } catch (error) {
        console.error(error)
    }
}

// Get all products
const getAll = async(req,res)=>{
    try {
        const products = await Product.find()
        res.send(products)
    } catch (error) {
        console.error(error)
    }
}

// Get product
const getProduct = async(req,res)=>{
    try {
        const product = await Product.findById(req.params.id)
        res.send(product)
    } catch (error) {
        console.error(error)
    }
}

// Edit product
const editProduct = async(req,res)=>{
    try {
        const product = await Product.findByIdAndUpdate(req.params.id,req.body)
        res.send(product)
    } catch (error) {
        console.error(error)
    }
}

// Delete product
const deleteProduct = async(req,res)=>{
    try {
        const product = await Product.findByIdAndDelete(req.params.id)
        res.send(product)
    } catch (error) {
        console.error(error)
    }
}

module.exports = {createProduct, getAll, getProduct, editProduct, deleteProduct}