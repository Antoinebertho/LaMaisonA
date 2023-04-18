import  {createProduct, getAllProducts, getProduct, editProduct, deleteProduct} from '../controllers/productController'
import { Request, Response, Router } from 'express';
const productRouter: Router = Router();

productRouter.post('/products/create', createProduct)
productRouter.get('/products', getAllProducts)
productRouter.get('/products/:id', getProduct)
productRouter.put('/products/:id/update', editProduct)
productRouter.delete('/api/product/:id/delete', deleteProduct)

module.exports = productRouter