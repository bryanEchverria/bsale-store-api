import morgan from "morgan";
import express from "express";
import productRouter from "./routes/product.routes.js";
import routerCategory from "./routes/category.routes.js"
const app = express();
app.use(express.json());

//setting
app.set("port", 4000 );
 
// middlewares
app.use(morgan("dev"));

// routes
app.use("/product", productRouter);  
app.use("/category", routerCategory);

export default app;