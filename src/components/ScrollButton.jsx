import arrowUp from '../assets/arrow_up.svg';
import {useState} from 'react';

const ScrollButton = () => {
	const [showButton, setShowButton] = useState(false);

	const handleScroll = () => {
		const currentPosition = window.scrollY;
		const showThreshold = 400;
		setShowButton(currentPosition > showThreshold);
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	window.addEventListener('scroll', handleScroll);

	return (
		<button
			style={{transition: 'opacity 0.3s ease'}}
			className={`fixed bottom-20 right-10 p-4 bg-sand rounded-full ease-in duration-500 ${
				showButton ? 'opacity-100' : 'opacity-0'
			}`}
			onClick={scrollToTop}
		>
			<img alt='GoUpButton' src={arrowUp} />
		</button>
	);
};

export default ScrollButton;
