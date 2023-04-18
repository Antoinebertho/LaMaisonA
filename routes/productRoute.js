const {createProduct, getAll, getProduct, editProduct, deleteProduct}= require('../controllers/productController')

const productRouter = require('express').Router()

productRouter.post('/products/create',createProduct)
productRouter.get('/products', getAll)
productRouter.get('/products/:id', getProduct)
productRouter.put('/products/:id/update', editProduct)
productRouter.delete('/api/product/:id/delete', deleteProduct)

module.exports = productRouter