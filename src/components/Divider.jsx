import React from 'react';

const Divider = ({width, height, color, margin, opacity}) => (
	<div
		style={{
			flex: 'flex',
			justifyItems: 'justify-center',
			alignItems: 'items-center',
			width: width,
			height: height,
			backgroundColor: color,
			margin: margin,
			opacity: opacity,
		}}
	/>
);

Divider.defaultProps = {
	width: '100%',
	height: '1px',
	color: '#BBB',
	margin: '0px 0px',
	opacity: '0',
};

Divider.displayname = 'Divider';

export default Divider;
