import { PrismaClient, Todo } from '@prisma/client';

const client = new PrismaClient();

export default class TodoService {
	async findAll(): Promise<Todo[]> {
		const todos = await client.todo.findMany({
			orderBy: {
				createdAt: 'asc',
			},
		});
		return todos;
	}

	async findById(id: number): Promise<Todo | null> {
		const todo = await client.todo.findUnique({ where: { id } });
		return todo;
	}

	async createTodo(data: {
		title: string;
		description: string;
		isPrivate: boolean;
		userId: number;
	}): Promise<Todo> {
		const newTodo = await client.todo.create({
			data: {
				title: data.title,
				description: data.description,
				isCompleted: false,
				isPrivate: data.isPrivate,
				userId: data.userId,
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
