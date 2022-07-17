import type { InferGetStaticPropsType } from 'next';
import CalculatorAPI from '../api/calculator';
import CalculatorScreen from '../components/CalculatorScreen';
import ErrorScreen from '../components/ErrorScreen';
import Layout from '../components/Layout';

const Home = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
	const { notFound, initial } = props;

	return (
		<Layout>
			{notFound ? (
				<ErrorScreen userMessage='error' />
			) : (
				<CalculatorScreen data={initial} />
			)}
		</Layout>
	);
};

export async function getStaticProps() {
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
					notFound: true,
				},
			};
		}
	} catch (error) {
		console.error(error);
		return {
			props: {
				notFound: true,
			},
		};
	}
}

export default Home;
