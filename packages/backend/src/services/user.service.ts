import { PrismaClient, User } from '@prisma/client';

const client = new PrismaClient();

export default class UserService {
	async findByEmail(email: string): Promise<User | null> {
		const user = await client.user.findUnique({ where: { email } });
		return user;
	}

	async findByVerificationToken(
		verificationToken: string,
	): Promise<User | null> {
		const user = await client.user.findFirst({
			where: { verificationToken },
		});
		return user;
	}

	async updateUser(
		id: number,
		data: {
			verificationToken?: string;
			verify?: boolean;
			passwordRecoveryToken?: string;
			isPasswordVerified?: boolean;
		},
	): Promise<User> {
		const updatedUser = await client.user.update({
			where: { id },
			data: {
				...data,
			},
		});
		return updatedUser;
	}

	// async findAll(): Promise<Todo[]> {
	// 	const todos = await client.todo.findMany({
	// 		orderBy: {
	// 			createdAt: 'asc',
	// 		},
	// 	});
	// 	return todos;
	// }

	// async updateTodo(
	// 	id: number,
	// 	data: {
	// 		title?: string;
	// 		description?: string;
	// 		isCompleted?: boolean;
	// 		isPrivate?: boolean;
	// 	},
	// ): Promise<Todo> {
	// 	const updatedTodo = await client.todo.update({
	// 		where: { id },
	// 		data: {
	// 			...data,
	// 		},
	// 	});
	// 	return updatedTodo;
	// }

	// async deleteTodo(id: number): Promise<Todo> {
	// 	const deletedTodo = await client.todo.delete({
	// 		where: { id },
	// 	});
	// 	return deletedTodo;
	// }
}
