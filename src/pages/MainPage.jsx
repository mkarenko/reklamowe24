import React from 'react';

import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ScrollButton from '../components/ScrollButton';
import ImageCarousel from '../components/ImageCarousel';
import CategoryCarousel from '../components/CategoryCarousel';
import {Divider} from '../components/Divider';
import BestSellers from '../components/BestSellers';

const MainPage = () => (
	<div className='w-screen flex-col'>
		<Header />
		<NavBar />
		<ImageCarousel />
		<Divider />
		<CategoryCarousel />
		<Divider />
		<BestSellers />
		<Footer />
		<ScrollButton />
	</div>
);

export default MainPage;
