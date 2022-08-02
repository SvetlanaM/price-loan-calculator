import { forwardRef } from 'react';
import Calculator from '../components/Calculator/index';
import { PriceRangeProps } from './Calculator/PriceRange';
import ColumnContainer from './ColumnContainer';

interface Props extends PriceRangeProps {
	title: string;
	calculatedTitle: string;
	onChangeValue: (value: number) => void;
	inputValueRef: React.MutableRefObject<HTMLInputElement | null>;
	handleChangeValue: (value: number) => void;
}

const CalculatorRow = forwardRef((props: Props, ref): JSX.Element => {
	return (
		<Calculator.Content>
			<ColumnContainer>
				<Calculator.Header title={props.title} />
				<Calculator.Header
					title={props.calculatedTitle}
					extraClassNames='text-3xl'
				/>
			</ColumnContainer>
			<Calculator.PriceRange
				calculatorValues={props.calculatorValues}
				onChangeValue={props.onChangeValue}
				inputValueRef={props.inputValueRef}
				handleChangeValue={props.handleChangeValue}
			/>
		</Calculator.Content>
	);
});

export default CalculatorRow;
