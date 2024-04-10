import React from 'react';

export const Divider = ({width, height, color}) => {
	return (
		<div
			className={`
            ${width ? width : 'w-full'}
            ${color ? color : 'bg-gray-100'}
            ${height ? height : 'h-[1px]'}
            `}
		/>
	);
};
