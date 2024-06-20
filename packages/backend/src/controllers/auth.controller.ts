import { Response, Request } from 'express';

import AuthService from '@/services/auth.service';
import UserService from '@/services/user.service';

import { UserCreateDataT } from '@/types/users.type';
import CreateEmailService from '@/services/create.mail.service';
import { sendEmailService } from '@/services/send.mail.service';
import HttpError from '@/helpers/HttpError';
import { User } from '@prisma/client';

export class AuthController {
	constructor(
		private authService: AuthService,
		private userService: UserService,
	) {}

	async registerUser(req: Request, res: Response): Promise<void> {
		const data: UserCreateDataT = req.body;
		const normalizedEmail = data.email.toLowerCase();

		const user = await this.userService.findByEmail(normalizedEmail);

		if (user) {
			throw HttpError(
				404,
				'Email already in use. Please try another or reset your password if this is your account.',
			);
		}

		const verificationToken = crypto.randomUUID();

		const hashedPassword = await this.authService.hashPassword(
			data.password,
		);

		const newUser = await this.authService.createUser({
			...data,
			email: normalizedEmail,
			verificationToken,
			password: hashedPassword,
		});

		const letter = CreateEmailService.makeVerificationEmail(
			normalizedEmail,
			verificationToken,
		);

		await sendEmailService.sendMail(letter);

		res.send({
			id: newUser.id,
			name: newUser.name,
			email: newUser.email,
			verify: newUser.verify,
		});
	}

	async verificateUser(req: Request, res: Response): Promise<void> {
		const verificationToken = req.params.verificationToken;

		const user =
			await this.userService.findByVerificationToken(verificationToken);

		if (!user) {
			throw HttpError(404, 'User not found');
		}

		const newUser = await this.userService.updateUser(user.id, {
			verify: true,
			verificationToken: '',
		});

		res.send({
			id: newUser.id,
			name: newUser.name,
			email: newUser.email,
			verify: newUser.verify,
		});
	}

	async loginUser(req: Request, res: Response): Promise<void> {
		if (!req.user) {
			throw HttpError(404, 'User not found');
		}

		const user: User = req.user as User;

		if (!user.id) {
			throw HttpError(404, 'User not found');
		}

		const id = user.id;

		const loggedInUser = await this.authService.loginUser(id);

		res.send({
			token: loggedInUser.token,
			user: {
				email: loggedInUser.email,
				name: loggedInUser.name,
			},
		});
	}

	async sendRecoveryEmail(req: Request, res: Response): Promise<void> {
		const { email } = req.body;

		const normalizedEmail = email.toLowerCase();

		const user = await this.userService.findByEmail(normalizedEmail);

		if (!user) {
			throw HttpError(404, 'Ther is no user with this email address');
		}

		const passwordRecoveryToken = crypto.randomUUID();

		await this.authService.updateUser(user.id, passwordRecoveryToken);

		const letter = CreateEmailService.makeRecoveryEmail(
			normalizedEmail,
			passwordRecoveryToken,
		);

		await sendEmailService.sendMail(letter);

		res.send({
			message:
				'Password reset instructions have been sent to your email. Please check your inbox.',
		});
	}

	async recoverPassword(req: Request, res: Response): Promise<void> {
		const { passwordRecoveryToken } = req.params;
		const { password } = req.body;

		const user = await this.userService.findByRecoveryToken(
			passwordRecoveryToken,
		);

		if (!user) {
			throw HttpError(404, 'User not found');
		}

		const hashedPassword = await this.authService.hashPassword(password);

		const newUser = await this.userService.updateUser(user.id, {
			password: hashedPassword,
			passwordRecoveryToken: '',
		});

		res.status(200).send({
			id: newUser.id,
			name: newUser.name,
			email: newUser.email,
			verify: newUser.verify,
		});
	}

	async logoutUser(req: Request, res: Response): Promise<void> {
		if (!req.user) {
			throw HttpError(404, 'User not found');
		}

		const user: User = req.user as User;

		if (!user) {
			throw HttpError(404, 'User not found');
		}

		await this.authService.logoutUser(user.id);

		res.status(204).end();
	}
}

const authController = new AuthController(new AuthService(), new UserService());
export default authController;
