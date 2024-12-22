import React from 'react';
import { BrowserRouter } from 'react-router';
import PageFooter from './PageFooter';
import PageHeader from './PageHeader';
import MainContent from './MainContent';

type Props = { 
	children: React.ReactNode;
};

const Layout = (props: Props): React.ReactElement => {
	return (
		<BrowserRouter>
			<PageHeader />
			<MainContent>
				{props.children}
			</MainContent>
			<PageFooter />
		</BrowserRouter>
	);
};

export default Layout;