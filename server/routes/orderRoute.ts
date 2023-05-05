import {Router} from "express";
import { createOrder, deleteOrder, getOrder, getOrders, updateOrder } from "../controllers/orderController";

export const orderRouter = Router();

orderRouter.get("/", getOrders);
orderRouter.get("/:id", getOrder);
orderRouter.post("/", createOrder);
orderRouter.put("/:id", updateOrder);
orderRouter.delete("/:id", deleteOrder);