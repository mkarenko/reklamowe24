import React from 'react';

const Divider = ({width, height, color, margin, padding, opacity}) => (
	<div
		style={{
			flex: 'flex',
			justifyItems: 'justify-center',
			alignItems: 'items-center',
			width: width,
			height: height,
			backgroundColor: color,
			margin: margin,
			padding: padding,
			opacity: opacity,
		}}
	/>
);

Divider.defaultProps = {
	width: '100%',
	height: '1px',
	color: '#BBB',
	margin: '0 auto',
	// padding: '0px 0px 0px 0px',
	opacity: '100%',
};

Divider.displayname = 'Divider';

export default Divider;
