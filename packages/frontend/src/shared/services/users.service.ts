import { HttpSerivce } from './http.service';
import {
	NameUserT,
	UserT,
	changePasswordT,
	emailUserT,
	loginUserT,
	messageT,
	recoverPasswordT,
	registerUserT,
	userWithTokenT,
} from '~shared/types/user.type';
import { userEndpoints } from '~shared/constants/server.constants';

class UserService extends HttpSerivce {
	constructor() {
		super();
	}

	async registerUser(userInfo: registerUserT): Promise<UserT> {
		const response = await this.post<UserT>({
			url: userEndpoints.REGISTER,
			data: userInfo,
		});

		return response.data;
	}

	async verificateUser(token: string): Promise<UserT> {
		const response = await this.patch<UserT>({
			url: userEndpoints.VERIFICATE(token),
		});

		return response.data;
	}

	async loginUser(userInfo: loginUserT): Promise<userWithTokenT> {
		const response = await this.patch<userWithTokenT>({
			url: userEndpoints.LOGIN,
			data: userInfo,
		});

		return response.data;
	}

	async authByToken(): Promise<UserT> {
		const response = await this.get<UserT>({
			url: userEndpoints.USER,
		});

		return response.data;
	}

	async sendRecoveryEmail(userInfo: emailUserT): Promise<messageT> {
		const response = await this.patch<messageT>({
			url: userEndpoints.SEND_RECOVER,
			data: userInfo,
		});

		return response.data;
	}

	async recoverPassword(userInfo: recoverPasswordT): Promise<UserT> {
		const { token, password } = userInfo;

		const response = await this.patch<UserT>({
			url: userEndpoints.RECOVER(token),
			data: { password },
		});

		return response.data;
	}

	async changePassword(userInfo: changePasswordT): Promise<UserT> {
		const response = await this.patch<UserT>({
			url: userEndpoints.CHANGE_PASSWORD,
			data: userInfo,
		});

		return response.data;
	}

	async changeName(userInfo: NameUserT): Promise<UserT> {
		const response = await this.patch<UserT>({
			url: userEndpoints.CHANGE_NAME,
			data: userInfo,
		});

		return response.data;
	}

	async logoutUser(): Promise<void> {
		await this.patch({
			url: userEndpoints.LOGOUT,
		});

		return;
	}
}

export const userService = new UserService();
