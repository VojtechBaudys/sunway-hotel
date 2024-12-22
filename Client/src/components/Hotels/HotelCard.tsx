import React from 'react';
import { IHotel } from '@/types';
import { Link } from 'react-router';
import { formateDateInterval, formateRoomsAvailability } from '@/utils/formateUtils';
import StarRating from '@components/shared/StarRating';

type Props = {
	hotel: IHotel;
}

function HotelCard(props: Props): React.ReactElement {
	const {hotel} = props;

	return (
		<div className='rounded-lg border border-gray-200 bg-white shadow-sm'>
			<div className='h-56 w-full overflow-hidden rounded-t-lg'>
				<Link to={`/hotels/${hotel.id}`}>
					<img className='w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110' src={hotel.imageUrl} alt='' />
				</Link>
			</div>
			<div className='p-6'>
				<h2>
					<Link to={`/hotels/${hotel.id}`} className='text-lg font-semibold leading-tight text-gray-900 hover:underline'>{hotel.name}</Link>
				</h2>
				<p className='text-sm font-medium text-gray-500'>{hotel.location}</p>
				<StarRating rating={hotel.rating} />
				<p className='text-sm font-medium text-gray-500'>{hotel.boardBasis}</p>
				<p className='text-sm font-medium text-gray-500'>{formateRoomsAvailability(hotel.rooms)}</p>
				<p className='text-sm font-medium pt-2'>{formateDateInterval(hotel.datesOfTravel)}</p>
				<Link to={`/hotels/${hotel.id}`} className='flex justify-center mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'>
					Book Now
				</Link>
			</div>
		</div>
	);
}

export default HotelCard;
