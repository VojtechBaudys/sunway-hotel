import React, { useState } from 'react';
import { Link } from 'react-router';

const PageHeader = (): React.ReactElement => {
	const [showMenu, setShowMenu] = useState<boolean>(false);

	return (
		<header>
			<nav className="bg-white border-gray-200 px-4 lg:px-6 py-4">
				<div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
					<Link to={'/'} className="flex items-center">
						<img src="https://www.sunway.ie/images/new/logo.png" className="mr-3 h-12 sm:h-16" alt="Sunway Logo" />
					</Link>
					<div className={`absolute bg-white ${showMenu ? 'top-[0]': 'top-[-100%]'} transition-all duration-500 left-0 justify-between items-center w-full lg:flex lg:relative lg:w-auto lg:order-1`}>
						<ul className="flex flex-col py-4 text-lg font-medium lg:flex-row lg:space-x-8 lg:mt-0">
							<li className='self-end'>
								<button onClick={() => setShowMenu(!showMenu)} type="button" className='items-center p-2 ml-1 mr-4 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200'>
									<span className="sr-only">Close main menu</span>
									<svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
								</button>
							</li>
							<li>
								<Link to={'/hotels'} className="block p-4 text-center text-gray-700 lg:hover:text-primary-700 hover:underline">Hotels</Link>
							</li>
						</ul>
					</div>
					<button onClick={() => setShowMenu(!showMenu)} type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
						<span className="sr-only">Open main menu</span>
						<svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
					</button>
				</div>
			</nav>
		</header>
	);
};

export default PageHeader;