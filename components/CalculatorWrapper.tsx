import {
	DetailedHTMLProps,
	Dispatch,
	InputHTMLAttributes,
	useCallback,
	useEffect,
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

	const [[inputValue, inputValue2], setInputValue] = useState([
		selectedAmount,
		selectedTerm,
	]);

	const inputValueRef =
		useRef<
			DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
		>(null);

	const inputValueRef2 =
		useRef<
			DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
		>(null);

	const handleChangeValue = useCallback(
		(e: any) => {
			setInputValue([e, inputValue2]);
		},
		[inputValue2]
	);

	const handleChangeValue2 = useCallback(
		(e: any) => {
			setInputValue([inputValue, e]);
		},
		[inputValue]
	);

	return (
		<div className='w-96 bg-pink shadow-xl text-pink-dark'>
			<Calculator calcRef={calcRef}>
				<CalculatorRow
					calcRef={calcRef}
					title={STATIC_TEXT_EN.total_amount}
					calculatedTitle={inputValue + ' EUR'}
					calculatorValues={{
						defaultValue: inputValue,
						min: amountInterval.min,
						max: amountInterval.max,
						step: amountInterval.step,
					}}
					onChangeValue={onChangeAmount}
					inputValueRef={inputValueRef}
					handleChangeValue={handleChangeValue}
				/>
				<Divider isWhite={true} />
				<CalculatorRow
					calcRef={calcRef}
					title={STATIC_TEXT_EN.term}
					calculatedTitle={inputValue2 + ' days'}
					calculatorValues={{
						defaultValue: inputValue2,
						min: termInterval.min,
						max: termInterval.max,
						step: termInterval.step,
					}}
					onChangeValue={onChangeTerm}
					inputValueRef={inputValueRef2}
					handleChangeValue={handleChangeValue2}
				/>
			</Calculator>
		</div>
	);
};

export default CalculatorWrapper;
