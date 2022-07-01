import type { InferGetStaticPropsType } from 'next';
import { useQuery } from 'react-query';
import CalculatorAPI from '../api/calculator';
import Loading from '../components/Loading';
import { CalculatorType, States } from '../utils/Types';
import CalculatorScreen from '../components/CalculatorScreen';
import NetworkComponent from '../components/NetworkComponent';

const Home = (props: InferGetStaticPropsType<typeof getServerSideProps>) => {
	//In real app, no need and based on real use case, switch to GetStaticProps
	const {
		data: initialData,
		isError,
		isLoading,
	} = useQuery<
		Record<'amountInterval' | 'termInterval', CalculatorType>,
		Error
	>(['initial'], {
		initialData: props.initial,
	});

	//Review: it should be better move this logic on another place
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

	//Review: Based on architecture in a team, move this initial data as a props to network component
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
