import { EmailLetterT } from '@/types/auth.type';
import nodemailer, { Transporter } from 'nodemailer';

const { META_EMAIL, META_PASSWORD } = process.env;
// const { META_EMAIL, MAILTRAP_USER, MAILTRAP_PASS } = process.env;

class SendEmailService {
	private transporter: Transporter;

	constructor() {
		// 	const nodemailerConfig = {
		// 		host: 'sandbox.smtp.mailtrap.io',
		// 		port: 2525,
		// 		auth: {
		// 			user: MAILTRAP_USER,
		// 			pass: MAILTRAP_PASS,
		// 		},
		// 	};

		const nodemailerConfig = {
			host: 'smtp.meta.ua',
			port: 465,
			secure: true,
			auth: {
				user: META_EMAIL,
				pass: META_PASSWORD,
			},
			tls: { rejectUnauthorized: false },
		};

		this.transporter = nodemailer.createTransport(nodemailerConfig);
	}

	public async sendMail(data: EmailLetterT): Promise<boolean> {
		const email = { ...data, from: META_EMAIL };
		await this.transporter.sendMail(email);
		return true;
	}
}

export const sendEmailService = new SendEmailService();
