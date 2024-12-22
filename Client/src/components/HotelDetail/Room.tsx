import React from 'react';
import { IRoom } from '@/types';
import AppRouterButton from '../shared/AppRouterButton';

type Props = {
	room: IRoom;
}

function Room(props: Props): React.ReactElement {
	const {room} = props;

	return (
		<div className='p-4 rounded-lg border border-gray-200 bg-white flex justify-between items-center'>
			<div>
				<h3 className='text-lg font-bold text-gray-800'>{room.roomType}</h3>
				<p className='text-gray-700'>Available: {room.amount}</p>
			</div>
			<div>
				<AppRouterButton to={''}>
					Book Now
				</AppRouterButton>
			</div>
		</div>
	);
}

export default Room;