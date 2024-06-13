import { ActionT, TryCatchT } from '@/types/middleware.type';
import { NextFunction, Request, Response } from 'express';

export const tryCatchHandler = (action: ActionT): TryCatchT => {
	return async (
		req: Request,
		res: Response,
		next: NextFunction,
	): Promise<void> => {
		try {
			await action(req, res);
		} catch (error) {
			next(error);
		}
	};
};
