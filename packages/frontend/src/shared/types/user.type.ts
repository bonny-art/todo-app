export type registerUserT = {
	name: string;
	email: string;
	password: string;
};

export type loginUserT = {
	email: string;
	name: string;
};

export type emailUserT = {
	email: string;
};

export type responseUserT = {
	token: string;
	user: loginUserT;
};

export type messageT = {
	message: string;
};

export type changeNameT = {
	name: string;
};

export type changePasswordT = {
	oldPassword: string;
	newPassword: string;
};
