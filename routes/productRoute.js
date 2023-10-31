import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import formidable from 'express-formidable'
import { createProductController, deleteProductController, getProductController, getSingleProductController, productPhotoController, updateProductController, productFiltersController, productCountController, productListController} from "../controllers/productController.js";
const router = express.Router();

router.post('/create-product', requireSignIn, isAdmin, formidable(), createProductController)

router.get('/get-product', getProductController)

router.get("/get-product/:slug", getSingleProductController);

router.get("/product-photo/:pid", productPhotoController);

router.put('/update-product/:pid', requireSignIn, isAdmin, formidable(), updateProductController); 

router.delete("/delete-product/:pid", deleteProductController );

router.post("/product-filters", productFiltersController);

//product count
router.get("/product-count", productCountController);

router.get("/product-list/:page", productListController);

export default router;
 