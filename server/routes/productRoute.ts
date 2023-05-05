import  {createProduct, getAllProducts, getProduct, editProduct, deleteProduct} from '../controllers/productController'
import { Router } from 'express';
import { auth, isAdmin } from '../middleware/auth';

export const productRouter: Router = Router();

productRouter.get('/products', getAllProducts)
productRouter.get('/products/:id',  getProduct)
productRouter.post('/create', isAdmin, createProduct)
productRouter.put('/products/:id/update', isAdmin, editProduct)
productRouter.delete('/api/product/:id/delete', isAdmin, deleteProduct)