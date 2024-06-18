export interface IHttpError extends Error {
	status?: number;
}

export type MessageListT = {
	[key: string]: string;
};
