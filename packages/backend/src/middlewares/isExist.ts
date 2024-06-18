import HttpError from '@/helpers/HttpError';
import { PrismaModelT } from '@/types/prisma.type';
import { Request, Response, NextFunction } from 'express';

export const isExist = <T>(model: PrismaModelT<T>) => {
	return async (
		req: Request,
		res: Response,
		next: NextFunction,
	): Promise<void> => {
		try {
			const id = parseInt(req.params.id);

			if (isNaN(id)) {
				throw HttpError(
					400,
					'Invalid request parameter: ID must be a number',
				);
			}

			const item = await model.findUnique({ where: { id } });

			if (!item) {
				throw HttpError(404, `Item ${id} not found`);
			} else {
				next();
			}
		} catch (error) {
			throw HttpError(500, 'Server Error');
		}
	};
};
