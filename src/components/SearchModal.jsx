import React, {useEffect, useRef, useState} from 'react';

import Divider from './Divider';

import back from '../assets/icons/modal_back.svg';
import down from '../assets/icons/modal_down.svg';
import esc from '../assets/icons/modal_esc.svg';
import sparkles from '../assets/icons/modal_sparkles.svg';
import trending from '../assets/icons/modal_trending.svg';
import up from '../assets/icons/modal_up.svg';

const searchCategories = [
	{id: 0, name: 'Torby na zakupy'},
	{id: 1, name: 'Bidony i butelki'},
	{id: 2, name: 'Torby bawełniane'},
	{id: 3, name: 'T-shirty'},
	{id: 4, name: 'Polary'},
];

const SearchModal = ({modalRef, handleCloseModal}) => {
	const inputRef = useRef([]);
	const categoriesRef = useRef([]);
	const [value, setValue] = useState('');
	const [selectedIndex, setSelectedIndex] = useState(null);

	useEffect(() => document.getElementById('inputId').focus());

	useEffect(() => {
		if (selectedIndex !== null) {
			categoriesRef.current[selectedIndex].focus();
		}
	}, [selectedIndex]);

	const handleKeyDown = (event) => {
		if (event.key === 'ArrowDown') {
			event.preventDefault();
			setSelectedIndex((prevIndex) => {
				if (prevIndex === null || prevIndex === searchCategories.length - 1) {
					return 0;
				}
				return prevIndex + 1;
			});
			inputRef.current.blur();
		} else if (event.key === 'ArrowUp') {
			event.preventDefault();
			setSelectedIndex((prevIndex) => {
				if (prevIndex === null || prevIndex === 0) {
					return searchCategories.length - 1;
				}
				return prevIndex - 1;
			});
			inputRef.current.blur();
		} else if (event.key === 'Enter') {
			setValue(searchCategories.name);
		}
	};

	return (
		<div
			ref={modalRef}
			className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
            flex items-center justify-center bg-[rgba(0,0,0,0.5)] w-screen h-screen z-50'
			onClick={handleCloseModal}
		>
			<div className='w-1/4  bg-white rounded-lg p-4' onKeyDown={handleKeyDown}>
				<div className='flex flex-col'>
					<input
						id='inputId'
						ref={inputRef}
						placeholder='Szukaj produktu'
						className='h-10 border border-lightGray rounded-lg py-2 px-4 mb-4'
						onChange={(e) => setValue(e.target.value)}
					/>

					{value.length < 3 && (
						<div className='flex flex-col'>
							{searchCategories.map((c, index) => (
								<div
									key={c.id}
									ref={(ref) => (categoriesRef.current[index] = ref)}
									className={`flex flex-col justify-center items-start border-x border-b p-3
                                    border-lightGray hover:cursor-pointer hover:bg-lightGray
                                    ${index == searchCategories.length - 1 && 'rounded-b-lg'}
                                    ${index === 0 && 'border-t-[1px] rounded-t-lg'}
                                    ${selectedIndex === index && 'bg-customBlue'}`}
								>
									<div className='text-[12px]'>Popularne</div>
									<div className='flex space-x-1'>
										<img alt='trending' src={trending} />
										<strong>{c.name}</strong>
									</div>
								</div>
							))}
						</div>
					)}

					{value.length > 2 && (
						<div className='flex flex-col justify-center items-start border-x border-b p-3 border-lightGray hover:cursor-pointer hover:bg-lightGray'>
							<div className='text-[12px]'>Kliknij aby wyszukać</div>
							<div className='flex space-x-1'>
								<img alt='sparkles' src={sparkles} />
								<strong>{value}</strong>
							</div>
						</div>
					)}

					<div className='pt-10 pb-4'>
						<Divider />
					</div>

					<div className='flex space-x-4'>
						<div className='flex items-center space-x-2'>
							<img
								alt='back'
								src={back}
								className='flex justify-center items-center p-1.5 rounded-[4px] bg-font w-7 h-7'
							/>
							<div className='text-sm text-gray-600'>Wybór</div>
						</div>
						<div className='flex items-center space-x-2'>
							<img
								alt='down'
								src={down}
								className='flex justify-center items-center p-1.5 rounded-[4px] bg-font w-7 h-7'
							/>
							<img
								alt='up'
								src={up}
								className='flex justify-center items-center p-1.5 rounded-[4px] bg-font w-7 h-7'
							/>
							<div className='text-sm text-gray-600'>Nawigacja</div>
						</div>
						<div className='flex items-center space-x-2'>
							<img
								alt='esc'
								src={esc}
								className='flex justify-center items-center p-1.5 rounded-[4px] bg-font w-7 h-7'
							/>
							<div className='text-sm text-gray-600'>Zamknięcie</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SearchModal;
