import React from 'react';

export const BaseHeader = ({name, cursiveName}) => (
	<div className={`sm:text-[30px] text-[40px] font-normal text-font`}>
		{name}&nbsp;
		<span className='sm:text-[28px] text-[40px] font-boska font-[900]'>{cursiveName}</span>
	</div>
);
