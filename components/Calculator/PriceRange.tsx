import React, { Dispatch, useEffect, useState } from 'react';
import PriceRangeIndicator from '../PriceRangeIndicator';

export interface PriceRangeProps {
	min: number;
	max: number;
	step: number;
	value: number;
	onChangeValue: (value: number) => void;
	handleDataRefetch: Dispatch<boolean>;
	revalidateData: boolean;
}

const PriceRange = ({
	min,
	max,
	step,
	value,
	onChangeValue,
	handleDataRefetch,
	revalidateData,
}: PriceRangeProps): JSX.Element => {
	//try useRef instead useState here
	const [inputValue, setInputValue] = useState(value);

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

	useEffect(() => handleDataRefetch(false), [revalidateData, min, max]);

	return (
		<React.Fragment>
			<div className='flex flex-col'>
				<input
					type='range'
					aria-labelledby='range-price-slider'
					min={min}
					max={max}
					className='range range-secondary'
					step={step}
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
						value={min}
						onChangeValue={() => {
							handleMinMax(min);
						}}
					/>
					<PriceRangeIndicator
						value={max}
						onChangeValue={() => {
							handleMinMax(max);
						}}
					/>
				</div>
			</div>
		</React.Fragment>
	);
};

export default PriceRange;
