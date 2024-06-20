import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTER_KEYS } from '~shared/keys';

const ForgetPasswordPage = (): JSX.Element => {
	return (
		<>
			<Link to={ROUTER_KEYS.REGISTER}>Register</Link>
			<Link to={ROUTER_KEYS.LOGIN}>Login</Link>
		</>
	);
};

export default ForgetPasswordPage;
