import React, { useEffect, useState } from 'react';
import useAxios from '@/utils/api';
import { IHotel } from '@/types';

import HotelCard from '@/components/Hotels/HotelCard';
import LoadingSpinner from '@/components/shared/LoadingSpinner';
import AppSection from '@/components/Layout/AppSection';

function Hotels(): React.ReactElement {
	// api fetch
	const { data, loading } = useAxios<IHotel[]>('/hotels', 'GET');
	// all hotels
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