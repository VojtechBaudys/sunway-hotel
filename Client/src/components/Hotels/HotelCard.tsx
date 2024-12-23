import React from 'react';
import { IHotel } from '@/types';
import { Link } from 'react-router';
import { formateDateInterval, formateRoomsAvailability, truncateText } from '@/utils/formateUtils';
import StarRating from '@components/shared/StarRating';
import RouterButton from '../shared/RouterButton';
import HotelText from '../shared/HotelText';

type Props = {
	hotel: IHotel;
}

function HotelCard(props: Props): React.ReactElement {
	const {hotel} = props;

	return (
		<div className='rounded-lg border border-gray-200 bg-gray-100 shadow-sm'>
			<div className='h-56 w-full overflow-hidden rounded-t-lg'>
				<Link to={`/hotels/${hotel.id}`}>
					<img className='w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110' src={hotel.imageUrl} alt={hotel.name} />
				</Link>
			</div>
			<div className='flex flex-col p-6 h-[calc(100%-14rem)]'>
				<h2>
					<Link to={`/hotels/${hotel.id}`} className='text-lg font-semibold leading-tight text-gray-900 hover:underline'>{hotel.name}</Link>
				</h2>
				<HotelText text={hotel.location} />
				<StarRating rating={hotel.rating} />
				<HotelText text={hotel.boardBasis} />
				<HotelText text={truncateText(formateRoomsAvailability(hotel.rooms), 70)} className='mt-2' />
				<HotelText text={formateDateInterval(hotel.datesOfTravel)} className='text-gray-900 pt-4 mt-auto' />
				<div className='mt-2'>
					<RouterButton to={`/hotels/${hotel.id}`}>
						Book Now
					</RouterButton>
				</div>
			</div>
		</div>
	);
}

export default HotelCard;
