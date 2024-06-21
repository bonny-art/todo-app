import { Response, Request } from 'express';
import TodoService from '@/services/todo.service';
import { TodoCreateDataT, TodoUpdateDataT } from '@/types/todos.type';
import HttpError from '@/helpers/HttpError';
import { User } from '@prisma/client';

export class TodoController {
	constructor(private todoService: TodoService) {}

	async getAllTodo(req: Request, res: Response): Promise<void> {
		const user: User = req.user as User;
		if (!user?.id) {
			throw HttpError(404, 'User not found');
		}
		const id = user.id;

		const queryInfo = req.query;

		const todos = await this.todoService.getAllTodosForUser(id, queryInfo);

		res.send(todos);
	}

	async getTodo(req: Request, res: Response): Promise<void> {
		const id: number = parseInt(req.params.id);

		const user: User = req.user as User;

		if (!user?.id) {
			throw HttpError(404, 'User not found');
		}

		const userId = user.id;

		const todo = await this.todoService.findById(id);

		if (!todo) {
			throw HttpError(404, 'Todo not found');
		}

		if (todo.isPrivate && todo.userId !== userId) {
			throw HttpError(
				403,
				'You do not have permission to view this todo',
			);
		}

		res.send(todo);
	}

	async createTodo(req: Request, res: Response): Promise<void> {
		const user: User = req.user as User;

		if (!user?.id) {
			throw HttpError(404, 'User not found');
		}

		const userId = user.id;

		const data: TodoCreateDataT = {
			...req.body,
			userId,
		};

		const todo = await this.todoService.createTodo(data);
		res.send(todo);
	}

	async updateTodo(req: Request, res: Response): Promise<void> {
		const id: number = parseInt(req.params.id);
		const data: TodoUpdateDataT = req.body;

		const user: User = req.user as User;

		if (!user?.id) {
			throw HttpError(404, 'User not found');
		}

		const userId = user.id;

		const todo = await this.todoService.findById(id);

		if (!todo) {
			throw HttpError(404, 'Todo not found');
		}

		if (todo.isPrivate && todo.userId !== userId) {
			throw HttpError(
				403,
				'You do not have permission to view this todo',
			);
		}

		const updatedTodo = await this.todoService.updateTodo(id, data);

		res.send(updatedTodo);
	}

	async deleteTodo(req: Request, res: Response): Promise<void> {
		const id: number = parseInt(req.params.id);

		const user: User = req.user as User;

		if (!user?.id) {
			throw HttpError(404, 'User not found');
		}

		const userId = user.id;

		const todo = await this.todoService.findById(id);

		if (!todo) {
			throw HttpError(404, 'Todo not found');
		}

		if (todo.isPrivate && todo.userId !== userId) {
			throw HttpError(
				403,
				'You do not have permission to view this todo',
			);
		}

		const deletedTodo = await this.todoService.deleteTodo(id);
		res.send(deletedTodo);
	}
}

const todoController = new TodoController(new TodoService());
export default todoController;
