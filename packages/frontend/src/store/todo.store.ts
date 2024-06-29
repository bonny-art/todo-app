import { Notify } from 'notiflix';
import { create } from 'zustand';
import { getErrorMessage } from '~shared/helpers/error-message-getter';
import { todoService } from '~shared/services/todos.service';

import { TodoT, addTodoT, updateTodoT } from '~shared/types/todo.type';

export type queryInfoT = {
	searchQuery?: string | undefined;
	isPrivate?: boolean | undefined;
	isCompleted?: boolean | undefined;
	page?: number;
	perPage?: number;
};

export type queryT = {
	searchQuery: string | undefined;
	isPrivate: boolean | undefined;
	isCompleted: boolean | undefined;
	page: number;
	perPage: number;
};

interface ITodoStore {
	todos: TodoT[];

	todo: TodoT;

	isEdited: boolean;
	isLoading: boolean;

	query: queryT | null;

	currentPage: number;
	totalPages: number;
	totalTodos: number;

	getTodos: (query: queryT) => Promise<void>;
	getTodosAcc: (query: queryT) => Promise<void>;
	clearTodos: () => void;

	getTodo: (id: number) => Promise<void>;
	addTodo: (todo: addTodoT) => Promise<void>;
	updateTodo: (id: number, todoInfo: updateTodoT) => Promise<void>;
	deleteTodo: (id: number) => Promise<void>;

	setQuery: (query: queryInfoT) => void;
	setCurrentPage: (page: number) => void;

	setIsEditedTrue: () => void;
	setIsEditedFalse: () => void;
}

export const useTodoStore = create<ITodoStore>((set) => {
	return {
		todos: [],

		todo: {} as TodoT,

		isEdited: false,
		isLoading: false,

		query: null,

		currentPage: 1,
		totalPages: 0,
		totalTodos: 0,

		getTodos: async (query: queryT): Promise<void> => {
			set({ isLoading: true });
			try {
				const todosObject = await todoService.getAllTodos(query);
				set(() => ({
					isLoading: false,
					todos: todosObject.todos,

					totalPages: todosObject.totalPages,
					currentPage: todosObject.currentPage,
					totalTodos: todosObject.totalTodos,
				}));
			} catch (error) {
				set({ isLoading: false });
				Notify.failure(getErrorMessage(error));
			}
		},

		getTodosAcc: async (query: queryT): Promise<void> => {
			set({ isLoading: true });
			try {
				const todosObject = await todoService.getAllTodos(query);
				set((state) => ({
					isLoading: false,
					todos: [...state.todos, ...todosObject.todos],

					totalPages: todosObject.totalPages,
					currentPage: todosObject.currentPage,
					totalTodos: todosObject.totalTodos,
				}));
			} catch (error) {
				set({ isLoading: false });
				Notify.failure(getErrorMessage(error));
			}
		},

		clearTodos: (): void => {
			set(() => ({
				todos: [],
				currentPage: 1,
				totalPages: 0,
				totalTodos: 0,
			}));
		},

		getTodo: async (id: number): Promise<void> => {
			set({ isLoading: true });
			try {
				const todo = await todoService.getOneTodo(id);
				set(() => ({
					isLoading: false,
					todo,
				}));
			} catch (error) {
				set({ isLoading: false });
				Notify.failure(getErrorMessage(error));
			}
		},

		addTodo: async (todo: addTodoT): Promise<void> => {
			set({ isLoading: true });
			try {
				const newTodo = await todoService.addTodo(todo);
				set((state) => ({
					isLoading: false,
					todos: [...state.todos, newTodo],
				}));

				Notify.success('Todo added successfully');
			} catch (error) {
				set({ isLoading: false });
				Notify.failure(getErrorMessage(error));
			}
		},

		updateTodo: async (
			id: number,
			todoInfo: updateTodoT,
		): Promise<void> => {
			set({ isLoading: true });
			try {
				const updatedTodo = await todoService.updateTodo(id, todoInfo);
				set((state) => {
					const updatedTodos = state.todos.map((todo) =>
						todo.id === id ? updatedTodo : todo,
					);
					return {
						isLoading: false,
						todos: updatedTodos,
					};
				});

				Notify.success('Todo updated successfully');
			} catch (error) {
				set({ isLoading: false });
				Notify.failure(getErrorMessage(error));
			}
		},

		deleteTodo: async (id: number): Promise<void> => {
			set({ isLoading: true });
			try {
				await todoService.deleteTodo(id);
				set((state) => ({
					isLoading: false,
					todos: state.todos.filter((todo) => todo.id !== id),
				}));

				Notify.success('Todo deleted successfully');
			} catch (error) {
				set({ isLoading: false });
				Notify.failure(getErrorMessage(error));
			}
		},

		setQuery: (query: queryInfoT): void => {
			set((state) => ({
				query: { ...state.query, ...query },
			}));
		},

		setCurrentPage: (page: number): void => {
			set(() => {
				return {
					currentPage: page,
				};
			});
		},

		setIsEditedTrue: (): void => {
			set(() => {
				return {
					isEdited: true,
				};
			});
		},

		setIsEditedFalse: (): void => {
			set(() => {
				return {
					isEdited: false,
				};
			});
		},
	};
});
