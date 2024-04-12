import React from 'react';

const Divider = ({width, height, color, opacity, isRotated}) => (
	<div
		style={{
			width: width,
			height: height,
			backgroundColor: color,
			opacity: opacity,
			transform: isRotated ? 'rotate(90deg)' : 'none',
		}}
	/>
);

Divider.defaultProps = {
	width: '100%',
	height: '1px',
	color: '#DFDFDF',
	margin: '0 auto',
	padding: '0 auto',
	opacity: '100%',
};

Divider.displayname = 'Divider';

export default Divider;
