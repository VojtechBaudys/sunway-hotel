import React from 'react';

type Props = {
	text: string;
	className?: string;
};

function HotelText(props: Props): React.ReactElement {
	const {text, className} = props;

	return (
		<p className={`text-sm font-medium text-gray-500 ${className}`}>{text}</p>
	);
}

export default HotelText;
