export const API_CONFIG = {
	BASE_URL: 'http://localhost:3030',
	TODOS_ENDPOINT: '/todos',
	USERS_ENDPOINT: '/user',
};

enum ApiResources {
	TODOS = 'todos',
	USER = 'user',
}

export const userEndpoints = {
	REGISTER: `${ApiResources.USER}/register`,
	VERIFICATE: (token: string) => `${ApiResources.USER}/verify/${token}`,
	LOGIN: `${ApiResources.USER}/login`,
	SEND_RECOVER: `${ApiResources.USER}/recover`,
	RECOVER: (token: string) => `${ApiResources.USER}/recover/${token}`,

	CHANGE_NAME: `${ApiResources.USER}/change-name`,
	CHANGE_PASSWORD: `${ApiResources.USER}/change-password`,
	LOGOUT: `${ApiResources.USER}/logout`,

	UPDATE_USER: `${ApiResources.USER}/update`,
} as const;

export const todosEndpoints = {
	GET_ALL: `${ApiResources.TODOS}/all`,
	GET_ONE: (id: number) => `${ApiResources.TODOS}/${id}`,
	ADD: `${ApiResources.TODOS}/new`,
	UPDATE: (id: number) => `${ApiResources.TODOS}/${id}`,
	DELETE: (id: number) => `${ApiResources.TODOS}/${id}`,
} as const;
