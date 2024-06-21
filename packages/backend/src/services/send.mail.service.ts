import { EmailLetterT } from '@/types/auth.type';
import nodemailer, { Transporter } from 'nodemailer';

const { META_EMAIL, MAILTRAP_USER, MAILTRAP_PASS } = process.env;

class SendEmailService {
	private transporter: Transporter;

	constructor() {
		const nodemailerConfig = {
			host: 'sandbox.smtp.mailtrap.io',
			port: 2525,
			auth: {
				user: MAILTRAP_USER,
				pass: MAILTRAP_PASS,
			},
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
