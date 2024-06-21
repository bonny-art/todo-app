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

export const updateUserValidationSchema = Yup.object().shape({
	name: Yup.string().required('Name is required'),
	oldPassword: Yup.string().min(6, 'Password must be at least 6 characters'),
	newPassword: Yup.string()
		.min(6, 'Password must be at least 6 characters')
		.when('oldPassword', (oldPassword, schema) => {
			if (typeof oldPassword[0] !== 'undefined') {
				return schema
					.notOneOf(
						[Yup.ref('oldPassword'), null],
						'New password must not match the old one',
					)
					.required('New password is required');
			}
			return schema;
		}),
	repeatPassword: Yup.string()
		.min(6, 'Password must be at least 6 characters')
		.when('newPassword', (newPassword, schema) => {
			if (typeof newPassword[0] !== 'undefined') {
				return schema
					.oneOf(
						[Yup.ref('newPassword')],
						'Repeted password must match new password',
					)
					.required('Repeted password is required');
			}
			return schema;
		}),
});
