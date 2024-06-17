export type TodoT = {
	id: number;
	title: string;
	description: string;
	isCompleted: boolean;
	isPrivate: boolean;
	createdAt: string;
	updatedAt: string;
};

export type addTodoT = {
	title: string;
	description: string;
	isPrivate: boolean;
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

export type TodosPropsT = {
	todos: TodoT[];
};

export type TodoPropsT = {
	todo: TodoT;
};

export type ModalContainerProps = {
	onClose: () => void;
	children: React.ReactNode;
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