import React from 'react';

type Props = { 
	children: React.ReactNode;
};

const MainContent = (props: Props): React.ReactElement => {
	return (
		<main className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 lg:px-6 box-content'>
			{props.children}
		</main>
	);
};

export default MainContent;