import React, { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { ROUTER_KEYS } from '~shared/keys';
import { useUserStore } from '~store/user.store';

export function PublicRoute(): JSX.Element {
	const userStore = useUserStore();

	return (
		<>
			{userStore.user && userStore.user.verify ? (
				<Navigate to={ROUTER_KEYS.DASHBOARD} />
			) : (
				<Suspense>
					<Outlet />
				</Suspense>
			)}
		</>
	);
}
