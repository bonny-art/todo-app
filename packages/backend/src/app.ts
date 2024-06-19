import express, { Express, NextFunction, Request, Response } from 'express';
import 'dotenv/config';
import bodyParser from 'body-parser';
import cors from 'cors';

import AppRouter from './routes';
import { IHttpError } from './types/messages.type';

const port = 3030;
const app: Express = express();
const router = new AppRouter(app);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router.init();

app.use((_, res) => {
	res.status(404).json({ message: 'Route not found' });
});

app.use(
	(
		err: IHttpError,
		req: Request,
		res: Response,
		_next: NextFunction,
	): void => {
		const { status = 500, message = 'Server error' } = err;
		res.status(status).json({ message });
	},
);

app.listen(port, () => {
	console.log(`Now listening on port ${port}`);
});
