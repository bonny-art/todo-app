import * as Yup from 'yup';

export const registerValidationSchema = Yup.object().shape({
	name: Yup.string().required('Name is required'),
	email: Yup.string().email('Invalid email').required('Email is required'),
	password: Yup.string()
		.min(6, 'Password must be at least 6 characters')
		.required('Password is required'),
	repeatPassword: Yup.string()
		.oneOf([Yup.ref('password'), null], 'Passwords must match')
		.required('Repeat password is required'),
});

export const loginValidationSchema = Yup.object().shape({
	email: Yup.string().email('Invalid email').required('Email is required'),
	password: Yup.string()
		.min(6, 'Password must be at least 6 characters')
		.required('Password is required'),
});

export const sendEmailValidationSchema = Yup.object().shape({
	email: Yup.string().email('Invalid email').required('Email is required'),
});

export const recoverPasswordValidationSchema = Yup.object().shape({
	password: Yup.string()
		.min(6, 'Password must be at least 6 characters')
		.required('Password is required'),
	repeatPassword: Yup.string()
		.oneOf([Yup.ref('password'), null], 'Passwords must match')
		.required('Repeat password is required'),
});
