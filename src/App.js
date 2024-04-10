import React from 'react';
import {Route, Routes} from 'react-router-dom';

import NotFoundPage from './pages/NotFoundPage';
import MainPage from './pages/MainPage';

const App = () => {
	return (
		<Routes>
			<Route path='*' element={<NotFoundPage />} />

			<Route path='/' element={<MainPage />} />
		</Routes>
	);
};

export default App;
