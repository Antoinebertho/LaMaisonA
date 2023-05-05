import {Router} from "express";
import { createOrder, deleteOrder, getOrder, getOrders, updateOrder } from "../controllers/orderController";

export const orderRouter = Router();

orderRouter.get("/", getOrders);
orderRouter.get("/:id/", getOrder);
orderRouter.post("/create", createOrder);
orderRouter.put("/:id/update", updateOrder);
orderRouter.delete("/:id/delete", deleteOrder);