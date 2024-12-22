import React from 'react';
import { Link } from 'react-router';

const PageFooter = (): React.ReactElement => {
	return (
		<footer className='pt-4 bg-white md:pt-8 lg:pt-10'>
			<div className='flex flex-col items-center text-center'>
				<Link to={'/'}>
					<img src='https://www.sunway.ie/images/new/logo.png' alt='Sunway Logo' />
				</Link>
				<div className='w-full bg-footer-texture h-16'></div>
				<div className='w-full bg-sunway-blue py-4'>
					<ul className='flex flex-wrap justify-center items-center mb-6 text-gray-900'>
						<li>
							<Link to='/about' className='mr-4 hover:underline md:mr-6 text-white'>About</Link>
						</li>
						<li>
							<Link to='/faqs' className='mr-4 hover:underline md:mr-6 text-white'>FAQs</Link>
						</li>
						<li>
							<Link to='/contact' className='mr-4 hover:underline md:mr-6 text-white last-of-type:md:mr-0'>Contact</Link>
						</li>
					</ul>
					<span className='text-sm text-gray-200 sm:text-center'>© {new Date().getFullYear()} <Link to={'/'} className='hover:underline'>Sunway</Link>. All Rights Reserved.</span>
				</div>
			</div>
		</footer>
	);
};

export default PageFooter;