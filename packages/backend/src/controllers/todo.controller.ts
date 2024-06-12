import { Response, Request } from 'express';
import TodoService from '@/services/todo.service';
import { TodoCreateDataT, TodoUpdateDataT } from '@/types/todos.type';

export class TodoController {
	constructor(private todoService: TodoService) {}

	async getAllTodo(_: Request, res: Response): Promise<void> {
		const todos = await this.todoService.findAll();
		res.send(todos);
	}

	async getTodo(req: Request, res: Response): Promise<void> {
		const id: number = parseInt(req.params.id);
		const todo = await this.todoService.findById(id);
		res.send(todo);
	}

	async createTodo(req: Request, res: Response): Promise<void> {
		const data: TodoCreateDataT = req.body;
		const todo = await this.todoService.createTodo(data);
		res.send(todo);
	}

	async updateTodo(req: Request, res: Response): Promise<void> {
		const id: number = parseInt(req.params.id);
		const data: TodoUpdateDataT = req.body;
		const todo = await this.todoService.updateTodo(id, data);
		res.send(todo);
	}

	async deleteTodo(req: Request, res: Response): Promise<void> {
		const id: number = parseInt(req.params.id);
		const todo = await this.todoService.deleteTodo(id);
		res.send(todo);
	}
}

const todoController = new TodoController(new TodoService());
export default todoController;
