import ErrorScreen from './ErrorScreen';
import Loading from './Loading';

interface Props {
	children: JSX.Element;
	isLoading?: boolean;
	isError?: boolean;
}

const NetworkComponent = ({
	children,
	isLoading,
	isError,
}: Props): JSX.Element => {
	return isLoading ? (
		<Loading />
	) : isError ? (
		<ErrorScreen userMessage={'No data, try later :)'} />
	) : (
		children
	);
};

export default NetworkComponent;
