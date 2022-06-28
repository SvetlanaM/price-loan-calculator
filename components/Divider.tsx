import classNames from 'classnames';

interface Props {
	isWhite?: boolean;
}

const Divider = ({ isWhite = false }: Props): JSX.Element => (
	<hr
		className={classNames('w-full border-b-1 border-b-gray-300', {
			'border-b-white': isWhite,
		})}></hr>
);
export default Divider;
