import React from 'react';
import { Link } from 'react-router';

type Props = React.ComponentProps<typeof Link> & {
	children?: React.ReactNode;
};

function RouterButton(props: Props): React.ReactElement {
	const defaultClassName = 'flex justify-center w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600';
	const defaultText = 'Click';

	return (
		<Link {...props} className={`${props.className || defaultClassName}`}>
			{props.children || defaultText}
		</Link>
	);
}

export default RouterButton;
