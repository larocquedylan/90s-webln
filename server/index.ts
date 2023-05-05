// install dependcies
import express, { Request, Response } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import dotenv from 'dotenv';
import lightningRoute from './lightningRoute';

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
// app.use(express.static('./public'));
app.use(morgan('tiny'));
app.use(helmet());

const PORT = process.env.PORT || 5050;

app.use('/lightning', lightningRoute);

app.get('/', (req: Request, res: Response) => {
  res.send('hello');
});

app.listen(PORT, () => {
  console.log(` App listening on port ${PORT} `);
});
