import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

import todoController from '../../controllers/todo.controller';
import validateBody from '@/middlewares/validateBody';
import { createTodoSchema, updateTodoSchema } from '@/schemas/todosSchema';
import { isExist } from '@/middlewares/isExist';
import { tryCatchHandler } from '@/middlewares/tryCatch';

const prisma = new PrismaClient();

const todosRouter: Router = Router();

todosRouter.get(
	'/all',
	tryCatchHandler(todoController.getAllTodo.bind(todoController)),
);
todosRouter.get(
	'/:id',
	isExist(prisma.todo),
	tryCatchHandler(todoController.getTodo.bind(todoController)),
);
todosRouter.post(
	'/new',
	validateBody(createTodoSchema),
	tryCatchHandler(todoController.createTodo.bind(todoController)),
);
todosRouter.patch(
	'/:id',
	isExist(prisma.todo),
	validateBody(updateTodoSchema),
	tryCatchHandler(todoController.updateTodo.bind(todoController)),
);
todosRouter.delete(
	'/:id',
	isExist(prisma.todo),
	tryCatchHandler(todoController.deleteTodo.bind(todoController)),
);

export default todosRouter;
