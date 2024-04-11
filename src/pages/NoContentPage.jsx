import React from 'react';
import {Link} from 'react-router-dom';

const NoContentPage = () => {
	return (
		<div className='min-h-screen flex flex-col justify-center items-center bg-gray-200'>
			<h1 className='text-4xl font-bold text-center mb-6'>Brak zawartości</h1>
			<p className='text-lg text-gray-700 mb-8'>
				Przepraszamy, ale nie ma tutaj nic do wyświetlenia.
			</p>
			<Link
				to='/'
				className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300'
			>
				Wróć do strony głównej
			</Link>
		</div>
	);
};

export default NoContentPage;
