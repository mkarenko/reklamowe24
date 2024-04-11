import React from 'react';

const BaseContainer = ({width, height, name, src}) => {
	return (
		<img
			alt={name}
			src={src}
			style={{transitionProperty: 'box-shadow, transform', height: height, width: width}}
			className='hover:cursor-pointer flex justify-center items-center border rounded-3xl
		    transition duration-300 ease-in-out transform origin-top hover:shadow-lg hover:-translate-y-1'
		/>
	);
};

export default BaseContainer;
