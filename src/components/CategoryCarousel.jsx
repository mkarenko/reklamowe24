import React, {useState} from 'react';
import {categories} from '../db/categories';

const CategoryCarousel = () => {
	const [currentPage, setCurrentPage] = useState(1);

	const startIndex = (currentPage - 1) * 10;
	const endIndex = Math.min(startIndex + 11, categories.length);
	const categoriesToDisplay = categories.slice(startIndex, endIndex);

	console.log(currentPage);
	console.log(endIndex);

	return (
		<div className='w-screen flex-col px-[90px] py-4'>
			<div className='relative mb-3 text-[40px] text-font font-[400]'>Kategorie</div>
			<div
				className='overflow-hidden rounded-3xl flex justify-between'
				style={{
					display: 'flex',
					transition: 'transform 0.5s ease-in-out',
					transform: `translateX(-${currentPage - 1 * 100}%)`,
				}}
			>
				{categoriesToDisplay.map((category) => (
					<div key={category.id}>
						<img
							src={category.img}
							alt={category.name}
							className='hover:cursor-pointer rounded-3xl'
						/>
					</div>
				))}
			</div>
			<div className='flex justify-center space-x-5 py-6'>
				{Array.from({length: Math.ceil(categories.length / 11)}).map((_, index) => (
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
