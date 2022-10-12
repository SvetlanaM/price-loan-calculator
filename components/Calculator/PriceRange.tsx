import React, { forwardRef } from 'react';
import { CalculatorType } from '../../utils/Types';
import PriceRangeIndicator from '../PriceRangeIndicator';

export interface PriceRangeProps {
	onChangeValue: (value: number) => void;
	calculatorValues: CalculatorType;
	inputValueRef: React.MutableRefObject<HTMLInputElement | null>;
	handleChangeValue: (value: number) => void;
}

const PriceRange = forwardRef(
	({
		onChangeValue,
		calculatorValues,
		inputValueRef,
		handleChangeValue,
	}: PriceRangeProps): JSX.Element => {
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
						value={calculatorValues.defaultValue}
						onChange={() => {
							handleChangeValue(
								+(
									inputValueRef?.current?.value ?? calculatorValues.defaultValue
								)
							);
						}}
						onClick={() => {
							onChangeValue(
								+(
									inputValueRef?.current?.value ?? calculatorValues.defaultValue
								)
							);
						}}
						onMouseUp={() => {
							onChangeValue(
								+(
									inputValueRef?.current?.value ?? calculatorValues.defaultValue
								)
							);
						}}
						onTouchEnd={() => {
							onChangeValue(
								+(
									inputValueRef?.current?.value ?? calculatorValues.defaultValue
								)
							);
						}}
					/>
					<div className='flex justify-between font-bold mt-3'>
						<PriceRangeIndicator
							value={calculatorValues.min}
							onChangeValue={() => {
								onChangeValue(calculatorValues.min);
								handleChangeValue(calculatorValues.min);
							}}
						/>
						<PriceRangeIndicator
							value={calculatorValues.max}
							onChangeValue={() => {
								onChangeValue(calculatorValues.max);
								handleChangeValue(calculatorValues.max);
							}}
						/>
					</div>
				</div>
			</React.Fragment>
		);
	}
);

PriceRange.displayName = 'PriceRange';

export default PriceRange;
