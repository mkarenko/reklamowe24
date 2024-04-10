import React, {useEffect, useState} from 'react';

const carouselImages = [
	{id: 0, name: 'Artykuły piśmiennicze', img: require('../assets/pens.jpeg')},
	{id: 1, name: 'Koszulki z nadrukiem', img: require('../assets/tshirts.jpeg')},
	{id: 2, name: 'Torby reklamowe', img: require('../assets/bags.jpeg')},
];

const ImageCarousel = () => {
	const [currentIndex, setCurrentIndex] = useState(1);
	const [intervalTime, setIntervalTime] = useState(5000);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
		}, intervalTime);

		return () => clearInterval(intervalId);
	}, [currentIndex, intervalTime]);

	const handleChangeImage = (id) => {
		setCurrentIndex(id);
		setIntervalTime(5000);
	};

	return (
		<div className='w-screen flex-col px-[90px] py-4'>
			<div className='relative overflow-hidden rounded-3xl'>
				<div
					style={{transform: `translateX(-${currentIndex * 100}%)`}}
					className='flex  transition-transform duration-500 ease-in-out'
				>
					{carouselImages.map((item) => (
						<div key={item.id} className='w-full flex-shrink-0 flex justify-center'>
							<img src={item.img} alt={item.name} className='hover:cursor-pointer rounded-3xl' />
						</div>
					))}
				</div>
			</div>
			<div className='flex justify-around py-6'>
				{carouselImages.map((item, index) => (
					<div className='flex flex-col items-center'>
						<div className={`p-1 mb-2 rounded-full ${index === currentIndex && 'bg-lightGreen'}`} />
						<button
							key={item.id}
							className={`hover:cursor-pointer ${
								index === currentIndex ? 'text-black' : 'text-darkGray'
							}`}
							onClick={() => handleChangeImage(item.id)}
						>
							{item.name}
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default ImageCarousel;
