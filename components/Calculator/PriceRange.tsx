import React from 'react';
import { stableValueHash } from 'react-query/types/core/utils';

export interface PriceRangeProps {
	min: number;
	max: number;
	value: number;
	step: number;
	onChangeValue: any;
}

const PriceRange = ({
	min,
	max,
	value,
	step,
	onChangeValue,
}: PriceRangeProps): JSX.Element => (
	<React.Fragment>
		<div className='flex flex-col'>
			<input
				type='range'
				aria-labelledby='range-price-slider'
				min={min}
				max={max}
				className='range range-secondary'
				step={step}
				onChange={(e) => {
					onChangeValue(e.target.value);
				}}
				onMouseUp={(e) => console.log(e)}
			/>
			<div className='flex justify-between font-bold mt-3'>
				<span>{min}</span>
				<span>{max}</span>
			</div>
		</div>
	</React.Fragment>
);

export default PriceRange;
