import { convertToBoolean } from '@/helpers/convert-to-boolean.util';
import { queryInfoT, whereConditionsT } from '@/types/todos.type';
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

	async getAllTodosForUser(
		userId: number,
		queryInfo: queryInfoT,
	): Promise<Todo[]> {
		const isPrivate = convertToBoolean(queryInfo.isPrivate);
		const isCompleted = convertToBoolean(queryInfo.isCompleted);
		const searchQuery = queryInfo.searchQuery;

		const whereConditions: whereConditionsT = {};

		if (isCompleted) {
			whereConditions.isCompleted = true;
		}

		if (searchQuery) {
			whereConditions.title = {
				contains: searchQuery,
			};
		}
		const todos = [];

		if (isPrivate === false) {
			const publicTodos = await client.todo.findMany({
				where: {
					...whereConditions,
					isPrivate: false,
				},
			});
			todos.push(...publicTodos);
		} else if (isPrivate === true) {
			const privateTodos = await client.todo.findMany({
				where: {
					...whereConditions,
					isPrivate: true,
					userId,
				},
			});
			todos.push(...privateTodos);
		} else {
			const publicTodos = await client.todo.findMany({
				where: {
					...whereConditions,
					isPrivate: false,
				},
			});

			const privateTodos = await client.todo.findMany({
				where: {
					...whereConditions,
					isPrivate: true,
					userId,
				},
			});

			todos.push(...publicTodos, ...privateTodos);
		}

		return todos;

		// const publicTodos = await client.todo.findMany({
		// 	where: {
		// 		...whereConditions,
		// 		isPrivate: false,
		// 	},
		// });

		// const privateTodos = await client.todo.findMany({
		// 	where: {
		// 		...whereConditions,
		// 		isPrivate: true,
		// 		userId,
		// 	},
		// });

		// return [...publicTodos, ...privateTodos];
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
