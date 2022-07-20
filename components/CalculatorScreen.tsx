import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { numberWithSpace } from '../utils/Format';
import { CalculatorType } from '../utils/Types';
import CalculatorWrapper from './CalculatorWrapper';
import ResultWrapper from './ResultWrapper';
import { useReducer } from 'react';
import { calculatorReducer } from '../reducers/CalculatorReducer';
import { BASE_URL, CACHE_TIME } from '../utils/Constants';
import NetworkComponent from './NetworkComponent';
interface Props {
	data: Record<'amountInterval' | 'termInterval', CalculatorType>;
}

const CalculatorScreen = ({ data }: Props) => {
	const initialValues = {
		amountInterval: numberWithSpace(data.amountInterval?.defaultValue) || 0,
		termInterval: data.termInterval?.defaultValue || 0,
	};

	const [value, dispatch] = useReducer(calculatorReducer, initialValues);

	const onChangeAmount = (amountInterval: number) => {
		dispatch({
			type: 'change_amount',
			dataValue: +amountInterval,
		});
	};

	const onChangeTerm = (termInterval: number) => {
		dispatch({
			type: 'change_term',
			dataValue: termInterval,
		});
	};

	const {
		data: resultsData,
		isError: resultError,
		isLoading: resultLoading,
	} = useQuery(
		[value],
		() =>
			fetch(
				`${BASE_URL}/real-first-loan-offer?amount=${+value.amountInterval}&term=${+value.termInterval}`
			).then((res) => res.json()),
		{
			staleTime: CACHE_TIME,
			cacheTime: CACHE_TIME,
			keepPreviousData: true,
		}
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
			<NetworkComponent
				isError={resultError}
				isLoading={resultLoading}
				children={<ResultWrapper {...resultsData} />}
			/>
		</React.Fragment>
	);
};

export default CalculatorScreen;
