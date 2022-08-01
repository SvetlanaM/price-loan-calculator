import type { InferGetStaticPropsType } from 'next';
import CalculatorScreen from '../components/CalculatorScreen';
import ErrorScreen from '../components/ErrorScreen';
import Layout from '../components/Layout';
import fetchAPI from '../utils/FetchAPI';
import useFetch from '../utils/FetchAPI';
import { API_HEADERS, BASE_URL } from '../utils/Constants';
import { CalculatorType } from '../utils/Types';

const Home = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
	const { notFound, initial, error } = props;

	return (
		<Layout>
			{notFound ? (
				<ErrorScreen userMessage={error} />
			) : (
				initial && <CalculatorScreen data={initial} />
			)}
		</Layout>
	);
};

export async function getStaticProps() {
	return fetchAPI<Record<'amountInterval' | 'termInterval', CalculatorType>>(
		BASE_URL + '/constraints',
		{
			headers: API_HEADERS,
		}
	)
		.then((data) => {
			if (data) {
				return {
					props: {
						initial: data,
					},
				};
			}
		})
		.catch((error: Error) => {
			return {
				props: {
					error: error.message,
					notFound: true,
				},
			};
		});
}

export default Home;
