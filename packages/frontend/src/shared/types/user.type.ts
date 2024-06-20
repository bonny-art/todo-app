export type UserT = {
	id: number;
	name: string;
	email: string;
	verify: boolean;
};

export type registerUserT = {
	name: string;
	email: string;
	password: string;
};

export type loginUserT = {
	email: string;
	password: string;
};

export type emailUserT = {
	email: string;
};

export type userWithTokenT = {
	token: string;
	user: UserT;
};

export type messageT = {
	message: string;
};

export type NameUserT = {
	name: string;
};

export type changePasswordT = {
	oldPassword: string;
	newPassword: string;
};

export type registerUserFormikT = {
	name: string;
	email: string;
	password: string;
	repeatPassword: string;
};

export type loginUserFormik = {
	email: string;
	password: string;
};
