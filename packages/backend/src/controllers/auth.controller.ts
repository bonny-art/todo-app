import { Response, Request } from 'express';

import AuthService from '@/services/auth.service';
import UserService from '@/services/user.service';

import { UserCreateDataT } from '@/types/users.type';
import CreateEmailService from '@/services/create.mail.service';
import { sendEmailService } from '@/services/send.mail.service';

export class AuthController {
	constructor(
		private authService: AuthService,
		private userService: UserService,
	) {}

	async createUser(req: Request, res: Response): Promise<void> {
		const data: UserCreateDataT = req.body;
		const normalizedEmail = data.email.toLowerCase();

		const user = await this.userService.findByEmail(normalizedEmail);

		if (user) {
			res.status(409).send({
				error: 'Email already in use. Please try another or reset your password if this is your account.',
			});
		}

		const verificationToken = crypto.randomUUID();

		await this.authService.createUser({
			...data,
			email: normalizedEmail,
			verificationToken,
		});

		const letter = CreateEmailService.makeVerificationEmail(
			normalizedEmail,
			verificationToken,
		);

		await sendEmailService.sendMail(letter);

		res.send({
			message: 'Verification email sent.',
		});
	}

	async verificateUser(req: Request, res: Response): Promise<void> {
		const verificationToken = req.params.verificationToken;
		console.log('🚀 ~ verificationToken:', verificationToken);

		const user =
			await this.userService.findByVerificationToken(verificationToken);

		if (!user) {
			res.status(404).send({
				error: 'User not found',
			});

			return;
		}

		await this.userService.updateUser(user.id, {
			verify: true,
			verificationToken: '',
		});

		res.send({ message: 'Verification successful' });
	}

	// async getAllTodo(_: Request, res: Response): Promise<void> {
	// 	const todos = await this.todoService.findAll();
	// 	res.send(todos);
	// }

	// async getTodo(req: Request, res: Response): Promise<void> {
	// 	const id: number = parseInt(req.params.id);
	// 	const todo = await this.todoService.findById(id);
	// 	res.send(todo);
	// }

	// async updateTodo(req: Request, res: Response): Promise<void> {
	// 	const id: number = parseInt(req.params.id);
	// 	const data: TodoUpdateDataT = req.body;
	// 	const todo = await this.todoService.updateTodo(id, data);
	// 	res.send(todo);
	// }

	// async deleteTodo(req: Request, res: Response): Promise<void> {
	// 	const id: number = parseInt(req.params.id);
	// 	const todo = await this.todoService.deleteTodo(id);
	// 	res.send(todo);
	// }
}

const authController = new AuthController(new AuthService(), new UserService());
export default authController;
