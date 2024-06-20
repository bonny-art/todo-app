export const enum ROUTER_KEYS {
	ALL_MATCH = '/*',
	HOME = '/',
	REGISTER = '/register',
	VERIFY_EMAIL = '/verify-email/:token',
	LOGIN = '/login',
	FORGET_PASSWORD = '/forget-password',
	RECOVER_PASSWORD = '/recover-password/:token',

	DASHBOARD = '/todos',
	PROFILE = '/profile',
}

export const STORAGE_KEYS = Object.freeze({
	TOKEN: 'TOKEN',
});
