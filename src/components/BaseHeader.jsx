import React from 'react';

export const BaseHeader = ({name, cursiveName}) => (
	<div className={`text-[40px] font-normal text-font`}>
		{name}&nbsp;
		<span className='text-[40px] font-boska font-[900]'>{cursiveName}</span>
	</div>
);
