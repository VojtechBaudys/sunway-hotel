import React from 'react';
import { BrowserRouter } from 'react-router';

import AppFooter from './AppFooter';
import AppHeader from './AppHeader';
import MainContent from './MainContent';

type Props = { 
	children: React.ReactNode;
};

const Layout = (props: Props): React.ReactElement => {
	return (
		<BrowserRouter>
			<div className='flex flex-col min-h-screen'>
				<AppHeader />
				<MainContent>
					{props.children}
				</MainContent>
				<AppFooter />
			</div>
		</BrowserRouter>
	);
};

export default Layout;