import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import userRoutes from './routes/userRoutes';
import authRoutes from './routes/authRoutes';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/users',userRoutes);
app.use('/auth',authRoutes);

export default app;