import { useCallback } from 'react';

const useLogger = () => {

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
