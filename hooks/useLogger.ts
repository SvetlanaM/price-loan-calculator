import { useCallback } from 'react';

const useLogger = () => {

	return useCallback(
		(
			error?: string,
		) => {
			console.error(error)
		},
		[]
	);
};

export default useLogger;
