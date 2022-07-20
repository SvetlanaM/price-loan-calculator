import {
	DetailedHTMLProps,
	InputHTMLAttributes,
	MutableRefObject,
	useCallback,
	useRef,
	useState,
} from 'react';
import Calculator from '../components/Calculator/index';
import { STATIC_TEXT_EN } from '../utils/Constants';
import { CalculatorType } from '../utils/Types';
import CalculatorRow from './CalculatorRow';
import Divider from './Divider';

interface Props {
	amountInterval: CalculatorType;
	termInterval: CalculatorType;
	selectedAmount: number;
	selectedTerm: number;
	onChangeAmount: (amountInterval: number) => void;
	onChangeTerm: (termInterval: number) => void;
}

const CalculatorWrapper = ({
	amountInterval,
	termInterval,
	selectedAmount,
	selectedTerm,
	onChangeAmount,
	onChangeTerm,
}: Props): JSX.Element => {
	const calcRef = useRef<HTMLDivElement | null>(null);

	const [[selectedAmountInput, selectedTermInput], setInputValue] = useState([
		selectedAmount,
		selectedTerm,
	]);

	const inputAmountRef = useRef(null);

	const inputTermRef = useRef(null);

	const handleChangeValue = useCallback(
		(value: number) => {
			setInputValue([value, selectedTermInput]);
		},
		[selectedTermInput]
	);

	const handleChangeValue2 = useCallback(
		(value: number) => {
			setInputValue([selectedAmountInput, value]);
		},
		[selectedAmountInput]
	);

	return (
		<div className='w-96 bg-pink shadow-xl text-pink-dark'>
			<Calculator calcRef={calcRef}>
				<CalculatorRow
					calcRef={calcRef}
					title={STATIC_TEXT_EN.total_amount}
					calculatedTitle={selectedAmountInput + ' EUR'}
					calculatorValues={{
						defaultValue: selectedAmountInput,
						min: amountInterval.min,
						max: amountInterval.max,
						step: amountInterval.step,
					}}
					onChangeValue={onChangeAmount}
					inputValueRef={inputAmountRef}
					handleChangeValue={handleChangeValue}
				/>
				<Divider isWhite={true} />
				<CalculatorRow
					calcRef={calcRef}
					title={STATIC_TEXT_EN.term}
					calculatedTitle={selectedTermInput + ' days'}
					calculatorValues={{
						defaultValue: selectedTermInput,
						min: termInterval.min,
						max: termInterval.max,
						step: termInterval.step,
					}}
					onChangeValue={onChangeTerm}
					inputValueRef={inputTermRef}
					handleChangeValue={handleChangeValue2}
				/>
			</Calculator>
		</div>
	);
};

export default CalculatorWrapper;
