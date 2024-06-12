import { PrismaClient, Todo } from '@prisma/client';

const client = new PrismaClient();

export default class TodoService {
	async findAll(): Promise<Todo[]> {
		const todos = await client.todo.findMany();
		return todos;
	}

	async findById(id: number): Promise<Todo | null> {
		console.log('🚀 ~ id:', id);
		const todo = await client.todo.findUnique({ where: { id: id } });
		return todo;
	}

	async createTodo(data: {
		title: string;
		description: string;
	}): Promise<Todo> {
		const newTodo = await client.todo.create({
			data: {
				title: data.title,
				description: data.description,
				isCompleted: false,
				isPrivate: false,
			},
		});
		return newTodo;
	}

	async updateTodo(
		id: number,
		data: {
			title?: string;
			description?: string;
			isCompleted?: boolean;
			isPrivate?: boolean;
		},
	): Promise<Todo> {
		const updatedTodo = await client.todo.update({
			where: { id },
			data: {
				...data,
			},
		});
		return updatedTodo;
	}

	async deleteTodo(id: number): Promise<Todo> {
		const deletedTodo = await client.todo.delete({
			where: { id },
		});
		return deletedTodo;
	}
}
