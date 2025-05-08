import { Router } from 'express';
import RecipeController from '../controllers/recipeController';

const recipeRouter = Router();

recipeRouter.get('/recipesBy', RecipeController.getRecipeBy);
recipeRouter.get('/recipe/:id', RecipeController.getRecipeById);

export default recipeRouter;
