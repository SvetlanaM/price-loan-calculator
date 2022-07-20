import type { ReactNode, Ref } from 'react';
import Header from './Header';
import Content from './Content';
import PriceRange from './PriceRange';

interface Props {
	children: ReactNode;
	extraClassNames?: string[];
}

const Calculator = ({ children }: Props): JSX.Element => <div>{children}</div>;

Calculator.Content = Content;
Calculator.Header = Header;
Calculator.PriceRange = PriceRange;

export default Calculator;
