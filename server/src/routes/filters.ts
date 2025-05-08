import { Router } from 'express';
import FilterController from '../controllers/filterController';

const filterRouter = Router();

filterRouter.get('/', FilterController.getFilterBy);

export default filterRouter;
