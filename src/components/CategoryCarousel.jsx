import React, {useEffect, useState} from 'react';
import {categories} from '../db/categories';

const CategoryCarousel = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [resolution, setResolution] = useState({width: 0, height: 0});

	const startIndex = (currentPage - 1) * 10;
	const itemsPerPage = resolution.width < '1199' ? 9 : 11;
	const endIndex = Math.min(startIndex + itemsPerPage, categories.length);
	const categoriesToDisplay = categories.slice(startIndex, endIndex);

	useEffect(() => {
		const handleResize = () => {
			setResolution({width: window.screen.width, height: window.screen.height});
		};

		window.addEventListener('resize', handleResize);
		setResolution({width: window.screen.width, height: window.screen.height});

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<div className='w-full xl:flex-col py-4'>
			<div
				className='xl:flex xl:justify-between grid grid-cols-3 grid-rows-3 items-center
				overflow-hidden rounded-3xl transition-transform duration-500 ease-in-out'
			>
				{categoriesToDisplay.map((category) => (
					<div key={category.id} className='flex justify-center'>
						<img
							src={category.img}
							alt={category.name}
							className='hover:cursor-pointer rounded-3xl'
						/>
					</div>
				))}
			</div>
			<div className='flex justify-center space-x-5 py-6'>
				{Array.from({length: Math.ceil(categories.length / itemsPerPage)}).map((_, index) => (
					<div className='flex flex-col items-center' key={index}>
						<button
							className={`hover:cursor-pointer mb-2  ${
								currentPage === index + 1
									? 'bg-lightGreen transition-all duration-500 p-1 px-4 rounded-full'
									: 'bg-gray-300 transition-all duration-500 p-1 rounded-full'
							}`}
							onClick={() => setCurrentPage(index + 1)}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default CategoryCarousel;
