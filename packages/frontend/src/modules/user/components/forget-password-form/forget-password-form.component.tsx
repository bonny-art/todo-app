import React from 'react';

import { Form, Formik, FormikHelpers } from 'formik';
import { Button } from '@blueprintjs/core';
import { InputField } from '~shared/components/input-field/input-field';
import { sendEmailValidationSchema } from '~shared/yup.schemas/user-yup.schemas';
import { useUserStore } from '~store/user.store';

import { emailUserT } from '~shared/types/user.type';
import {
	container,
	input,
	inputContainer,
} from './forget-password-form.styled';
import { forgetPasswordFormInitial } from '~shared/constants/user.constatns';

const ForgetPasswordForm = (): JSX.Element => {
	const userStore = useUserStore();

	const handleSubmit = (
		values: emailUserT,
		actions: FormikHelpers<emailUserT>,
	): void => {
		userStore.sendRecoveryEmail(values);

		actions.setSubmitting(false);
	};

	return (
		<div className={container}>
			<Formik
				initialValues={forgetPasswordFormInitial}
				validationSchema={sendEmailValidationSchema}
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

						<Button type="submit">
							Send recovery password email
						</Button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default ForgetPasswordForm;
