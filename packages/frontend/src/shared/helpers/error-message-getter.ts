interface ErrorWithResponse {
	response?: {
		data?: {
			message?: string;
		};
	};
	message?: string;
}

export const getErrorMessage = (error: ErrorWithResponse): string => {
	if (error.response && error.response.data) {
		return error.response.data.message || 'Unknown error';
	} else if (error.message) {
		return error.message;
	} else {
		return 'Unknown error';
	}
};
