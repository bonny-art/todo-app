import React, { useMemo, useState } from 'react';

import { Formik, Form, FormikHelpers } from 'formik';

import { container, input, inputContainer } from './profile-form.styled';
import { Button } from '@blueprintjs/core';

import { useUserStore } from '~store/user.store';
import {
	EditUserProfileFormikT,
	ProfileFormProps,
} from '~shared/types/user.type';
import { InputField } from '~shared/components/input-field/input-field';
import PasswordEyeButton from '~shared/components/password-eye-button/password-eye-button.component';
import { updateUserValidationSchema } from '~shared/yup.schemas/user-yup.schemas';

const ProfileForm = ({ onSaveClick }: ProfileFormProps): JSX.Element => {
	const userStore = useUserStore();

	const [showPassword, setShowPassword] = useState(false);

	const handleTogglePassword = (): void => {
		setShowPassword(!showPassword);
	};

	const initialValues = useMemo(
		() => ({
			name: userStore.user.name,
			oldPassword: '',
			newPassword: '',
			repeatPassword: '',
		}),
		[userStore.user.name],
	);

	const handleSubmit = (
		values: EditUserProfileFormikT,
		actions: FormikHelpers<EditUserProfileFormikT>,
	): void => {
		console.log('🚀 ~ userStore.user.name:', userStore.user.name);
		console.log('🚀 ~ values.name:', values.name);

		if (values.name !== userStore.user.name) {
			console.log('🚀 ~ name changed');

			const userInfo = {
				name: values.name,
			};

			userStore.changeName(userInfo);
		}

		if (values.newPassword) {
			const userInfo = {
				oldPassword: values.oldPassword,
				newPassword: values.newPassword,
			};

			userStore.changePassword(userInfo);
		}

		onSaveClick();

		actions.setSubmitting(false);
	};

	return (
		<div className={container}>
			<h2>Update Your Profile</h2>
			<Formik
				initialValues={initialValues}
				validationSchema={updateUserValidationSchema}
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
								type={showPassword ? 'text' : 'password'}
								name="oldPassword"
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
								name="newPassword"
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

						<Button type="submit">Save</Button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default ProfileForm;
