import React, {useEffect, useRef, useState} from 'react';

import {offers} from '../db/offers';
import SearchModal from './SearchModal';
import CategoryModal from './CategoryModal';

import {arrowDown, searchCircle} from 'ionicons/icons';
import lock from '../assets/icons/lock.png';
import cart from '../assets/icons/cart.png';

const NavBar = () => {
	const modalRef = useRef();
	const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
	const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState(null);
	const [selectedSubcategories, setSelectedSubcategories] = useState([]);

	useEffect(() => {
		document.addEventListener('keyup', handleKeyUp);

		return () => {
			document.removeEventListener('keyup', handleKeyUp);
		};
	}, []);

	const handleKeyUp = (event) => {
		if (event.keyCode === 27) {
			closeModal();
		}
	};

	const handleCloseModal = (event) => {
		if (modalRef.current === event.target) {
			closeModal();
		}
	};

	const openCategoryModal = () => {
		setIsCategoryModalOpen(true);
	};

	const openSearchModal = () => {
		setIsSearchModalOpen(true);
	};

	const closeModal = () => {
		setIsCategoryModalOpen(false);
		setIsSearchModalOpen(false);
	};

	const handleCategoryClick = (category) => {
		setSelectedCategory(category);
		setSelectedSubcategories(category.subcategories);
		openCategoryModal();
	};

	const handleSearchButtonClick = () => {
		openSearchModal();
	};

	return (
		<React.Fragment>
			<nav className='w-full flex justify-between items-center sticky top-0 z-20 py-2 px-[90px] border-b-[1px] bg-white'>
				<div className='flex items-center space-x-8'>
					{offers.map((category) => (
						<div key={category.id} className='flex relative hover:cursor-pointer'>
							<div className='text-[20px] font-[400]' onClick={() => handleCategoryClick(category)}>
								{category.name}
							</div>
							<img id='dropdown' src={arrowDown} className='h-6' alt='dropdown' />
						</div>
					))}
					<div className='text-xl font-semibold underline hover:cursor-pointer'>Kontakt</div>

					<button
						className='w-[240px] border-[1px] border-gray-300 rounded-full hover:cursor-pointer'
						onClick={handleSearchButtonClick}
					>
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

			{isCategoryModalOpen && (
				<CategoryModal
					modalRef={modalRef}
					selectedCategory={selectedCategory}
					selectedSubcategories={selectedSubcategories}
					closeModal={closeModal}
					handleCloseModal={handleCloseModal}
				/>
			)}

			{isSearchModalOpen && (
				<SearchModal
					modalRef={modalRef}
					closeModal={closeModal}
					handleCloseModal={handleCloseModal}
				/>
			)}
		</React.Fragment>
	);
};

export default NavBar;
