import React from 'react';
import { IHotel } from '@/types';
import data from '../../../data.json';
import HotelCard from '@/components/Hotels/HotelCard';

function Hotels(): React.ReactElement {
	const hotels: IHotel[] = data;

	return (
		<section className="py-8 antialiased md:py-12 w-full">
			<div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
				{
					hotels.map(hotel => <HotelCard key={hotel.id} hotel={hotel} />)
				}
			</div>
		</section>
	);
}

export default Hotels;