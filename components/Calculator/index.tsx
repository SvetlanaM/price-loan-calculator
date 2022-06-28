import type { ReactNode, Ref } from 'react';
import Header from './Header';
import Content from './Content';
import PriceRange from './PriceRange';

interface Props {
	children: ReactNode;
	extraClassNames?: string[];
	calcRef?: Ref<HTMLDivElement>;
}

const Calculator = ({ children, calcRef }: Props): JSX.Element => (
	<div ref={calcRef}>{children}</div>
);

Calculator.Content = Content;
Calculator.Header = Header;
Calculator.PriceRange = PriceRange;

export default Calculator;
