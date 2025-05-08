import cors from 'cors';
import express from 'express';
import { PORT } from './config/config';
import router from './routes';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

export default app;
