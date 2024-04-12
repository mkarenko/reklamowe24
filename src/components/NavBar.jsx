import React, {useEffect, useRef, useState} from 'react';

import {offers} from '../db/offers';
import SearchModal from './SearchModal';
import CategoryModal from './CategoryModal';
import BaseButton from './BaseButton';

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
		}; // eslint-disable-next-line
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
			<nav
				className='px-2 lg:px-4 xl:px-[90px] py-2 w-full min-h-[58px] flex justify-start items-center
				lg:sticky lg:top-0 lg:z-20 border-b-[1px] bg-white'
			>
				<div className='w-full flex justify-start items-center lg:space-x-4 xl:space-x-8'>
					<div className='flex items-center lg:space-x-4 xl:space-x-8 sm:hidden md:hidden'>
						{offers.map((category) => (
							<div
								key={category.id}
								className='w-[180px] flex relative whitespace-nowrap hover:cursor-pointer'
							>
								<div className='text-[20px]' onClick={() => handleCategoryClick(category)}>
									{category.name}
								</div>
								<img id='dropdown' src={arrowDown} className='h-6' alt='dropdown' />
							</div>
						))}
						<div className='text-xl font-semibold underline hover:cursor-pointer'>Kontakt</div>
					</div>
					<div className='sm:w-full md:w-full lg:w-full xl:min-w-[240px]'>
						<button
							className='w-full border-[1px]
						border-gray-300 rounded-full hover:cursor-pointer'
							onClick={handleSearchButtonClick}
						>
							<div className='flex justify-between items-center'>
								<div className='ml-4 text-darkGray'>Szukaj produktu</div>
								<img alt='search' src={searchCircle} className='w-14' />
							</div>
						</button>
					</div>
				</div>

				<div className='sm:hidden md:hidden lg:hidden flex flex-row justify-center items-center space-x-2'>
					<BaseButton icon={lock} iconClassName='w-4' />
					<BaseButton icon={cart} iconClassName='w-9' />
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
