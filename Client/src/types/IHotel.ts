import { IRoom } from '.';

interface IHotel {
	id: number;
	name: string;
	location: string;
	rating: number;
	imageUrl: string;
	datesOfTravel: string[];
	boardBasis: string;
	rooms: IRoom[];
}

export default IHotel;