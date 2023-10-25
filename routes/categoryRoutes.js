import express from 'express'
import { createCategoryController, categoryController, deleteCategoryController, updateCategoryController, singleCategoryController } from '../controllers/categoryController.js';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
const router = express.Router();

//routes
//create-category
router.post('/create-category', requireSignIn, isAdmin, createCategoryController);
//get-all-categories
router.get('/get-category', categoryController);
//update-category
router.put('/update-category/:id', requireSignIn, isAdmin, updateCategoryController);
//single-category
router.get('/single-category/:slug', singleCategoryController);
//delete-category
router.delete('/delete-category/:id', requireSignIn, isAdmin, deleteCategoryController);
export default router;