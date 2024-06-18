import HttpError from '@/helpers/HttpError';
import AuthService from '@/services/auth.service';
import UserService, { userService } from '@/services/user.service';
import { User } from '@prisma/client';
import { Request, Response } from 'express';

export class UserController {
	constructor(
		private authService: AuthService,
		private userService: UserService,
	) {}

	async changePassword(req: Request, res: Response): Promise<void> {
		const oldPassword = req.body.oldPassword;
		const newPassword = req.body.newPassword;

		if (!req.user) {
			throw HttpError(404, 'User not found');
		}

		const user: User = req.user as User;

		const userObj = await this.userService.findById(user.id);

		if (!userObj) {
			throw HttpError(404, 'User not found');
		}

		const { password } = userObj;

		const isPasswordValid = await this.userService.isPasswordValid(
			oldPassword,
			password,
		);

		if (!isPasswordValid) {
			throw HttpError(
				401,
				'Your old password is incorrect. Please try again',
			);
		}

		const hashedPassword = await this.authService.hashPassword(newPassword);

		await userService.updateUser(user.id, {
			password: hashedPassword,
		});

		res.send({ message: 'Password changed successfully' });
	}
}

const userController = new UserController(new AuthService(), new UserService());
export default userController;
