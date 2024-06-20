import { Button } from '@blueprintjs/core';
import { Form, Formik, FormikHelpers } from 'formik';
import React, { useState } from 'react';
import { InputField } from '~shared/components/input-field/input-field';
import { loginUserFormik } from '~shared/types/user.type';
import { container, input, inputContainer } from './login-form.styled';
import { loginValidationSchema } from '~shared/yup.schemas/user-yup.schemas';

import PasswordEyeButton from '~shared/components/password-eye-button/password-eye-button.component';
import { useUserStore } from '~store/user.store';

const LoginForm = (): JSX.Element => {
	const userStore = useUserStore();

	const [showPassword, setShowPassword] = useState(false);

	const handleTogglePassword = (): void => {
		setShowPassword(!showPassword);
	};

	const initialValues = {
		email: '',
		password: '',
	};

	const handleSubmit = (
		values: loginUserFormik,
		actions: FormikHelpers<loginUserFormik>,
	): void => {
		userStore.loginUser(values);

		actions.setSubmitting(false);
	};

	return (
		<div className={container}>
			<Formik
				initialValues={initialValues}
				validationSchema={loginValidationSchema}
				onSubmit={handleSubmit}
			>
				{({ errors, touched }) => (
					<Form>
						<div className={inputContainer}>
							<InputField
								className={input}
								name="email"
								placeholder="Type your email"
								errors={errors}
								touched={touched}
							/>
						</div>

						<div className={inputContainer}>
							<InputField
								className={input}
								type={showPassword ? 'text' : 'password'}
								name="password"
								placeholder="Type your password"
								errors={errors}
								touched={touched}
							/>
							<PasswordEyeButton
								handleTogglePassword={handleTogglePassword}
								showPassword={showPassword}
							/>
						</div>

						<Button type="submit">Login</Button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default LoginForm;
