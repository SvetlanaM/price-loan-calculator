import { useRef } from 'react';
import { STATIC_TEXT_EN } from '../utils/Constants';
import { CalculatorResult } from '../utils/Types';
import Result from './Result';

const additionalVat = (
	<span className='text-xs font-light text-gray-900'>
		{STATIC_TEXT_EN.vat_included}
	</span>
);

const ResultWrapper = (props: CalculatorResult): JSX.Element => {
	const resultRef = useRef<HTMLDivElement | null>(null);

	return (
		<div className='w-96 bg-white shadow-xl h-auto'>
			<Result resultRef={resultRef}>
				<Result.RowContainer>
					<Result.Row
						label={STATIC_TEXT_EN.total_principal}
						value={props.totalPrincipal}
					/>
					<Result.Row
						label={STATIC_TEXT_EN.total_cost_of_credit}
						value={props.totalCostOfCredit}
						additionalVat={additionalVat}
					/>
					<Result.Row
						label={STATIC_TEXT_EN.total_repayable_amount}
						value={props.totalRepayableAmount}
						extraClassNames={['font-bold', 'text-green-dark']}
						additionalVat={additionalVat}
					/>
					<Result.Row
						label={STATIC_TEXT_EN.monthly_payment}
						value={props.monthlyPayment.toFixed(2)}
						extraClassNames={['font-bold', 'text-green-dark']}
						additionalVat={additionalVat}
					/>
					<Result.Row
						label={STATIC_TEXT_EN.term}
						value={'14/JUL/2022'}
						extraClassNames={['font-bold', 'text-green-dark']}
					/>
				</Result.RowContainer>
			</Result>
		</div>
	);
};

export default ResultWrapper;
