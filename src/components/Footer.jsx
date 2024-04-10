import React, {useState} from 'react';

import {Divider} from './Divider';

import logo from '../assets/logo_white.png';
import send from '../assets/send.svg';

const firstCol = [
	{id: 0, name: 'Najczęściej zadawane pytania'},
	{id: 1, name: 'Czas realizacji'},
	{id: 2, name: 'Znakowanie'},
	{id: 3, name: 'Sposoby zamawiania'},
	{id: 4, name: 'Dostawy i płatności'},
	{id: 5, name: 'Reklamacje'},
	{id: 6, name: 'Regulamin zakupów'},
	{id: 7, name: 'Polityka prywatności'},
];

const secondCol = [
	{id: 0, name: 'Aktualnośic'},
	{id: 1, name: 'Kontakt'},
	{id: 2, name: 'O nas'},
	{id: 3, name: 'Nasze realizacje'},
	{id: 4, name: 'Referencje'},
	{id: 5, name: 'Katalogi do pobrania'},
	{id: 6, name: 'Oznaczenia'},
	{id: 7, name: 'System OMS'},
	{id: 8, name: 'Blog'},
	{id: 9, name: 'Agencja Reklamowa'},
];

const Footer = () => {
	const [showMail, setShowMail] = useState(false);
	const [showPhone1, setShowPhone1] = useState(false);
	const [showPhone2, setShowPhone2] = useState(false);

	return (
		<footer className='flex flex-col justify-center items-center bg-[#000000] text-white space-y-10'>
			<div className='p-10 flex justify-center text-[40px]'>
				Zapisz się do <a className='font-serif'>&nbsp;newsletters</a>
			</div>
			<div className='w-[600px]'>
				<div className='w-full flex justify-center'>
					<input
						type='email'
						placeholder='Wpisz swój adres e-mail'
						className='w-full px-3 py-2 text-[20px] text-white bg-transparent focus:bg-none focus:ring-0 border-none'
					/>
					<button className='bg-white' onClick={() => void ''}>
						<img alt='arrowNext' src={send} className='w-20 h-20 bg-black text-white' />
					</button>
				</div>
				<Divider />
			</div>
			<div className='w-2/3 flex justify-start space-x-24'>
				<div className='w-1/4 flex flex-col'>
					<div className='text-[15px] text-darkGray'>ZAMÓWIENIA</div>
					{firstCol.map((col) => (
						<div key={col.id} className='flex justify-start items-center space-x-2 space-y-4'>
							<div className='rounded-full h-1 w-1 mt-4 bg-white' />
							<button className='text-xl'>{col.name}</button>
						</div>
					))}
				</div>
				<div className='w-1/4 flex flex-col'>
					<div className='text-[15px] text-darkGray'>INFORMACJE</div>
					{secondCol.map((col) => (
						<div key={col.id} className='flex justify-start items-center space-x-2 space-y-4'>
							<div className='rounded-full h-1 w-1 mt-4 bg-white' />
							<button className='text-xl'>{col.name}</button>
						</div>
					))}
				</div>
				<div className='w-1/4 flex flex-col space-y-3'>
					<div className='text-[15px] text-darkGray'>KONTAKT</div>
					<div className='text-[26px]'>
						Reklamowe24
						<br />
						ul. Zgierska 249A
						<br />
						91-495 Łódź
						<br />
					</div>
					<Divider color='bg-darkGray' height='h-[0.5px]' />

					<div className='w-full flex items-center gap-1 cursor-pointer text-[20px]'>
						{!showPhone1 && <div>tel. 42 </div>}
						{showPhone1 && (
							<a href='tel:42 630 55 15' className='underline'>
								tel. 42 630 55 15
							</a>
						)}
						{!showPhone1 && (
							<button
								id='phoneButton'
								type='button'
								className='px-6 py-3 rounded-3xl bg-purple'
								onClick={() => setShowPhone1(true)}
							>
								<div className='text-white'>Pokaż</div>
							</button>
						)}
					</div>
					<Divider color='bg-darkGray' height='h-[0.5px]' />
					<div className='flex items-center gap-1 cursor-pointer text-[20px]'>
						{!showPhone2 && <div>tel. 42 </div>}
						{showPhone2 && (
							<a href='tel:42 630 05 08' className='underline'>
								tel. 42 63 05 08
							</a>
						)}
						{!showPhone2 && (
							<button
								id='phoneButton'
								type='button'
								className='px-6 py-3 rounded-3xl bg-purple'
								onClick={() => setShowPhone2(true)}
							>
								<div className='text-white'>Pokaż</div>
							</button>
						)}
					</div>
					<Divider color='bg-darkGray' height='h-[0.5px]' />
					<div className='flex items-center gap-1 cursor-pointer text-[20px]'>
						{!showMail && <div>biuro@ </div>}
						{showMail && (
							<a href='mailto:biuro@reklamowe24.pl' className='underline'>
								biuro@reklamowe24.pl
							</a>
						)}
						{!showMail && (
							<button
								id='mailButton'
								type='button'
								className='px-6 py-3 rounded-3xl bg-purple'
								onClick={() => setShowMail(true)}
							>
								<div className='text-white'>Pokaż</div>
							</button>
						)}
					</div>
					<Divider color='bg-darkGray' height='h-[0.5px]' />
					<div className='flex space-x-10 pt-2'>
						<a href='https://www.facebook.com/reklamowe24/'>
							<img
								alt='fb'
								src={require('../assets/facebook.png')}
								className='hover:cursor-pointer h-8'
							/>
						</a>
						<a href='https://www.instagram.com/reklamowe24/'>
							<img
								alt='ig'
								src={require('../assets/instagram.png')}
								className='hover:cursor-pointer h-8'
							/>
						</a>
						<a href='https://www.youtube.com/channel/UCVJG9Mu8MwBwRJsOks5a1nA'>
							<img
								alt='yt'
								src={require('../assets/youtube.png')}
								className='hover:cursor-pointer h-8'
							/>
						</a>
						<a href='https://www.linkedin.com/company/reklamowe24/'>
							<img
								alt='in'
								src={require('../assets/linkedin.png')}
								className='hover:cursor-pointer h-8'
							/>
						</a>
					</div>
				</div>
			</div>
			<Divider color='bg-darkGray' height='h-[0.5px] px-[90px]' />
			<div className='flex px-[90px] space-x-10 pb-8'>
				<img alt='logo' src={logo} className='w-[144px] h-[44px]' />
				<div className='text-xs text-darkGray'>
					© 2023 Sklep internetowy Reklamowe24.pl. Gadżety reklamowe w Twoim mieście: Gadżety
					reklamowe Warszawa, Gadżety reklamowe Katowice, Gadżety reklamowe Ruda Śląska, Gadżety
					reklamowe Gdańsk, Gadżety reklamowe Wrocław, Gadżety reklamowe Szczecin, Gadżety reklamowe
					Bydgoszcz, Gadżety reklamowe Poznań, Gadżety reklamowe Białystok, Gadżety reklamowe
					Kraków, Gadżety reklamowe Lublin, Gadżety reklamowe Rzeszów.
				</div>
			</div>
		</footer>
	);
};

export default Footer;
