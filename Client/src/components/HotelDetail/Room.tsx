import React from 'react';
import { IRoom } from '@/types';
import RouterButton from '../shared/RouterButton';

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
				<RouterButton to={''}>
					Book Now
				</RouterButton>
			</div>
		</div>
	);
}

export default Room;