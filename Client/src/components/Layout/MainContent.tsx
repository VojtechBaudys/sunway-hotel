import React from 'react';

type Props = { 
	children: React.ReactNode;
};

const MainContent = (props: Props): React.ReactElement => {
	return (
		<main className='flex flex-wrap justify-between mx-auto max-w-screen-xl px-4 lg:px-6 box-content min-h-[calc(100vh-23.25rem)] sm:min-h-[calc(100vh-24.25rem)] md:min-h-[calc(100vh-25.25rem)] lg:min-h-[calc(100vh-25.75rem)]'>
			{props.children}
		</main>
	);
};

export default MainContent;