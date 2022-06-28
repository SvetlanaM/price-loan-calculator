import type { ReactNode, Ref } from 'react';
import RowContainer from './RowContainer';
import Row from './Row';

interface Props {
	children: ReactNode;
	resultRef?: Ref<HTMLDivElement>;
}

const Result = ({ children, resultRef }: Props): JSX.Element => (
	<div ref={resultRef} className='px-8 py-4 font-light '>
		{children}
	</div>
);

Result.RowContainer = RowContainer;
Result.Row = Row;

export default Result;
