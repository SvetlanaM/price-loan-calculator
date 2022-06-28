import type { InferGetStaticPropsType } from 'next';
import CalculatorWrapper from '../components/CalculatorWrapper';
import Layout from '../components/Layout';
import ResultWrapper from '../components/ResultWrapper';
import { useQuery } from 'react-query';
import CalculatorAPI from '../api/calculator';
import Loading from '../components/Loading';
import { CalculatorType } from '../utils/Types';
import ErrorScreen from '../components/ErrorScreen';
import CalculatorScreen from '../components/CalculatorScreen';

const Home = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
	const {
		data: initialData,
		isError,
		isLoading,
	} = useQuery<
		Record<'amountInterval' | 'termInterval', CalculatorType>,
		Error
	>(['initial'], {
		initialData: props.initial,
		onError: (error) => alert(error.message),
	});

	const getComponent = () => {
		if (isError) {
			return <ErrorScreen userMessage={'error'} />;
		}

		return isLoading ? (
			<Loading />
		) : (
			initialData && <CalculatorScreen data={initialData} />
		);
	};

	return <Layout>{getComponent()}</Layout>;
};

export async function getStaticProps() {
	try {
		const { data, status } = await CalculatorAPI.get_constraints();

		if (status === 200) {
			return {
				props: {
					initial: data,
				},
				revalidate: 1,
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
