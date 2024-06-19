import { STORAGE_KEYS } from '~shared/keys';
import { HttpSerivce } from './http.service';
import {
	changeNameT,
	changePasswordT,
	emailUserT,
	loginUserT,
	messageT,
	registerUserT,
	responseUserT,
} from '~shared/types/user.type';
import { userEndpoints } from '~shared/constants/server.constants';

class UserService extends HttpSerivce {
	constructor() {
		super();
	}

	async registerUser(userInfo: registerUserT): Promise<messageT> {
		const response = await this.post<messageT>({
			url: userEndpoints.REGISTER,
			data: userInfo,
		});

		return response.data;
	}

	async verificateUser(token: string): Promise<messageT> {
		const response = await this.patch<messageT>({
			url: userEndpoints.VERIFICATE(token),
		});

		return response.data;
	}

	async loginUser(userInfo: loginUserT): Promise<responseUserT> {
		const response = await this.patch<responseUserT>({
			url: userEndpoints.LOGIN,
			data: userInfo,
		});

		localStorage.setItem(STORAGE_KEYS.TOKEN, response.data.token);

		return response.data;
	}

	async sendRecoveryEmail(userInfo: emailUserT): Promise<messageT> {
		const response = await this.patch<messageT>({
			url: userEndpoints.SEND_RECOVER,
			data: userInfo,
		});

		return response.data;
	}

	async recoverPassword(token: string): Promise<messageT> {
		const response = await this.patch<messageT>({
			url: userEndpoints.RECOVER(token),
		});

		return response.data;
	}

	async changePassword(userInfo: changePasswordT): Promise<messageT> {
		const response = await this.patch<messageT>({
			url: userEndpoints.CHANGE_PASSWORD,
			data: userInfo,
		});

		return response.data;
	}

	async changeName(userInfo: changeNameT): Promise<messageT> {
		const response = await this.patch<messageT>({
			url: userEndpoints.CHANGE_NAME,
			data: userInfo,
		});

		return response.data;
	}

	async logoutUser(): Promise<void> {
		await this.patch({
			url: userEndpoints.LOGOUT,
		});

		localStorage.removeItem(STORAGE_KEYS.TOKEN);

		return;
	}
}

export const userService = new UserService();
