import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTER_KEYS } from '~shared/keys';

import {
	PageContainerStyled,
	linksWrapper,
} from '../../../../shared/styles/page-container.styled';
import RecoverPasswordForm from '../recover-password-form/recover-password-form.component';

const RecoverPassword = (): JSX.Element => {
	return (
		<div className={PageContainerStyled}>
			<RecoverPasswordForm />
			<div className={linksWrapper}>
				<Link to={ROUTER_KEYS.LOGIN}>Login</Link>
				<Link to={ROUTER_KEYS.REGISTER}>Register</Link>
			</div>
		</div>
	);
};

export default RecoverPassword;
