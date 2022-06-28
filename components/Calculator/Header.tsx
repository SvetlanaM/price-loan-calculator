import type { ReactNode } from 'react';

export interface Props {
	title: string;
	children?: ReactNode;
	extraClassNames?: string;
}

const Header = ({ title, children, extraClassNames }: Props): JSX.Element => (
	<div>
		<span className={`text-lg font-bold ${extraClassNames && extraClassNames}`}>
			{title}
		</span>
		{children ? <div>{children}</div> : null}
	</div>
);

export default Header;
