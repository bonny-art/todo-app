import React, { useState } from 'react';
import { Form, Formik, FormikHelpers } from 'formik';
import { Button } from '@blueprintjs/core';
import { InputField } from '~shared/components/input-field/input-field';
import { recoverPasswordValidationSchema } from '~shared/yup.schemas/user-yup.schemas';
import { useUserStore } from '~store/user.store';
import PasswordEyeButton from '~shared/components/password-eye-button/password-eye-button.component';
import { recoverPasswordFormikT } from '~shared/types/user.type';
import {
	container,
	input,
	inputContainer,
} from './recover-password-form.styled';
import { useNavigate, useParams } from 'react-router-dom';
import { ROUTER_KEYS } from '~shared/keys';

const RecoverPasswordForm = (): JSX.Element => {
	const navigate = useNavigate();
	const userStore = useUserStore();
	const { token } = useParams<{ token: string }>();

	const [showPassword, setShowPassword] = useState(false);

	const handleTogglePassword = (): void => {
		setShowPassword(!showPassword);
	};

	const initialValues = {
		password: '',
		repeatPassword: '',
	};

	const handleSubmit = async (
		values: recoverPasswordFormikT,
		actions: FormikHelpers<recoverPasswordFormikT>,
	): Promise<void> => {
		const userInfo = {
			token: token,
			password: values.password,
		};

		const isSuccessful = await userStore.recoverPassword(userInfo);

		if (isSuccessful) {
			navigate(ROUTER_KEYS.LOGIN);
		}

		actions.setSubmitting(false);
	};

	return (
		<div className={container}>
			<Formik
				initialValues={initialValues}
				validationSchema={recoverPasswordValidationSchema}
				onSubmit={handleSubmit}
			>
				{({ errors, touched }) => (
					<Form>
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

						<Button type="submit">Submit new passport</Button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default RecoverPasswordForm;
