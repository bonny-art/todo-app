import React from 'react';
import { Route } from 'react-router-dom';
import { ROUTER_KEYS } from '~shared/keys';

const HomePage = React.lazy(() => import('../modules/user/home-page'));
const RegisterPage = React.lazy(() => import('../modules/user/register-page'));
const EmailVerificationPage = React.lazy(
	() => import('../modules/user/email-verification-page'),
);
const LoginPage = React.lazy(() => import('../modules/user/login-page'));
const ForgetPasswordPage = React.lazy(
	() => import('../modules/user/forget-password-page'),
);
const RecoverPasswordPage = React.lazy(
	() => import('../modules/user/recover-password-page'),
);

const TodosPage = React.lazy(() => import('../modules/todo/todo-page'));
const ProfilePage = React.lazy(() => import('../modules/user/profile-page'));

export const publicRoutes = (): JSX.Element => {
	return (
		<>
			<Route path={ROUTER_KEYS.HOME} element={<HomePage />} />
			,
			<Route path={ROUTER_KEYS.REGISTER} element={<RegisterPage />} />
			,
			<Route
				path={ROUTER_KEYS.VERIFY_EMAIL}
				element={<EmailVerificationPage />}
			/>
			,
			<Route path={ROUTER_KEYS.LOGIN} element={<LoginPage />} />
			,
			<Route
				path={ROUTER_KEYS.FORGET_PASSWORD}
				element={<ForgetPasswordPage />}
			/>
			,
			<Route
				path={ROUTER_KEYS.RECOVER_PASSWORD}
				element={<RecoverPasswordPage />}
			/>
			,
		</>
	);
};

export const privateRoutes = (): JSX.Element => {
	return (
		<>
			<Route path={ROUTER_KEYS.DASHBOARD} element={<TodosPage />} />,
			<Route path={ROUTER_KEYS.PROFILE} element={<ProfilePage />} />
		</>
	);
};
