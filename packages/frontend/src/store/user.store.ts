import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { userService } from '~shared/services/users.service';
import {
	NameUserT,
	UserT,
	changePasswordT,
	emailUserT,
	loginUserT,
	recoverPasswordT,
	registerUserT,
} from '~shared/types/user.type';

interface IUserStore {
	user: UserT | null;
	isLoading: boolean;
	token: string;
	isEdited: boolean;

	setIsEditedTrue: () => void;
	setIsEditedFalse: () => void;

	registerUser: (userInfo: registerUserT) => Promise<void>;
	verificateUser: (token: string) => Promise<void>;
	loginUser: (userInfo: loginUserT) => Promise<void>;
	sendRecoveryEmail: (userInfo: emailUserT) => Promise<void>;
	recoverPassword: (userInfo: recoverPasswordT) => Promise<void>;
	authByToken: () => Promise<void>;
	changePassword: (userInfo: changePasswordT) => void;
	changeName: (userInfo: NameUserT) => void;
	logoutUser: () => void;
}

export const useUserStore = create<IUserStore>()(
	persist(
		(set) => ({
			user: null,
			isLoading: false,
			token: '',
			isEdited: false,

			setIsEditedTrue: (): void => {
				set({
					isEdited: true,
				});
			},

			setIsEditedFalse: (): void => {
				set({
					isEdited: false,
				});
			},

			registerUser: async (userInfo: registerUserT): Promise<void> => {
				const user = await userService.registerUser(userInfo);

				set(() => ({
					user,
				}));
			},

			verificateUser: async (token: string): Promise<void> => {
				const user = await userService.verificateUser(token);

				set(() => ({
					user,
				}));
			},

			loginUser: async (userInfo: loginUserT): Promise<void> => {
				try {
					const user = await userService.loginUser(userInfo);

					set(() => ({
						user: user.user,
						token: user.token,
					}));
				} catch (error) {
					set(() => ({
						user: null,
						token: '',
					}));
					alert('Invalid email or password');
				}
			},

			sendRecoveryEmail: async (userInfo: emailUserT): Promise<void> => {
				await userService.sendRecoveryEmail(userInfo);
			},

			recoverPassword: async (
				userInfo: recoverPasswordT,
			): Promise<void> => {
				const user = await userService.recoverPassword(userInfo);

				set(() => ({
					user,
				}));
			},

			authByToken: async (): Promise<void> => {
				set(() => ({
					isLoading: true,
				}));

				try {
					const user = await userService.authByToken();

					set(() => ({
						user,
						isLoading: false,
					}));
				} catch (error) {
					set(() => ({
						user: null,
						isLoading: false,
					}));
				}
			},

			changePassword: async (
				userInfo: changePasswordT,
			): Promise<void> => {
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
					token: '',
				}));
			},
		}),
		{
			name: 'token',
			partialize: (state) => ({ token: state.token }),
		},
	),
);
