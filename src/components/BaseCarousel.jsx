import React, {useEffect, useState} from 'react';

const BaseCarousel = ({header, list, itemsPerPage, timeInterval, showControls}) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [, setCurrentPage] = useState(1);

	const intervalTime = 5000;
	const startIndex = currentIndex;
	const endIndex = Math.min(startIndex + itemsPerPage, list.length);
	const listToDisplay = list.slice(startIndex, endIndex);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % list.length);
		}, intervalTime);

		return () => clearInterval(intervalId);
		// eslint-disable-next-line
	}, [currentIndex, intervalTime]);

	const handleControlClick = (index) => {
		if (showControls) {
			setCurrentPage(index + 1);
		} else {
			const newIndex = index * itemsPerPage;
			const maxIndex = Math.max(0, list.length - itemsPerPage);
			setCurrentIndex(Math.min(newIndex, maxIndex));
		}
	};

	return (
		<div className='w-full flex-col py-4'>
			<div className='relative mb-3 text-[40px] text-font font-[400]'>{header}</div>
			<div
				className='flex overflow-hidden rounded-3xl justify-between'
				style={{
					transition: 'transform 0.5s ease-in-out',
					transform: `translateX(-${(100 / itemsPerPage) * currentIndex}%)`,
				}}
			>
				{listToDisplay.map((item) => (
					<div key={item.id}>
						<img src={item.img} alt={item.name} className='hover:cursor-pointer rounded-3xl' />
					</div>
				))}
			</div>
			{showControls && (
				<div className='flex justify-center space-x-5 py-6'>
					{Array.from({length: Math.ceil(list.length / itemsPerPage)}).map((_, index) => (
						<div className='flex flex-col items-center' key={index}>
							<button
								className={`hover:cursor-pointer mb-2  ${
									currentIndex / itemsPerPage === index ? 'bg-lightGreen' : 'bg-gray-300'
								} transition-all duration-500 p-1 px-4 rounded-full`}
								onClick={() => handleControlClick(index)}
							/>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default BaseCarousel;
