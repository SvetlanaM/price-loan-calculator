import { __ApiPreviewProps } from 'next/dist/server/api-utils';
import { initScriptLoader } from 'next/script';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import CalculatorAPI from '../api/calculator';
import { numberWithSpace } from '../utils/Format';
import { CalculatorResult, CalculatorType } from '../utils/Types';
import CalculatorWrapper from './CalculatorWrapper';
import Loading from './Loading';
import ResultWrapper from './ResultWrapper';

interface Props {
	data: Record<'amountInterval' | 'termInterval', CalculatorType>;
}

const CalculatorScreen = ({ data }: Props) => {
	const [value, setValue] = useState<
		Record<'amountInterval' | 'termInterval', number | string>
	>({
		amountInterval: numberWithSpace(data.amountInterval.defaultValue) || 0,
		termInterval: data.termInterval.defaultValue || 0,
	});

	const onChangeAmount = (amountInterval: number) => {
		setValue({ ...value, amountInterval: amountInterval });
	};

	const onChangeTerm = (termInterval: number) => {
		setValue({ ...value, termInterval: termInterval });
	};

	const { data: resultsData } = useQuery<CalculatorResult, Error>(
		[value],
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
		{ keepPreviousData: true }
	);

	return (
		<React.Fragment>
			<CalculatorWrapper
				{...data}
				selectedAmount={+value.amountInterval}
				selectedTerm={+value.termInterval}
				onChangeAmount={onChangeAmount}
				onChangeTerm={onChangeTerm}
			/>
			{resultsData && <ResultWrapper {...resultsData} />}
		</React.Fragment>
	);
};

export default CalculatorScreen;
