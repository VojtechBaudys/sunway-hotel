import React from 'react';
import { useParams } from 'react-router';
import data from '../../../data.json';
import { IHotel } from '@/types';
import { formateDateInterval } from '@/utils/formateUtils';
import StarRating from '@/components/shared/StarRating';
import Room from '@/components/HotelDetail/Room';
import HotelText from '@/components/shared/HotelText';

function HotelDetail(): React.ReactElement {
	const { id } = useParams();
	const hotel: IHotel = data.filter(element => element.id === Number(id))[0];

	return (
		<section className='py-8 antialiased md:py-12 w-full'>
			<div className='flex flex-col lg:flex-row gap-6'>
				<img src={hotel.imageUrl} alt={hotel.name} className='flex rounded-lg shadow-lg w-[48rem] h-[32rem] object-cover' />
				<div className='w-[20rem]'>
					<h1 className='text-3xl font-bold text-gray-800'>{hotel.name}</h1>
					<HotelText text={hotel.location} className='mt-2' />
					<StarRating rating={hotel.rating} />
					<HotelText text={hotel.boardBasis} className='mt-2' />
					<HotelText text={formateDateInterval(hotel.datesOfTravel)} className='mt-2 text-gray-900' />
				</div>
			</div>
			<div className='mt-8'>
				<h2 className='text-xl font-semibold text-gray-800'>Available Rooms</h2>
				<div className='mt-4 space-y-4'>
					{ hotel.rooms.map(room => <Room key={room.roomType} room={room} />) }
				</div>
			</div>
		</section>
	);
}

export default HotelDetail;