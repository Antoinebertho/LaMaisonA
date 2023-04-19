import {Request, Response} from "express";
import Order from "../models/orderModel";


export const getOrders = async (req: Request, res: Response) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const getOrder = async (req: Request, res: Response) => {
    try {
        const order = await Order.findById(req.params.id);
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const createOrder = async (req: Request, res: Response) => {
    try {
        const order = await Order.create(req.body);
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const updateOrder = async (req: Request, res: Response) => {
    try {
        const order = await Order.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const deleteOrder = async (req: Request, res: Response) => {
    try {
        const order = await Order.findByIdAndDelete(req.params.id);
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json(error);
    }
}