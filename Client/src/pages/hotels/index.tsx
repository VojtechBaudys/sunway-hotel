import React, { useEffect, useState } from 'react';
import { IHotel } from '@/types';
import HotelCard from '@/components/Hotels/HotelCard';
import LoadingSpinner from '@/components/shared/LoadingSpinner';
import AppSection from '@/components/Layout/AppSection';
import useAxios from '@/utils/api';

function Hotels(): React.ReactElement {
	const { data, loading } = useAxios<IHotel[]>('/hotels', 'GET');
	const [hotels, setHotels] = useState<IHotel[]>([]);

	useEffect(() => {
		if (data != null) setHotels(data);
	}, [data]);

	return (
		<>
			{ ( !loading && hotels != null) && (
				<AppSection>
					<div className='mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4'>
						{ hotels.map(hotel => <HotelCard key={hotel.id} hotel={hotel} />) }
					</div>
				</AppSection>
			)
			}
			{ loading && <LoadingSpinner />}
		</>
	);
}

export default Hotels;