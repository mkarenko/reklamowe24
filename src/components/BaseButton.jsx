import {forwardRef} from 'react';

const BaseButton = forwardRef(
	({text, textClass, fill, mode, icon, iconPosition, className, ...props}, ref) => {
		const isIconPositionLeft = icon && props.iconPosition === 'left';
		const isIconPositionRight = icon && props.iconPosition === 'right';
		const isIconPositionCenter = icon && props.iconPosition === 'center';

		const flexDirection = isIconPositionCenter ? 'flex-col space-y-2' : 'flex-row space-x-2';

		return (
			<div className={className ?? 'h-full w-full'}>
				<button
					{...props}
					ref={ref}
					className='h-full w-full'
					style={{
						borderRadius: '9999px', // shape='round' equivalent for IonButton
						backgroundColor: fill === 'clear' ? 'transparent' : 'blue', // Adjust as needed
						color: fill === 'clear' ? 'blue' : 'white', // Adjust as needed
						border: fill === 'outline' ? '2px solid blue' : 'none', // Adjust as needed
						padding: '0.5rem 1rem', // Adjust as needed
					}}
				>
					<div className={`flex ${flexDirection} items-center justify-center`}>
						{isIconPositionLeft && icon}
						{isIconPositionCenter && icon}
						<div className={textClass ?? 'text-base font-normal normal-case tracking-wide'}>
							{text}
						</div>
						{isIconPositionRight && icon}
					</div>
				</button>
			</div>
		);
	}
);

BaseButton.defaultProps = {
	textClass: undefined,
	fill: undefined,
	mode: undefined,
	icon: null,
	iconPosition: undefined,
	isLoading: false,
};

BaseButton.displayName = 'BaseButton';

export default BaseButton;
