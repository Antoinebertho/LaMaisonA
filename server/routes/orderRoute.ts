import {router} from "express";
import { createOrder, deleteOrder, getOrder, getOrders, updateOrder } from "../controllers/orderController";

export const orderRouter = router();

orderRouter.get("/", getOrders);
orderRouter.get("/:id", getOrder);
orderRouter.post("/", createOrder);
orderRouter.put("/:id", updateOrder);
orderRouter.delete("/:id", deleteOrder);