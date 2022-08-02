import type { InferGetStaticPropsType } from 'next';
import CalculatorScreen from '../components/CalculatorScreen';
import Layout from '../components/Layout';
import fetchAPI from '../utils/FetchAPI';
import { API_HEADERS, BASE_URL } from '../utils/Constants';
import { CalculatorType } from '../utils/Types';
import NetworkComponent from '../components/NetworkComponent';

const Home = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
	const { notFound, initial, error } = props;

	return (
		<Layout>
			<NetworkComponent
				children={<CalculatorScreen data={initial} />}
				isError={notFound}
				isLoading={false}
				errorMessage={error}
			/>
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
