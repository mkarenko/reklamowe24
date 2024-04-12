import React from 'react';

const BaseButton = ({icon, className, iconClassName, text}) => {
	return (
		<div className={className ?? 'h-full w-full'}>
			<button className={`${className ? className : 'h-full w-full'}`}>
				{icon && (
					<img
						alt={typeof icon === 'string' ? icon : 'icon'}
						src={typeof icon === 'string' ? icon : undefined}
						className={iconClassName}
					/>
				)}
				{text}
			</button>
		</div>
	);
};

export default BaseButton;
