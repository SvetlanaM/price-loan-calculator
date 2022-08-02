import { useEffect, useState } from 'react';
import useLogger from '../hooks/useLogger';

interface ErrorScreenProps {
	userMessage?: string;
	extraClassNames?: string;
}

const ErrorScreen = ({
	userMessage,
	extraClassNames,
}: ErrorScreenProps): JSX.Element => {
	const [errorMessage, setErrorMessage] = useState<string>('Not defined error');
	const logger = useLogger();

	useEffect(() => {
		logger(userMessage);
		setErrorMessage(userMessage || '');
	}, [logger, userMessage, setErrorMessage]);

	return (
		<div className='flex justify-center flex-col min-h-auto items-center py-16 h-[409px]'>
			<h2 className={`text-2xl font-medium mt-5 ${extraClassNames}`}>
				{errorMessage}
			</h2>
		</div>
	);
};

export default ErrorScreen;
