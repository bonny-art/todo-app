import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTER_KEYS } from '~shared/keys';

import {
	PageContainerStyled,
	linksWrapper,
} from '../../../../shared/styles/page-container.styled';
import LoginForm from '../login-form/login-form.component';

const Login = (): JSX.Element => {
	return (
		<div className={PageContainerStyled}>
			<LoginForm />
			<div className={linksWrapper}>
				<Link to={ROUTER_KEYS.REGISTER}>Register</Link>
				<Link to={ROUTER_KEYS.FORGET_PASSWORD}>Recower Password</Link>
			</div>
		</div>
	);
};

export default Login;
