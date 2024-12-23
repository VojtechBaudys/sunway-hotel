import React from 'react';

type Props = {
	rating: number;
}

function StarRating(props: Props): React.ReactElement {
	const {rating} = props;

	// convert number to array of booleans (4.2 => [true, true, true, true, false])
	const stars = Array.from({ length: 5 }, (_, index) => index < Math.floor(rating));

	return (
		<div className='my-2 flex items-center gap-2'>
			<div className='flex items-center'>
				{
					stars.map((active, index) => (
						<svg key={index} className={`h-4 w-4 ${active ? 'text-yellow-400' : 'text-gray-400'}`} aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 24 24'>
							<path d='M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z' />
						</svg>
					))
				}
			</div>
			<p className='text-sm font-medium text-gray-900'>{rating.toFixed(1)}</p>
		</div>
	);
}

export default StarRating;
