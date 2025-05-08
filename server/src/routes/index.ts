import { Router } from 'express';
import filterRouter from './filters';
import recipeRouter from './recipes';

const router = Router();

router.use('/recipes', recipeRouter);
router.use('/filters', filterRouter);

export default router;
