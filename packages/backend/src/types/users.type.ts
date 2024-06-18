// TODO: Put a real types here

export type UserCreateDataT = {
	name: string;
	email: string;
	password: string;
};

export type UserT = {
	id: number;
	name: string;
	email: string;
	password: string;
	token: string;
	verificationToken: string;
	verify: boolean;
	passwordRecoveryToken: string;
};
