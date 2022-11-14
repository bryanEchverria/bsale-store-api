import  {Router} from "express";
import {getAllCategories } from "../controllers/category.controller.js";

const routerCategory = Router();

routerCategory.get('/getall', getAllCategories)

export default routerCategory;