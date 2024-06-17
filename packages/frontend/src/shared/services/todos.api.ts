import axios from 'axios';
import { API_CONFIG } from '~shared/constants/server.constants';
import { TodoT, addTodoT, updateTodoT } from '~shared/types/todo.type';

axios.defaults.baseURL = API_CONFIG.BASE_URL;

export const getAllTodos = async (): Promise<TodoT[]> => {
	const { data } = await axios.get<TodoT[]>(
		`${API_CONFIG.TODOS_ENDPOINT}/all`,
	);

	return data;
};

export const getOneTodo = async (id: number): Promise<TodoT> => {
	const { data } = await axios.get<TodoT>(
		`${API_CONFIG.TODOS_ENDPOINT}/${id}`,
	);

	return data;
};

export const addTodo = async (todo: addTodoT): Promise<TodoT> => {
	const { data } = await axios.post(`${API_CONFIG.TODOS_ENDPOINT}/new`, todo);

	return data;
};

export const updateTodo = async (
	id: number,
	todoInfo: updateTodoT,
): Promise<TodoT> => {
	const { data } = await axios.patch(
		`${API_CONFIG.TODOS_ENDPOINT}/${id}`,
		todoInfo,
	);

	return data;
};

export const deleteTodo = async (id: number): Promise<TodoT> => {
	const { data } = await axios.delete<TodoT>(
		`${API_CONFIG.TODOS_ENDPOINT}/${id}`,
	);

	return data;
};
