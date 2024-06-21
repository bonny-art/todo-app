import { create } from 'zustand';
import { todoService } from '~shared/services/todos.service';
import { TodoT, addTodoT, updateTodoT } from '~shared/types/todo.type';

type queryInfoT = {
	searchQuery?: string | undefined;
	isPrivate?: boolean | undefined;
	isCompleted?: boolean | undefined;
};

export type queryT = {
	searchQuery: string | undefined;
	isPrivate: boolean | undefined;
	isCompleted: boolean | undefined;
};

interface ITodoStore {
	todos: TodoT[];
	todo: TodoT;
	isEdited: boolean;
	query: queryT;

	setIsEditedTrue: () => void;
	setIsEditedFalse: () => void;
	setQuery: (query: queryInfoT) => void;

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
		query: {
			searchQuery: null,
			isPrivate: undefined,
			isCompleted: undefined,
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

		setQuery: (queryInfo: queryInfoT): void => {
			set((state) => ({
				query: {
					...state.query,
					...queryInfo,
				},
			}));
		},

		getAllTodos: async (): Promise<void> => {
			const { query } = useTodoStore.getState();

			const todos = await todoService.getAllTodos(query);

			set(() => {
				return {
					todos,
				};
			});
		},

		getTodo: async (id: number): Promise<void> => {
			const todo = await todoService.getOneTodo(id);
			set(() => {
				return {
					todo,
				};
			});
		},

		addTodo: async (todo: addTodoT): Promise<void> => {
			const newTodo = await todoService.addTodo(todo);

			set((state) => ({
				todos: [...state.todos, newTodo],
			}));
		},

		updateTodo: async (
			id: number,
			todoInfo: updateTodoT,
		): Promise<void> => {
			const updatedTodo = await todoService.updateTodo(id, todoInfo);

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
			await todoService.deleteTodo(id);

			set((state) => {
				return {
					todos: state.todos.filter((todo) => todo.id !== id),
				};
			});
		},
	};
});
