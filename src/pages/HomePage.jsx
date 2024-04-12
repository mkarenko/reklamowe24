import React from 'react';

import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ScrollButton from '../components/ScrollButton';
import ImageCarousel from '../components/ImageCarousel';
import CategoryCarousel from '../components/CategoryCarousel';
import Divider from '../components/Divider';
import BaseCarousel from '../components/BaseCarousel';
import BaseReview from '../components/BaseReview';
import {BaseHeader} from '../components/BaseHeader';
import BaseContainer from '../components/BaseContainer';
import BaseGadget from '../components/BaseGadget';
import {companies} from '../db/companies';
import {brands} from '../db/brands';
import {reviews} from '../db/reviews';
import {gadgets} from '../db/gadgets';

const HomePage = () => (
	<>
		<Header />
		<NavBar />

		<div className='px-2 lg:px-4 xl:px-[90px] flex flex-col mx-auto justify-center items-start'>
			{/* Image Carousel */}
			<ImageCarousel />
			<Divider color='#DFDFDF' opacity='25%' />

			{/* Categories */}
			<BaseHeader name='Kategorie' />
			<CategoryCarousel />
			<Divider color='#DFDFDF' opacity='25%' />

			{/* Bestsellers */}
			<BaseHeader name='Bestsellery' />

			{/* PremiumBrands */}
			<BaseHeader name='Nasze marki' cursiveName='premium' />
			<div className='flex flex-wrap justify-center gap-4 mt-5 mb-12'>
				{brands.map((b) => (
					<BaseContainer key={b.id} name={b.name} src={b.img} width='268px' height='268px' />
				))}
			</div>

			{/* Reviews */}
			<BaseHeader name='Co mówią nasi' cursiveName='klienci' />
			<div className='grid xl:grid-cols-3 lg:grid-cols-3 grid-cols-1 justify-center gap-6 mt-5 mb-12'>
				{reviews.map((r) => (
					<BaseReview
						key={r.id}
						name={r.userName}
						img={r.avatar}
						date={r.date}
						desc={r.description}
					/>
				))}
			</div>

			{/* Gadgets */}
			<BaseHeader name='Gadżety reklamowe' cursiveName='- Na tym znamy się najlepiej' />
			<div className='flex flex-wrap space-y-4 mt-5 mb-12'>
				{gadgets.map((g) => (
					<BaseGadget key={g.id} id={g.id} title={g.title} img={g.img} desc={g.description} />
				))}
			</div>

			{/* Companies */}
			<BaseHeader name='Firmy, które nam' cursiveName='zaufały' />
			<BaseCarousel list={companies} itemsPerPage={4} timeInterval={1000} />
		</div>

		<Footer />
		<ScrollButton />
	</>
);

export default HomePage;
