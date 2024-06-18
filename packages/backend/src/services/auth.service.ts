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
			},
		});
		return newUser;
	}

	async hashPassword(password: string): Promise<string> {
		const hashedPassword = await bcryptjs.hash(password, 10);

		return hashedPassword;
	}

	async loginUser(user: User): Promise<User> {
		const token = await this.createToken(user.id);

		const loggedInUser = await client.user.update({
			where: { id: user.id },
			data: {
				token,
			},
		});

		return loggedInUser;
	}

	async updateUser(id: number, passwordRecoveryToken: string): Promise<User> {
		const updatedUser = await client.user.update({
			where: { id },
			data: {
				passwordRecoveryToken,
			},
		});

		return updatedUser;
	}

	async logoutUser(id: number): Promise<string> {
		await client.user.update({
			where: { id },
			data: {
				token: '',
			},
		});

		return '';
	}
}
