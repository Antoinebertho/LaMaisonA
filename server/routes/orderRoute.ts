import {Router} from "express";
import { createOrder, deleteOrder, getOrder, getOrders, updateOrder } from "../controllers/orderController";
import { auth, isAdmin } from "../middleware/auth";

export const orderRouter = Router();

orderRouter.get("/", auth, getOrders);
orderRouter.get("/:id/", auth, getOrder);
orderRouter.post("/create", auth, createOrder);
orderRouter.put("/:id/update",auth, updateOrder);
orderRouter.delete("/:id/delete", isAdmin, deleteOrder);