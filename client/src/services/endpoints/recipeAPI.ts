import { fetchClient } from '@/services';
import { Recipe, RecipesResponse } from '@/types/types';

export const recipeAPI = {
  async getAll(): Promise<RecipesResponse> {
    const response = await fetchClient.request<RecipesResponse>(
      `/recipes/recipesBy`,
      {
        next: { revalidate: 3600 },
      }
    );
    return response;
  },
  async getById(id: Recipe['idMeal']): Promise<Recipe> {
    const response = await fetchClient.request<Recipe>(
      `/recipes/recipe/${id}`,
      {
        next: { revalidate: 0 },
      }
    );
    return response;
  },
};
