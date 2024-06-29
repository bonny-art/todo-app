import React from 'react';

import { ROUTER_KEYS } from '~shared/keys';

import { container } from './home.styled';
import { AnchorButton } from '@blueprintjs/core';

const Home = (): JSX.Element => {
	return (
		<div className={container}>
			<AnchorButton href={ROUTER_KEYS.REGISTER}>Register</AnchorButton>
			<AnchorButton href={ROUTER_KEYS.LOGIN}>Login</AnchorButton>
			<AnchorButton href={ROUTER_KEYS.FORGET_PASSWORD}>
				Recower Password
			</AnchorButton>
		</div>
	);
};

export default Home;
