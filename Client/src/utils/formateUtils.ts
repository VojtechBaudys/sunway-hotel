import { IRoom } from '@/types';

export function formateDateInterval(dates: string[]): string {
	const formatDate = (dateString: string) => {
		return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' }).format(new Date(dateString));
	};
	
	return `${formatDate(dates[0])} - ${formatDate(dates[1])}, ${new Date(dates[0]).getFullYear()}`;
}

export function formateRoomsAvailability(rooms: IRoom[]): string {
	const totalAmount = rooms.reduce((sum, room) => sum + room.amount, 0);
	const allTypes = rooms.map(room => room.roomType).join(', ');

	return `Rooms available: ${totalAmount} (${allTypes})`;
}

export function truncateText(text: string, maxLength: number): string {
	if (text.length < maxLength) return text;
	return text.slice(0, maxLength - 3) + '...';
}