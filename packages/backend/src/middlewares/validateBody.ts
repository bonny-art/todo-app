import { Response, Request, NextFunction, RequestHandler } from 'express';
import { Schema } from 'joi';

const validateBody = (schema: Schema): RequestHandler => {
	const func: RequestHandler = (
		req: Request,
		res: Response,
		next: NextFunction,
	): void => {
		const { error } = schema.validate(req.body);
		if (error) {
			const errorMessage = error.details
				.map((detail) => detail.message)
				.join(', ');

			res.status(400).json({ error: errorMessage });
		} else {
			next();
		}
	};

	return func;
};

export default validateBody;
