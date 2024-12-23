import { IRoom } from '@/types';

// Formates array of dates to string (Apr 1 - Apr 10, 2024)
export function formateDateInterval(dates: string[]): string {
	const formatDate = (dateString: string) => {
		return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' }).format(new Date(dateString));
	};
	
	return `${formatDate(dates[0])} - ${formatDate(dates[1])}, ${new Date(dates[0]).getFullYear()}`;
}

// Formates all rooms to single string (Rooms available: 22 (Luxury Suite, Standard Room))
export function formateRoomsAvailability(rooms: IRoom[]): string {
	const totalAmount = rooms.reduce((sum, room) => sum + room.amount, 0);
	const allTypes = rooms.map(room => room.roomType).join(', ');

	return `Rooms available: ${totalAmount} (${allTypes})`;
}

// split text to first X chars + ... (Rooms available: 15 (Luxury Villa, Family Room, Single...)
export function truncateText(text: string, maxLength: number): string {
	if (text.length < maxLength) return text;
	return text.slice(0, maxLength - 3) + '...';
}