import React, {useEffect, useRef, useState} from 'react';

import arrowCircleUp from '../assets/icons/arrow_circle_up.svg';

const BaseGadget = ({title, img, desc}) => {
	const contentRef = useRef(null);
	const [isExpanded, setIsExpanded] = useState(true);

	useEffect(() => {
		if (isExpanded) {
			contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
			return;
		}
		contentRef.current.style.maxHeight = '0';
	}, [isExpanded]);

	const toggleExpansion = () => {
		setIsExpanded(!isExpanded);
	};

	// Function for rendering different font for words 'Gadgets + 1 word after'
	const renderTitleWithFonts = (title) => {
		const parts = title.split(' ');
		let hasGadzety = false;

		return parts.map((part, index) => {
			let fontClass = '';
			if (part.toLowerCase() === 'gadżety' && !hasGadzety) {
				fontClass = 'font-bold font-boska';
				hasGadzety = true;
			} else if (hasGadzety) {
				fontClass = 'font-bold font-boska';
				hasGadzety = false;
			} else {
				fontClass = 'font-normal';
			}

			return (
				<span key={index} className={fontClass}>
					{part}{' '}
				</span>
			);
		});
	};

	return (
		<div className='rounded-3xl bg-[#F4F4F4] p-5 overflow-hidden transition-height duration-300'>
			<div
				className='flex justify-between items-center hover:cursor-pointer'
				onClick={toggleExpansion}
			>
				<div className={`text-[32px] ${!isExpanded && 'text-font'}`}>
					{renderTitleWithFonts(title)}
				</div>
				<img
					alt='arrow_up'
					src={arrowCircleUp}
					className={`w-20 transform transition-transform duration-300 ${
						isExpanded ? '' : 'rotate-180'
					}`}
				/>
			</div>

			<div
				ref={contentRef}
				className='overflow-hidden transition-max-height duration-300'
				style={{maxHeight: isExpanded ? 'auto' : 0}}
			>
				<div className='w-full flex justify-between space-x-14'>
					<img alt={img} src={img} className='w-1/3 max-h-auto rounded-3xl' />
					<div className='w-2/3 leading-relaxed py-5'>{desc}</div>
				</div>
			</div>
		</div>
	);
};

export default BaseGadget;
