import dotenv from 'dotenv';
import express from 'express';
import { PORT } from './config/config';
import router from './routes';

dotenv.config();

const app = express();

app.use(express.json());

app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

export default app;
