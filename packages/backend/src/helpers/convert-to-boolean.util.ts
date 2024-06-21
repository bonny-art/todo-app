export const convertToBoolean = (
	value: string | undefined,
): boolean | undefined => {
	return value === 'true' ? true : value === 'false' ? false : undefined;
};
