import { useEffect, useState } from 'react';
import useLogger from '../hooks/useLogger';

interface ErrorScreenProps {
	userMessage?: string;
}

const ErrorScreen = ({ userMessage }: ErrorScreenProps): JSX.Element => {
	const [errorMessage, setErrorMessage] = useState<string>('Not defined error');
	const logger = useLogger();

	useEffect(() => {
		logger(userMessage);
		setErrorMessage(userMessage || '');
	}, [logger, userMessage, setErrorMessage]);

	return (
		<div className='flex justify-center flex-col min-h-auto items-center py-16'>
			<h2 className='text-2xl font-medium mt-5'>{errorMessage}</h2>
		</div>
	);
};

export default ErrorScreen;
