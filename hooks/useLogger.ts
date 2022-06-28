import { useCallback } from 'react';

const useLogger = (): ((
	errorType?: string,
	customErrorMessage?: string,
	userId?: string
) => void) => {

	return useCallback(
		(
			error?: string,
		) => {
			console.log(error)
		},
		[]
	);
};

export default useLogger;
