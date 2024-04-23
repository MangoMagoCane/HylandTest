import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(express.static('public'));

const userRouter = require('../routes/users');
app.use('/users', userRouter);

app.get('/', (req: Request, res: Response) => {
    res.send('TS + Express');
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});