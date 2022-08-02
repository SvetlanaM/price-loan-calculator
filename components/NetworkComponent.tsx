import ErrorScreen from './ErrorScreen';
import Loading from './Loading';

interface Props {
	children: JSX.Element;
	isLoading: boolean;
	isError: boolean;
	errorMessage?: string;
}

const NetworkComponent = ({
	children,
	isLoading,
	isError,
	errorMessage = 'No data, try later :)',
}: Props): JSX.Element => {
	return isLoading ? (
		<Loading />
	) : isError ? (
		<ErrorScreen userMessage={errorMessage} />
	) : (
		children
	);
};

export default NetworkComponent;
