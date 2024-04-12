import React from 'react';

import googleLogo from '../assets/logos/google_logo.png';
import star from '../assets/icons/star.svg';

const BaseReview = ({name, img, date, desc}) => {
	return (
		<div className='max-w-[300px] flex flex-col justify-start rounded-3xl bg-[#F4F4F4] p-4 pb-8'>
			<div className='flex justify-between'>
				<div className='flex items-center gap-3'>
					<img alt={img} src={img} className='w-9 h-9' />
					<div className=''>
						<strong>{name}</strong>
						<div className='text-sm text-darkGray'>{date}</div>
					</div>
				</div>
				<img alt='google_logo' src={googleLogo} className='w-6 h-6' />
			</div>
			<div className='flex space-x-0.5'>
				{Array.from({length: 5}).map((_, index) => (
					<img key={index} alt='start' src={star} className='w-[22px] h-[31px]' />
				))}
			</div>

			<div className='leading-relaxed'>{desc}</div>
		</div>
	);
};

export default BaseReview;
