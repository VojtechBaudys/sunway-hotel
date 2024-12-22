import React, { useState } from 'react';
import { IHotel } from '@/types';
import data from '../../../data.json';
import HotelCard from '@/components/Hotels/HotelCard';
import LoadingSpinner from '@/components/shared/LoadingSpinner';
import AppSection from '@/components/Layout/AppSection';

function Hotels(): React.ReactElement {
	const [loading] = useState<boolean>(false);
	const hotels: IHotel[] = data;

	return (
		<AppSection>
			{ !loading
				? (
					<div className='mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4'>
						{ hotels.map(hotel => <HotelCard key={hotel.id} hotel={hotel} />) }
					</div>
				)
				: <LoadingSpinner />
			}
		</AppSection>
	);
}

export default Hotels;