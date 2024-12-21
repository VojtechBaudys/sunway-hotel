import { useParams } from 'react-router';

function HotelDetail() {
	const { id } = useParams();

	return (
		<p>/hotels/{id}</p>
	);
}

export default HotelDetail;