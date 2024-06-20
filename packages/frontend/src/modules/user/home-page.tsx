import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTER_KEYS } from '~shared/keys';

const HomePage = (): JSX.Element => {
	return (
		<>
			<Link to={ROUTER_KEYS.REGISTER}>Register</Link>
			<Link to={ROUTER_KEYS.LOGIN}>Login</Link>
			<Link to={ROUTER_KEYS.FORGET_PASSWORD}>Recower Password</Link>
		</>
	);
};

export default HomePage;
