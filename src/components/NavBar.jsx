import React, {useRef, useState} from 'react';

import lock from '../assets/lock.png';
import cart from '../assets/cart.png';
import arrowNext from '../assets/arrow_next.svg';
import {arrowDown, searchCircle} from 'ionicons/icons';
import {offers} from '../db/offers';

const NavBar = () => {
	const modalRef = useRef();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState(null);
	const [selectedSubcategories, setSelectedSubcategories] = useState([]);

	const handleCloseModal = (event) => {
		if (modalRef.current === event.target) {
			closeModal();
		}
	};

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const handleCategoryClick = (category) => {
		setSelectedCategory(category);
		setSelectedSubcategories(category.subcategories);
		openModal();
	};

	return (
		<>
			<div className='sticky top-0 z-20 py-2 px-[90px] flex border-b-[1px] bg-white'>
				<nav className='w-screen flex justify-between items-center'>
					<div className='flex items-center space-x-8'>
						{offers.map((category) => (
							<div key={category.id} className='flex relative hover:cursor-pointer'>
								<div
									className='text-[20px] font-[400]'
									onClick={() => handleCategoryClick(category)}
								>
									{category.name}
								</div>
								<img id='dropdown' src={arrowDown} className='h-6' alt='dropdown' />
							</div>
						))}
						<div className='text-xl font-semibold underline hover:cursor-pointer'>Kontakt</div>
						<button className='w-[240px] border-[1px] border-gray-300 rounded-full hover:cursor-pointer'>
							<div className='flex justify-between items-center'>
								<div className='ml-4 text-darkGray'>Szukaj produktu</div>
								<img alt='search' src={searchCircle} className='w-14' />
							</div>
						</button>
					</div>

					<div className='flex space-x-4'>
						<button id='loginButton' type='button' className='hover:cursor-pointer'>
							<img alt='lock' src={lock} />
						</button>
						<button id='cartButton' type='button' className='hover:cursor-pointer'>
							<img alt='cart' src={cart} />
						</button>
					</div>
				</nav>
			</div>

			{isModalOpen && (
				<div
					ref={modalRef}
					className='sticky top-10 flex items-center justify-center bg-[f9f9f9]'
					onClick={handleCloseModal}
				>
					<div className='flex flex-col items-start justify-between p-3 bg-white rounded-xl shadow-lg border-[1px]'>
						{selectedSubcategories.map((subcategory, index) => (
							<div className='w-auto flex justify-between'>
								<div key={index}>{subcategory}</div>
								{selectedCategory.id === 1 && <img alt='arrow_next' src={arrowNext} />}
							</div>
						))}
					</div>
				</div>
			)}
		</>
	);
};

export default NavBar;
