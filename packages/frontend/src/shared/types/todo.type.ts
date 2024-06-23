export type TodoT = {
	id: number;
	title: string;
	description: string;
	isCompleted: boolean;
	isPrivate: boolean;
	createdAt: string;
	updatedAt: string;
	userId: number;
};

export type addTodoT = {
	title: string;
	description: string;
	isPrivate: boolean;
	userID?: number;
};

export type addTodoFormikT = {
	title: string;
	description: string;
	visibility: string;
};

export type updateTodoT = {
	title?: string;
	description?: string;
	isCompleted?: boolean;
	isPrivate?: boolean;
};

export type MobileTodosPropsT = {
	todos: TodoT[];
	currentPage: number;
	totalPages: number;

	incrementPage: () => void;
};

export type TabletTodosPropsT = {
	todos: TodoT[];
	currentPage: number;
	totalPages: number;
	isLastPage: boolean;

	incrementPage: () => void;
};

export type DesktopTodosPropsT = {
	todos: TodoT[];
	currentPage: number;
	queryPage: number;
	totalPages: number;
	isLastPage: boolean;

	incrementPage: () => void;
	decrementPage: () => void;
};

export type TodoPropsT = {
	todo: TodoT;
};

export type ModalContainerProps = {
	onClose: () => void;
	children: JSX.Element;
};

export type TodoModalProps = {
	isModalOpen: boolean;
	closeModal: () => void;
	todo: TodoT;
};

export type AddTodoModalProps = {
	isModalOpen: boolean;
	closeModal: () => void;
};

export type TodoModalShowProps = {
	todo: TodoT;
	onUpdateClick: () => void;
};

export type TodoFormProps = {
	todo?: TodoT;
	onSaveClick: (values: addTodoT, id?: number) => void;
};

export type FieldProps = {
	className: string;
	type?: 'text' | 'password';
	name: string;
	placeholder: string;
	errors: { [key: string]: string };
	touched: { [key: string]: boolean };
};

export type RadioOption = {
	label: string;
	value: string;
};

export type RadioInputGroupProps = {
	name: string;
	options: RadioOption[];
	className?: string;
};

export type RadioFieldProps = {
	name: string;
	value: string;
	label: string;
};

export type queryFormikT = {
	searchQuery: string;
};

export type TodosObjectT = {
	todos: TodoT[];
	totalPages: number;
	currentPage: number;
	perPage: number;
	totalTodos: number;
};
