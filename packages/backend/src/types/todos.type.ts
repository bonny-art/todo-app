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

export type queryInfoT = {
	searchQuery?: string | null;
	isPrivate?: string | undefined;
	isCompleted?: string | undefined;
};

export type whereConditionsT = {
	isPrivate?: boolean;
	isCompleted?: boolean;
	title?: {
		contains: string;
	};
	userId?: number;
};
