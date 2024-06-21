import axios from 'axios';
import { API_CONFIG, todosEndpoints } from '~shared/constants/server.constants';
import { TodoT, addTodoT, updateTodoT } from '~shared/types/todo.type';

axios.defaults.baseURL = API_CONFIG.BASE_URL;

import { HttpSerivce } from './http.service';
import { queryT } from '~store/todo.store';

class TodoService extends HttpSerivce {
	constructor() {
		super();
	}

	async getAllTodos(query: queryT): Promise<TodoT[]> {
		const response = await this.get<TodoT[]>({
			url: todosEndpoints.GET_ALL,
			params: query,
		});

		return response.data;
	}

	async getOneTodo(id: number): Promise<TodoT> {
		const response = await this.get<TodoT>({
			url: todosEndpoints.GET_ONE(id),
		});

		return response.data;
	}

	async addTodo(todo: addTodoT): Promise<TodoT> {
		const response = await this.post<TodoT>({
			url: todosEndpoints.ADD,
			data: todo,
		});

		return response.data;
	}

	async updateTodo(id: number, todoInfo: updateTodoT): Promise<TodoT> {
		const response = await this.patch<TodoT>({
			url: todosEndpoints.UPDATE(id),
			data: todoInfo,
		});

		return response.data;
	}

	async deleteTodo(id: number): Promise<TodoT> {
		const response = await this.delete<TodoT>({
			url: todosEndpoints.DELETE(id),
		});

		return response.data;
	}
}

export const todoService = new TodoService();
