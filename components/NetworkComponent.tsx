import ErrorScreen from './ErrorScreen';
import Loading from './Loading';

interface Props {
	children: JSX.Element;
	isError: boolean;
	isLoading: boolean;
}

const NetworkComponent = ({
	children,
	isError,
	isLoading,
}: Props): JSX.Element => {
	if (isError) {
		return <ErrorScreen userMessage={'error'} />;
	}

	return isLoading ? <Loading /> : children;
};

export default NetworkComponent;
