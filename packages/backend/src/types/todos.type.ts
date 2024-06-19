// TODO: Put a real types here

export type TodoCreateDataT = {
	title: string;
	description: string;
	isPrivate: boolean;
	userId: number;
};

export type TodoUpdateDataT = {
	title?: string;
	description?: string;
	isCompleted?: boolean;
	isPrivate?: boolean;
};
