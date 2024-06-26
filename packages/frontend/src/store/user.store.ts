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
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getErrorMessage } from '~shared/helpers/error-message-getter';

interface IUserStore {
	user: UserT | null;
	isLoading: boolean;
	token: string;
	isEdited: boolean;

	setIsEditedTrue: () => void;
	setIsEditedFalse: () => void;

	registerUser: (userInfo: registerUserT) => Promise<boolean>;
	verificateUser: (token: string) => Promise<boolean>;
	loginUser: (userInfo: loginUserT) => Promise<void>;
	sendRecoveryEmail: (userInfo: emailUserT) => Promise<boolean>;
	recoverPassword: (userInfo: recoverPasswordT) => Promise<boolean>;
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

			registerUser: async (userInfo: registerUserT): Promise<boolean> => {
				try {
					const user = await userService.registerUser(userInfo);

					set(() => ({
						user,
					}));

					Notify.success(
						'You have been registered successfully. Please verify your email',
					);

					return true;
				} catch (error) {
					set(() => ({
						user: null,
						token: '',
					}));

					Notify.failure(getErrorMessage(error));

					return false;
				}
			},

			verificateUser: async (token: string): Promise<boolean> => {
				try {
					const user = await userService.verificateUser(token);

					set(() => ({
						user,
					}));

					Notify.success(
						'Your account has been verified successfully. You can now login.',
					);

					return true;
				} catch (error) {
					set(() => ({
						user: null,
						token: '',
					}));

					Notify.failure(getErrorMessage(error));

					return false;
				}
			},

			loginUser: async (userInfo: loginUserT): Promise<void> => {
				try {
					const user = await userService.loginUser(userInfo);

					set(() => ({
						user: user.user,
						token: user.token,
					}));

					Notify.success('You have successfully logged in');
				} catch (error) {
					set(() => ({
						user: null,
						token: '',
					}));

					Notify.failure(getErrorMessage(error));
				}
			},

			sendRecoveryEmail: async (
				userInfo: emailUserT,
			): Promise<boolean> => {
				try {
					await userService.sendRecoveryEmail(userInfo);

					Notify.success('Recovery email has been sent');

					return true;
				} catch (error) {
					set(() => ({
						user: null,
						token: '',
					}));

					Notify.failure(getErrorMessage(error));

					return false;
				}
			},

			recoverPassword: async (
				userInfo: recoverPasswordT,
			): Promise<boolean> => {
				try {
					const user = await userService.recoverPassword(userInfo);

					set(() => ({
						user,
					}));

					Notify.success('Password has been changed successfully');

					return true;
				} catch (error) {
					set(() => ({
						user: null,
						token: '',
					}));

					Notify.failure(getErrorMessage(error));

					return false;
				}
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
				try {
					const user = await userService.changePassword(userInfo);

					set(() => ({
						user,
					}));

					Notify.success('Password has been changed successfully');
				} catch (error) {
					Notify.failure(getErrorMessage(error));
				}
			},

			changeName: async (userInfo: NameUserT): Promise<void> => {
				try {
					const user = await userService.changeName(userInfo);

					set(() => ({
						user,
					}));

					Notify.success('Name has been changed successfully');
				} catch (error) {
					Notify.failure(getErrorMessage(error));
				}
			},

			logoutUser: async (): Promise<void> => {
				try {
					await userService.logoutUser();

					set(() => ({
						user: null,
						token: '',
					}));

					Notify.success('You have been logged out');
				} catch (error) {
					set(() => ({
						user: null,
						token: '',
					}));

					Notify.failure(getErrorMessage(error));
				}
			},
		}),
		{
			name: 'token',
			partialize: (state) => ({ token: state.token }),
		},
	),
);
