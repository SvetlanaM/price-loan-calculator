import React, { useState } from 'react';
import { stableValueHash } from 'react-query/types/core/utils';
import PriceRangeIndicator from '../PriceRangeIndicator';

export interface PriceRangeProps {
	min: number;
	max: number;
	step: number;
	value: number;
	onChangeValue: any;
	handleDataRefetch: any;
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
	const [inputValue, setInputValue] = useState(value);

	const handleChangeValue = (e: any) => {
		let value = e.target.value;
		setInputValue(value);
		onChangeValue(value);
	};

	const handleMinMax = (minMax: number) => {
		setInputValue(minMax);
		onChangeValue(minMax);
	};

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
					onChange={(e) => {
						handleChangeValue(e);
					}}
					onClick={() => {
						handleDataRefetch(!revalidateData);
					}}
					onMouseUp={() => {
						handleDataRefetch(!revalidateData);
					}}
				/>
				<div className='flex justify-between font-bold mt-3'>
					<PriceRangeIndicator
						value={min}
						onChangeValue={() => {
							handleMinMax(min);
							handleDataRefetch(!revalidateData);
						}}
					/>
					<PriceRangeIndicator
						value={max}
						onChangeValue={() => {
							handleMinMax(max);
							handleDataRefetch(!revalidateData);
						}}
					/>
				</div>
			</div>
		</React.Fragment>
	);
};

export default PriceRange;
