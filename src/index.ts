import express from 'express';
import cors from 'cors';
import dotevn from 'dotenv';

dotevn.config()

export const app = express();

app.use(express.json());
app.use(cors());