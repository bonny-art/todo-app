import { queryInfoT } from '~store/todo.store';

export const convertToSearchParams = (
	query: queryInfoT,
): Record<string, string> => {
	const result: Record<string, string> = {};
	for (const key in query) {
		if (query[key] !== undefined && query[key] !== null) {
			result[key] = String(query[key]);
		}
	}
	return result;
};

export const convertToBoolean = (
	value: string | undefined,
): boolean | undefined => (!value ? undefined : value.toLowerCase() === 'true');
