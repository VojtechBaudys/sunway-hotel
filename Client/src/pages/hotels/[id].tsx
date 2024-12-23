import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { IHotel } from '@/types';
import { formateDateInterval } from '@/utils/formateUtils';
import useAxios from '@/utils/api';

import StarRating from '@/components/shared/StarRating';
import Room from '@/components/HotelDetail/Room';
import HotelText from '@/components/shared/HotelText';
import AppSection from '@/components/Layout/AppSection';
import LoadingSpinner from '@/components/shared/LoadingSpinner';
import NotFound from '@/components/shared/NotFound';

function HotelDetail(): React.ReactElement {
	// url parameter
	const { id } = useParams();
	// fetch api
	const { data, loading, error } = useAxios<IHotel>(`/hotels/${id}`, 'GET');
	// hotel selected by id
	const [hotel, setHotel] = useState<IHotel | null>(null);

	useEffect(() => {
		if (data != null) setHotel(data);
	}, [data]);

	return (
		<>
			{ ( !loading && hotel != null) && (
				<>
					<AppSection>
						<div className='flex flex-col lg:flex-row gap-6'>
							<img src={hotel.imageUrl} alt={hotel.name} className='flex rounded-lg shadow-lg w-[58.5rem] h-[32rem] object-cover' />
							<div className='w-[20rem]'>
								<h1 className='text-3xl font-bold text-gray-800'>{hotel.name}</h1>
								<HotelText text={hotel.location} className='mt-2' />
								<StarRating rating={hotel.rating} />
								<HotelText text={hotel.boardBasis} className='mt-2' />
								<HotelText text={formateDateInterval(hotel.datesOfTravel)} className='mt-2 text-gray-900' />
							</div>
						</div>
					</AppSection>
					<AppSection>
						<div className='max-w-[58.5rem]'>
							<h2 className='text-xl font-semibold text-gray-800'>Available Rooms</h2>
							<div className='mt-4 space-y-4'>
								{ hotel.rooms.map(room => <Room key={room.roomType} room={room} />) }
							</div>
						</div>
					</AppSection>
				</>
			)
			}
			{ loading && <LoadingSpinner />}
			{	error && <NotFound />}
		</>
	);
}

export default HotelDetail;