import {
	emailVerification,
	passwordRecovery,
} from '@/email.templates/email.templates';
import { EmailLetterT } from '@/types/auth.type';

const { FRONTEND_URL } = process.env;

export default class CreateEmailService {
	private static makeVerificationEmailHtml(path: string): string {
		return emailVerification(path);
	}

	private static makeRecoveryEmailHtml(path: string): string {
		return passwordRecovery(path);
	}

	public static makeVerificationEmail(
		email: string,
		token: string,
	): EmailLetterT {
		const path = `${FRONTEND_URL}/verification/${token}`;
		const content = this.makeVerificationEmailHtml(path);

		return {
			to: email,
			subject: 'Confirm the registration on Todo app',
			html: content,
		};
	}

	public static makePasswordRecoveryLetter(
		email: string,
		token: string,
	): EmailLetterT {
		const path = `${FRONTEND_URL}/recovery/${token}`;
		const content = this.makeRecoveryEmailHtml(path);

		return {
			to: email,
			subject: 'Password Recovery for Todo app',
			html: content,
		};
	}
}
