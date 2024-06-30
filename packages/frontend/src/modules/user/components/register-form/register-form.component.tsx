import React, { useState } from 'react';
import { Form, Formik, FormikHelpers } from 'formik';
import { Button } from '@blueprintjs/core';
import { InputField } from '~shared/components/input-field/input-field';
import { registerValidationSchema } from '~shared/yup.schemas/user-yup.schemas';
import { useUserStore } from '~store/user.store';
import PasswordEyeButton from '~shared/components/password-eye-button/password-eye-button.component';
import { registerUserFormikT } from '~shared/types/user.type';
import { container, input, inputContainer } from './register-form.styled';

import { ROUTER_KEYS } from '~shared/keys';
import { useNavigate } from 'react-router-dom';

const RegisterForm = (): JSX.Element => {
	const navigate = useNavigate();
	const userStore = useUserStore();

	const [showPassword, setShowPassword] = useState(false);

	const handleTogglePassword = (): void => {
		setShowPassword(!showPassword);
	};

	const initialValues = {
		name: '',
		email: '',
		password: '',
		repeatPassword: '',
	};

	const handleSubmit = async (
		values: registerUserFormikT,
		actions: FormikHelpers<registerUserFormikT>,
	): Promise<void> => {
		const userInfo = {
			name: values.name,
			email: values.email,
			password: values.password,
		};

		const isSuccessful = await userStore.registerUser(userInfo);

		if (isSuccessful) {
			navigate(ROUTER_KEYS.HOME);
		}

		actions.setSubmitting(false);
	};

	return (
		<div className={container}>
			<Formik
				initialValues={initialValues}
				validationSchema={registerValidationSchema}
				onSubmit={handleSubmit}
			>
				{({ errors, touched }) => (
					<Form>
						<div className={inputContainer}>
							<InputField
								className={input}
								name="name"
								placeholder="Type your name"
								errors={errors}
								touched={touched}
							/>
						</div>

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

						<div className={inputContainer}>
							<InputField
								className={input}
								type={showPassword ? 'text' : 'password'}
								name="repeatPassword"
								placeholder="Repeat password"
								errors={errors}
								touched={touched}
							/>
							<PasswordEyeButton
								handleTogglePassword={handleTogglePassword}
								showPassword={showPassword}
							/>
						</div>

						<Button type="submit">Register</Button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default RegisterForm;
