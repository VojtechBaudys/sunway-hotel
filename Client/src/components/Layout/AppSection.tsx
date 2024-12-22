import React from 'react';

type Props = { 
	children: React.ReactNode;
};

const AppSection = (props: Props): React.ReactElement => {
	return (
		<section className='py-4 md:py-8 w-full'>
			{props.children}
		</section>
	);
};

export default AppSection;