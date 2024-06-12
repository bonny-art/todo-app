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
				res.status(400).send({
					error: 'Invalid request parameter: ID must be a number',
				});
				return;
			}

			const item = await model.findUnique({ where: { id } });

			if (!item) {
				res.status(404).send({
					error: `Item ${id} not found`,
				});
			} else {
				next();
			}
		} catch (error) {
			res.status(500).send({
				error: 'Server Error',
			});
		}
	};
};
