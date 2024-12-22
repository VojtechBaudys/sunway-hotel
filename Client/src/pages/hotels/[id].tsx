import React from 'react';
import { useParams } from 'react-router';

function HotelDetail(): React.ReactElement {
	const { id } = useParams();

	return (
		<p>/hotels/{id}</p>
	);
}

export default HotelDetail;