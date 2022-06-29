import type { InferGetStaticPropsType } from 'next';
import CalculatorWrapper from '../components/CalculatorWrapper';
import Layout from '../components/Layout';
import ResultWrapper from '../components/ResultWrapper';
import { useQuery } from 'react-query';
import CalculatorAPI from '../api/calculator';
import Loading from '../components/Loading';
import { CalculatorType, States } from '../utils/Types';
import ErrorScreen from '../components/ErrorScreen';
import CalculatorScreen from '../components/CalculatorScreen';
import NetworkComponent from '../components/NetworkComponent';

const Home = (props: InferGetStaticPropsType<typeof getServerSideProps>) => {
	const {
		data: initialData,
		isError,
		isLoading,
	} = useQuery<
		Record<'amountInterval' | 'termInterval', CalculatorType>,
		Error
	>(['initial'], {
		initialData: props.initial,
		onError: (error) => console.log(error.message),
	});

	const getState = (): States => {
		if (isError) {
			return States.Error;
		}

		if (isLoading) {
			return States.Loading;
		}

		if (initialData) {
			return States.Loaded;
		}

		return States.NonInitialited;
	};

	return (
		<NetworkComponent
			children={
				initialData ? <CalculatorScreen data={initialData} /> : <Loading />
			}
			state={getState()}
		/>
	);
};

export async function getServerSideProps() {
	try {
		const { data, status } = await CalculatorAPI.get_constraints();

		if (status === 200) {
			return {
				props: {
					initial: data,
				},
			};
		} else {
			console.error('error');
			return {
				props: {
					initial: {},
				},
			};
		}
	} catch (error) {
		console.error(error);
		return {
			props: {
				initial: {},
			},
		};
	}
}

export default Home;
