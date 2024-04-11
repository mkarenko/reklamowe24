import React from 'react';
import {Route, Routes} from 'react-router-dom';

import HomePage from './pages/HomePage';
import NoContentPage from './pages/NoContentPage';

const App = () => {
	return (
		<Routes>
			<Route path='/404' element={<NoContentPage />} />

			<Route path='/' element={<HomePage />} />
		</Routes>
	);
};

export default App;
