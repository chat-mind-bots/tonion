export const getErrorMessage = (
	message: string | undefined
): string[] | undefined => {
	if (message) {
		return [message];
	}
	return undefined;
};
