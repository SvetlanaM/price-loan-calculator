import React, { forwardRef } from 'react';
import { CalculatorType } from '../../utils/Types';
import PriceRangeIndicator from '../PriceRangeIndicator';

export interface PriceRangeProps {
	onChangeValue: (value: number) => void;
	calculatorValues: CalculatorType;
	inputValueRef: any;
	handleChangeValue: any;
}

const PriceRange = forwardRef(
	(
		{
			onChangeValue,
			calculatorValues,
			inputValueRef,
			handleChangeValue,
		}: PriceRangeProps,
		ref
	): JSX.Element => {
		return (
			<React.Fragment>
				<div className='flex flex-col'>
					<input
						ref={inputValueRef}
						type='range'
						aria-labelledby='range-price-slider'
						min={calculatorValues.min}
						max={calculatorValues.max}
						className='range range-secondary'
						step={calculatorValues.step}
						defaultValue={calculatorValues.defaultValue}
						onChange={() => {
							handleChangeValue(inputValueRef.current.value);
						}}
						onClick={() => {
							onChangeValue(inputValueRef.current.value);
						}}
						onMouseUp={() => {
							onChangeValue(inputValueRef.current.value);
						}}
						onTouchEnd={() => {
							onChangeValue(inputValueRef.current.value);
						}}
					/>
					<div className='flex justify-between font-bold mt-3'>
						<PriceRangeIndicator
							value={calculatorValues.min}
							onChangeValue={() => onChangeValue(calculatorValues.min)}
						/>
						<PriceRangeIndicator
							value={calculatorValues.max}
							onChangeValue={() => onChangeValue(calculatorValues.max)}
						/>
					</div>
				</div>
			</React.Fragment>
		);
	}
);

export default PriceRange;
