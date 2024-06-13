import { NextFunction, Request, Response } from 'express';

export type ActionT = (req: Request, res: Response) => Promise<void>;

export type TryCatchT = (
	req: Request,
	res: Response,
	next: NextFunction,
) => Promise<void>;
