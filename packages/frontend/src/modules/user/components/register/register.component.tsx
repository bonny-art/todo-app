import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTER_KEYS } from '~shared/keys';
import RegisterForm from '../register-form/register-form.component';
import {
	PageContainerStyled,
	linksWrapper,
} from '../../../../shared/styles/page-container.styled';

const Register = (): JSX.Element => {
	return (
		<div className={PageContainerStyled}>
			<RegisterForm />
			<div className={linksWrapper}>
				<Link to={ROUTER_KEYS.LOGIN}>Login</Link>

				<Link to={ROUTER_KEYS.FORGET_PASSWORD}>Recower Password</Link>
			</div>
		</div>
	);
};

export default Register;
