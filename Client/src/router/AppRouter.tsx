import React from 'react';
import { Routes, Route, Navigate } from 'react-router';

import Hotels from '@/pages/hotels';
import HotelDetail from '@/pages/hotels/[id]';

function AppRouter(): React.ReactElement {
	return (
		<Routes>
			<Route path='hotels'>
				<Route index element={<Hotels />} />
				<Route path=':id' element={<HotelDetail />} />
			</Route>
			<Route path='*' element={<Navigate to="/hotels" />} />
		</Routes>
	);
}

export default AppRouter;