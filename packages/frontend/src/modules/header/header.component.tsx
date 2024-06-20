import React from 'react';

import { useUserStore } from '~store/user.store';
import { AuthorizedHeader } from './components/authorized-header.component';
import { UnauthorizedHeader } from './components/unauthorized-header.component';

export function Header(): JSX.Element {
	const userStore = useUserStore();

	return (
		<>
			{userStore.isLoading ? (
				<UnauthorizedHeader />
			) : (
				<>
					{userStore.user &&
					userStore.user.verify &&
					userStore.token ? (
						<AuthorizedHeader />
					) : (
						<UnauthorizedHeader />
					)}
				</>
			)}
		</>
	);
}
