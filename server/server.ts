import express, {Application, Request, Response} from 'express';
import app from './src/app';

//const app: Application = express();
const PORT = process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`);
});