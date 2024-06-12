import { PrismaPromise } from '@prisma/client';

export type PrismaModelT<T> = {
	findUnique: (args: { where: { id: number } }) => PrismaPromise<T | null>;
};
