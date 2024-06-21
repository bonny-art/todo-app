import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTER_KEYS } from '~shared/keys';
import { headerStyled } from './header.styled';

export function UnauthorizedHeader(): JSX.Element {
	return (
		<header className={headerStyled}>
			<NavLink to={ROUTER_KEYS.HOME}>Home</NavLink>
			<div>
				<NavLink to={ROUTER_KEYS.LOGIN}>Login</NavLink>
				<NavLink to={ROUTER_KEYS.REGISTER}>Register</NavLink>
			</div>
		</header>
	);
}
