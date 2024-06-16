import { create } from 'zustand';
import { TodoT, addTodoT, updateTodoT } from '~shared/types/todo.type';
import * as todoApi from '~shared/services/todos.api';

interface ITodoStore {
	todos: TodoT[];
	todo: TodoT;
	isEdited: boolean;

	setIsEditedTrue: () => void;
	setIsEditedFalse: () => void;

	getAllTodos: () => Promise<void>;
	getTodo: (id: number) => Promise<void>;
	addTodo: (todo: addTodoT) => Promise<void>;
	updateTodo: (id: number, todoInfo: updateTodoT) => Promise<void>;
	deleteTodo: (id: number) => Promise<void>;
}

export const useTodoStore = create<ITodoStore>((set) => {
	return {
		todos: [],
		todo: {} as TodoT,
		isEdited: false,

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

		getAllTodos: async (): Promise<void> => {
			const todos = await todoApi.getAllTodos();

			set(() => {
				return {
					todos,
				};
			});
		},

		getTodo: async (id: number): Promise<void> => {
			const todo = await todoApi.getOneTodo(id);
			set(() => {
				return {
					todo,
				};
			});
		},

		addTodo: async (todo: addTodoT): Promise<void> => {
			const newTodo = await todoApi.addTodo(todo);

			set((state) => ({
				todos: [...state.todos, newTodo],
			}));
		},

		updateTodo: async (
			id: number,
			todoInfo: updateTodoT,
		): Promise<void> => {
			const updatedTodo = await todoApi.updateTodo(id, todoInfo);

			set((state) => {
				const updatedTodos = state.todos.map((todo) =>
					todo.id === id ? updatedTodo : todo,
				);
				return {
					todos: updatedTodos,
				};
			});
		},

		deleteTodo: async (id: number): Promise<void> => {
			await todoApi.deleteTodo(id);

			set((state) => {
				return {
					todos: state.todos.filter((todo) => todo.id !== id),
				};
			});
		},
	};
});
