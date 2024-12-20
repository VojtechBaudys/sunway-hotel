import { Routes, Route, BrowserRouter, Navigate } from 'react-router';
import Hotels from '@/pages/hotels';
import HotelDetail from '@/pages/hotels/[id]';

function AppRouter() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/hotels' element={<Hotels />} />
				<Route path='/hotels/:id' element={<HotelDetail />} />
				<Route path='*' element={<Navigate to="/hotels" />} />
			</Routes>
		</BrowserRouter>
	);
}

export default AppRouter;