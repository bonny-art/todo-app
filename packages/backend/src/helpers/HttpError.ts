import { IHttpError, MessageListT } from '@/types/messages.type';

const messageList: MessageListT = {
	'400': 'Bad Request',
	'401': 'Unauthorized',
	'403': 'Forbidden',
	'404': 'Not Found',
	'409': 'Conflict',
};

const HttpError = (
	status: number,
	message: string = messageList[status.toString()],
): IHttpError => {
	const error = new Error(message) as IHttpError;
	error.status = status;

	return error;
};

export default HttpError;
