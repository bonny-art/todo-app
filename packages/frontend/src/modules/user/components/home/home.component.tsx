import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTER_KEYS } from '~shared/keys';

import { container } from './home.styled';
import { Button } from '@blueprintjs/core';

const Home = (): JSX.Element => {
	return (
		<div className={container}>
			<Button>
				<Link to={ROUTER_KEYS.REGISTER}>Register</Link>
			</Button>
			<Button>
				<Link to={ROUTER_KEYS.LOGIN}>Login</Link>
			</Button>
			<Button>
				<Link to={ROUTER_KEYS.FORGET_PASSWORD}>Recower Password</Link>
			</Button>
		</div>
	);
};

export default Home;
