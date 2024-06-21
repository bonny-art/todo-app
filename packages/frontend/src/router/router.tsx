import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { useUserStore } from '~store/user.store';
import { PrivateRoute } from './components/private-route.component';
import { PublicRoute } from './components/public-route.component';
import { privateRoutes, publicRoutes } from './routes';
import { Header } from '~modules/header/header.component';

const Router: React.FunctionComponent = () => {
	const userStore = useUserStore();

	useEffect(() => {
		userStore.authByToken();
	}, []);

	return (
		<BrowserRouter>
			<Header />
			{userStore.isLoading ? (
				<></>
			) : (
				<Routes>
					<Route element={<PrivateRoute />}>{privateRoutes()}</Route>
					<Route element={<PublicRoute />}>{publicRoutes()}</Route>
				</Routes>
			)}
		</BrowserRouter>
	);
};

export default Router;
