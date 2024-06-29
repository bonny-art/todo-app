import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTER_KEYS } from '~shared/keys';

import { container } from './home.styled';
import { Button } from '@blueprintjs/core';

const Home = (): JSX.Element => {
	return (
		<div className={container}>
			<Link to={ROUTER_KEYS.REGISTER}>
				<Button>Register</Button>
			</Link>

			<Link to={ROUTER_KEYS.LOGIN}>
				<Button>Login</Button>
			</Link>

			<Link to={ROUTER_KEYS.FORGET_PASSWORD}>
				<Button>Recower Password</Button>
			</Link>
		</div>
	);
};

export default Home;
