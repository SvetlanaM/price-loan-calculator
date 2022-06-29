import { __ApiPreviewProps } from 'next/dist/server/api-utils';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import CalculatorAPI from '../api/calculator';
import { numberWithSpace } from '../utils/Format';
import { CalculatorResult, CalculatorType } from '../utils/Types';
import CalculatorWrapper from './CalculatorWrapper';
import ErrorScreen from './ErrorScreen';
import Loading from './Loading';
import ResultWrapper from './ResultWrapper';

interface Props {
	data: Record<'amountInterval' | 'termInterval', CalculatorType>;
}

const CalculatorScreen = ({ data }: Props) => {
	const [value, setValue] = useState<
		Record<'amountInterval' | 'termInterval', number | string>
	>({
		amountInterval: numberWithSpace(data.amountInterval?.defaultValue) || 0,
		termInterval: data.termInterval?.defaultValue || 0,
	});
	const [revalidateData, setRevalidateData] = useState<boolean>(false);

	const onChangeAmount = (amountInterval: number) => {
		setValue({ ...value, amountInterval: amountInterval });
	};

	const onChangeTerm = (termInterval: number) => {
		setValue({ ...value, termInterval: termInterval });
	};

	const {
		data: resultsData,
		refetch,
		error: resultError,
	} = useQuery<CalculatorResult, Error>(
		[],
		async () => {
			const response = await CalculatorAPI.get_loan(
				+value.amountInterval,
				+value.termInterval
			);
			if (!response.status) {
				throw new Error('Network response was not ok');
			}
			return response.data;
		},
		{ enabled: false }
	);

	useEffect(() => {
		refetch();
	}, [data, revalidateData]);

	return (
		<React.Fragment>
			<CalculatorWrapper
				{...data}
				selectedAmount={+value.amountInterval}
				selectedTerm={+value.termInterval}
				onChangeAmount={onChangeAmount}
				onChangeTerm={onChangeTerm}
				handleDataRefetch={setRevalidateData}
				revalidateData={revalidateData}
			/>
			{resultsData ? (
				<ResultWrapper {...resultsData} />
			) : resultError ? (
				<ErrorScreen userMessage='error - no data' />
			) : (
				<Loading />
			)}
		</React.Fragment>
	);
};

export default CalculatorScreen;
