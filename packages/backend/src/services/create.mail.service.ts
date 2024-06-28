import {
	emailVerification,
	passwordRecovery,
} from '@/email-templates/email-templates';
import { EmailLetterT } from '@/types/auth.type';

import { URLS } from '@/constants/url.constants';



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
		const path = `${URLS.FRONTEND_URL}/verify-email/${token}`;
		const content = this.makeVerificationEmailHtml(path);

		return {
			to: email,
			subject: 'Confirm the registration on Todo app',
			html: content,
		};
	}

	public static makeRecoveryEmail(
		email: string,
		token: string,
	): EmailLetterT {
		const path = `${URLS.FRONTEND_URL}/recover-password/${token}`;
		const content = this.makeRecoveryEmailHtml(path);

		return {
			to: email,
			subject: 'Password Recovery for Todo app',
			html: content,
		};
	}
}
