import { Router } from "express";
import ProductController from "../controller/ProductController";
const productRoutes = Router();

productRoutes.get('/products', ProductController.getAllProducts());
productRoutes.post('/create-product', ProductController.onCreateProduct());
productRoutes.delete('/delete-product/:id', ProductController.onDeleteProduct())
productRoutes.put('/edit-product/:id',ProductController.onEditProduct() );



export = productRoutes;