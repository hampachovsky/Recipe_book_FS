import axios from 'axios';
import { Request, Response } from 'express';
import { API_URL } from '../config/config';

class RecipeController {
  async getRecipeBy(req: Request, res: Response) {
    try {
      const { ingredient, country, category } = req.query;
      let url = `${API_URL}/search.php?s=`;
      if (ingredient) {
        url = `${API_URL}/filter.php?i=${ingredient}`;
      } else if (country) {
        url = `${API_URL}/filter.php?a=${country}`;
      } else if (category) {
        url = `${API_URL}/filter.php?c=${category}`;
      }

      const response = await axios.get(url);
      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching recipe', error });
    }
  }

  async getRecipeById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const response = await axios.get(`${API_URL}/lookup.php?i=${id}`);
      res.json(response.data);
      res.status(200).json('recipe');
    } catch (error) {
      res.status(500).json({ message: 'Error fetching recipe', error });
    }
  }
}

export default new RecipeController();
