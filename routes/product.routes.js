import { Router } from "express";
import {getAllProducts,getProductByIdCategory,getProductByName} from "./../controllers/product.controller.js"
const productRouter = Router();

productRouter.get('/getall', getAllProducts);
productRouter.get('/getbycategory/:id', getProductByIdCategory)
productRouter.get('/getproductbyname/:name', getProductByName)

export default productRouter; 