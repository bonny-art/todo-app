import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTER_KEYS } from '~shared/keys';

import {
	PageContainerStyled,
	linksWrapper,
} from '../../../../shared/styles/page-container.styled';
import ForgetPasswordForm from '../forget-password-form/forget-password-form.component';

const ForgetPassword = (): JSX.Element => {
	return (
		<div className={PageContainerStyled}>
			<ForgetPasswordForm />
			<div className={linksWrapper}>
				<Link to={ROUTER_KEYS.LOGIN}>Login</Link>

				<Link to={ROUTER_KEYS.REGISTER}>Register</Link>
			</div>
		</div>
	);
};

export default ForgetPassword;
