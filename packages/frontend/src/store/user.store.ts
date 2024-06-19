import { create } from 'zustand';
import { userService } from '~shared/services/users.service';
import {
	NameUserT,
	UserT,
	changePasswordT,
	emailUserT,
	loginUserT,
	registerUserT,
} from '~shared/types/user.type';

interface IUserStore {
	user: UserT | null;
	isLoading: boolean;

	registerUser: (userInfo: registerUserT) => Promise<void>;
	verificateUser: (token: string) => Promise<void>;
	loginUser: (userInfo: loginUserT) => Promise<void>;
	authByToken: () => Promise<void>;
	sendRecoveryEmail: (userInfo: emailUserT) => Promise<void>;
	recoverPassword: (token: string) => Promise<void>;
	changePassword: (userInfo: changePasswordT) => void;
	changeName: (userInfo: NameUserT) => void;
	logoutUser: () => void;
}

export const useUserStore = create<IUserStore>((set) => {
	return {
		user: null,
		isLoading: false,

		registerUser: async (userInfo: registerUserT): Promise<void> => {
			const user = await userService.registerUser(userInfo);

			set(() => {
				return {
					user,
				};
			});
		},

		verificateUser: async (token: string): Promise<void> => {
			const user = await userService.verificateUser(token);

			set(() => {
				return {
					user,
				};
			});
		},

		loginUser: async (userInfo: loginUserT): Promise<void> => {
			const user = await userService.loginUser(userInfo);

			set(() => {
				return {
					user: user.user,
				};
			});
		},

		authByToken: async (): Promise<void> => {
			set(() => {
				return {
					isLoading: true,
				};
			});

			try {
				const user = await userService.authByToken();

				set(() => {
					return {
						user: user,
						isLoading: false,
					};
				});
			} catch (err) {
				set(() => {
					return {
						user: null,
						isLoading: false,
					};
				});
			}
		},

		sendRecoveryEmail: async (userInfo: emailUserT): Promise<void> => {
			await userService.sendRecoveryEmail(userInfo);
		},

		recoverPassword: async (token: string): Promise<void> => {
			const user = await userService.recoverPassword(token);

			set(() => ({
				user,
			}));
		},

		changePassword: async (userInfo: changePasswordT): Promise<void> => {
			const user = await userService.changePassword(userInfo);

			set(() => ({
				user,
			}));
		},

		changeName: async (userInfo: NameUserT): Promise<void> => {
			const user = await userService.changeName(userInfo);

			set(() => ({
				user,
			}));
		},

		logoutUser: async (): Promise<void> => {
			await userService.logoutUser();

			set(() => ({
				user: null,
			}));
		},
	};
});
