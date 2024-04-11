import React from 'react';

import arrowNext from '../assets/icons/arrow_next.svg';

const CategoryModal = ({selectedCategory, selectedSubcategories, modalRef, handleCloseModal}) => {
	return (
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
	);
};

export default CategoryModal;
