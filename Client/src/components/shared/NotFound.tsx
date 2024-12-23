import React from 'react';
import RouterButton from './RouterButton';

function NotFound(): React.ReactElement {
	return (
		<section className='flex'>
			<div className="self-center py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
				<div className="mx-auto max-w-screen-sm text-center">
					<h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-blue-500">404</h1>
					<p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">Something's missing.</p>
					<p className="mb-4 text-lg font-light text-gray-500">Sorry, we can't find that page. </p>
					<RouterButton to={'/'}>Back to Homepage</RouterButton>
				</div>
			</div>
		</section>
	);
}

export default NotFound;
