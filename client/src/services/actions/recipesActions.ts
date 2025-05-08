'use server';

import { recipeAPI } from '@/services';
import { Recipe } from '@/types/types';

export const fetchRecipes = async () => {
  try {
    const recipes = await recipeAPI.getAll();
    return { recipes: recipes, error: null, success: true };
  } catch (error: unknown) {
    console.error('Error fetching recipes:', error);
    return { error: 'Something went wrong', success: null };
  }
};

export const fetchRecipe = async (id: Recipe['idMeal']) => {
  try {
    const recipe = await recipeAPI.getById(id);
    if (!recipe) return { error: 'Recipe not found', success: null };
    if (recipe) return { success: recipe, error: null };
  } catch (error: unknown) {
    console.error('Error fetching recipes:', error);
    return { error: 'Something went wrong', success: null };
  }
};
