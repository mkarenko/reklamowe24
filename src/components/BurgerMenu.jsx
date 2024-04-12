import React, {useState} from 'react';

import burgerMenu from '../assets/icons/burger_menu.svg';

const BurgerMenu = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className='lg:hidden xl:hidden relative pl-1 pr-3'>
			<img
				alt='burger_menu'
				src={burgerMenu}
				onClick={toggleMenu}
				className='flex cursor-pointer w-[25px]'
			/>
			<div
				className={`z-30 fixed top-0 left-0 h-screen transition-all duration-300 ${
					isOpen ? 'translate-x-0' : '-translate-x-full'
				} w-48 bg-white border border-gray-300 rounded-md shadow-md px-4 py-2 mt-2`}
			>
				<div className='py-1 hover:bg-gray-100 cursor-pointer'>Menu Item 1</div>
				<div className='py-1 hover:bg-gray-100 cursor-pointer'>Menu Item 2</div>
				<div className='py-1 hover:bg-gray-100 cursor-pointer'>Menu Item 3</div>
				<div className='py-1 hover:bg-gray-100 cursor-pointer'>Menu Item 4</div>
			</div>
			<div
				className={`fixed top-0 left-0 w-full h-screen bg-black opacity-50 z-10 ${
					isOpen ? 'block' : 'hidden'
				}`}
				onClick={toggleMenu}
			></div>
		</div>
	);
};

export default BurgerMenu;
