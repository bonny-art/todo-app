import { PrismaClient, User } from '@prisma/client';
import bcryptjs from 'bcryptjs';

const client = new PrismaClient();

export default class UserService {
	async findById(id: number): Promise<User | null> {
		const user = await client.user.findUnique({ where: { id } });
		return user;
	}

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

	async findByRecoveryToken(
		passwordRecoveryToken: string,
	): Promise<User | null> {
		const user = await client.user.findFirst({
			where: { passwordRecoveryToken },
		});
		return user;
	}

	async findByJwtToken(token: string): Promise<User | null> {
		const user = await client.user.findFirst({
			where: { token },
		});
		return user;
	}

	async updateUser(
		id: number,
		data: {
			name?: string;
			verificationToken?: string;
			verify?: boolean;
			passwordRecoveryToken?: string;
			password?: string;
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

	async isPasswordValid(
		password: string,
		hashedPassword: string,
	): Promise<boolean> {
		const isValid = await bcryptjs.compare(password, hashedPassword);
		return isValid;
	}
}

export const userService = new UserService();
