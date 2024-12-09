import express from 'express';
import cors from 'cors';
import dotevn from 'dotenv';
import router from './routes/routes';

dotevn.config();

export const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', router);