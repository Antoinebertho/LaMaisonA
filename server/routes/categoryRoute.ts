import { Router } from 'express';
import { createCategory, deleteCategory, getCategories, getCategory, updateCategory } from '../controllers/categoryController';
import { auth, isAdmin } from '../middleware/auth';

export const categoryRouter: Router = Router();

categoryRouter.get("/", getCategories);
categoryRouter.get("/:id",  getCategory);
categoryRouter.post("/create", isAdmin, createCategory);
categoryRouter.put("/:id/update", isAdmin, updateCategory);
categoryRouter.delete("/:id/delete", isAdmin, deleteCategory);