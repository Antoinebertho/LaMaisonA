import { Router } from 'express';
import { createCategory, deleteCategory, getCategories, getCategory, updateCategory } from '../controllers/categoryController';

export const categoryRouter: Router = Router();

categoryRouter.get("/", getCategories);
categoryRouter.get("/:id", getCategory);
categoryRouter.post("/", createCategory);
categoryRouter.put("/:id", updateCategory);
categoryRouter.delete("/:id", deleteCategory);

export default categoryRouter