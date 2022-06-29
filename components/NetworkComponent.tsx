import { States } from '../utils/Types';
import ErrorScreen from './ErrorScreen';
import Layout from './Layout';
import Loading from './Loading';

interface Props {
	children: JSX.Element;
	state: States;
}

const NetworkComponent = ({ children, state }: Props): JSX.Element => {
	switch (state) {
		case States.NonInitialited:
			return <Loading />;
		case States.Loading:
			return <Loading />;
		case States.Error:
			return <ErrorScreen userMessage={'error'} />;
		case States.Loaded:
			return <Layout>{children}</Layout>;
	}
};

export default NetworkComponent;
