import { PrismaClient, User } from '@prisma/client';
import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';

const client = new PrismaClient();

export default class AuthService {
	async createToken(id: number): Promise<string> {
		const payload = { id };
		const SECRET_KEY = process.env.SECRET_KEY as string;
		const lifeLength = { expiresIn: '30d' };
		const token = jwt.sign(payload, SECRET_KEY, lifeLength);

		return token;
	}

	async createUser(data: {
		name: string;
		email: string;
		password: string;
		verificationToken: string;
	}): Promise<User> {
		const newUser = await client.user.create({
			data: {
				name: data.name,
				email: data.email,
				password: data.password,
				token: '',
				verificationToken: data.verificationToken,
				verify: false,
				passwordRecoveryToken: '',
				isPasswordVerified: false,
			},
		});
		return newUser;
	}

	async hashPassword(password: string): Promise<string> {
		const hashedPassword = await bcryptjs.hash(password, 10);

		return hashedPassword;
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
