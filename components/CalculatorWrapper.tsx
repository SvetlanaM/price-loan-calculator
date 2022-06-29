import { useRef } from 'react';
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
	onChangeAmount: any;
	onChangeTerm: any;
	handleDataRefetch: any;
	revalidateData: boolean;
}

const CalculatorWrapper = ({
	amountInterval,
	termInterval,
	selectedAmount,
	selectedTerm,
	onChangeAmount,
	onChangeTerm,
	handleDataRefetch,
	revalidateData,
}: Props): JSX.Element => {
	const calcRef = useRef<HTMLDivElement | null>(null);

	return (
		<div className='w-96 bg-pink shadow-xl text-pink-dark'>
			<Calculator calcRef={calcRef}>
				<CalculatorRow
					calcRef={calcRef}
					title={STATIC_TEXT_EN.total_amount}
					calculatedTitle={selectedAmount + ' EUR'}
					min={amountInterval?.min}
					max={amountInterval?.max}
					value={selectedAmount}
					step={amountInterval?.step}
					onChangeValue={onChangeAmount}
					handleDataRefetch={handleDataRefetch}
					revalidateData={revalidateData}
				/>
				<Divider isWhite={true} />
				<CalculatorRow
					calcRef={calcRef}
					title={STATIC_TEXT_EN.term}
					calculatedTitle={selectedTerm + ' days'}
					min={termInterval?.min}
					max={termInterval?.max}
					value={selectedTerm}
					step={termInterval?.step}
					onChangeValue={onChangeTerm}
					handleDataRefetch={handleDataRefetch}
					revalidateData={revalidateData}
				/>
			</Calculator>
		</div>
	);
};

export default CalculatorWrapper;
