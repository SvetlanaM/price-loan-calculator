import React, { Dispatch, useEffect, useState } from 'react';
import { CalculatorType } from '../../utils/Types';
import PriceRangeIndicator from '../PriceRangeIndicator';

export interface PriceRangeProps {
	onChangeValue: (value: number) => void;
	handleDataRefetch: Dispatch<boolean>;
	revalidateData: boolean;
	calculatorValues: CalculatorType;
}

const PriceRange = ({
	onChangeValue,
	handleDataRefetch,
	revalidateData,
	calculatorValues,
}: PriceRangeProps): JSX.Element => {
	//try useRef instead useState here
	const [inputValue, setInputValue] = useState(calculatorValues.defaultValue);

	//rewrite with more universal function for handleChangeValue and handleMinMax
	// use context api instead sending props up and down - idea or move this to the custom hook
	const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setInputValue(+value);
		onChangeValue(+value);
	};

	const handleMinMax = (minMax: number) => {
		handleDataRefetch(true);
		setInputValue(minMax);
		onChangeValue(minMax);
	};

	useEffect(
		() => handleDataRefetch(false),
		[revalidateData, calculatorValues.min, calculatorValues.max]
	);

	return (
		<React.Fragment>
			<div className='flex flex-col'>
				<input
					type='range'
					aria-labelledby='range-price-slider'
					min={calculatorValues.min}
					max={calculatorValues.max}
					className='range range-secondary'
					step={calculatorValues.step}
					value={inputValue}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						handleChangeValue(e);
					}}
					onClick={() => {
						handleDataRefetch(false);
					}}
					onMouseUp={() => {
						handleDataRefetch(true);
					}}
					onTouchEnd={() => {
						handleDataRefetch(true);
					}}
				/>
				<div className='flex justify-between font-bold mt-3'>
					<PriceRangeIndicator
						value={calculatorValues.min}
						onChangeValue={() => {
							handleMinMax(calculatorValues.min);
						}}
					/>
					<PriceRangeIndicator
						value={calculatorValues.max}
						onChangeValue={() => {
							handleMinMax(calculatorValues.max);
						}}
					/>
				</div>
			</div>
		</React.Fragment>
	);
};

export default PriceRange;
