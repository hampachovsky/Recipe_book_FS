import axios from 'axios';
import { Request, Response } from 'express';
import { API_URL } from '../config/config';

class FilterController {
  async getFilterBy(req: Request, res: Response) {
    try {
      const { type } = req.query;
      let url = '';
      switch (type) {
        case 'category':
          url = `${API_URL}/list.php?c=list`;
          break;
        case 'area':
          url = `${API_URL}/list.php?a=list`;
          break;
        case 'ingredient':
          url = `${API_URL}/list.php?i=list`;
          break;
        default:
          res.status(400).json({
            error: 'Invalid type. Use category, area, or ingredient.',
          });
      }

      const response = await axios.get(url);
      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching recipe', error });
    }
  }
}

export default new FilterController();
