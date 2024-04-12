import React, {useState} from 'react';

import {handleRefreshSite} from '../utils/common';
import BurgerMenu from './BurgerMenu';
import BaseButton from './BaseButton';

import lock from '../assets/icons/lock.png';
import cart from '../assets/icons/cart.png';
import logo from '../assets/logos/logo.png';
import mail from '../assets/icons/mail.svg';
import phone from '../assets/icons/phone.svg';
import Divider from './Divider';

const Header = () => {
	const [showMail, setShowMail] = useState(false);
	const [showPhone, setShowPhone] = useState(false);

	return (
		<div className='px-2 lg:px-4 xl:px-[90px] py-5 h-[90px] flex justify-between items-center border-b-[1px]'>
			<BurgerMenu />

			<header className='w-full flex justify-between items-center'>
				<button id='logoButton' type='button' onClick={handleRefreshSite}>
					<img
						alt='logo'
						src={logo}
						className='w-[175px] h-[55px] sm:max-w-[107px] sm:max-h-[36px]'
					/>
				</button>
				<div className='flex gap-3 sm:hidden md:hidden lg:hidden'>
					<div className='flex justify-center items-center gap-1 cursor-pointer'>
						<img alt='mail' src={mail} />
						{!showMail && <div>biuro@ </div>}
						{showMail && (
							<a href='mailto:biuro@reklamowe24.pl' className='underline text-[#0a94d6]'>
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
					<div className='flex justify-center items-center gap-1 cursor-pointer'>
						<img alt='phone' src={phone} />
						{!showPhone && <div>tel. 42 </div>}
						{showPhone && (
							<a href='tel:42 630 55 15' className='underline text-[#0a94d6]'>
								tel. 42 630 55 15
							</a>
						)}
						{!showPhone && (
							<button
								id='phoneButton'
								type='button'
								className='px-6 py-3 rounded-3xl bg-purple'
								onClick={() => setShowPhone(true)}
							>
								<div className='text-white'>Pokaż</div>
							</button>
						)}
					</div>
				</div>

				<div className='xl:hidden w-20 flex items-center'>
					<BaseButton icon={lock} iconClassName='flex w-4' />
					<Divider isRotated width='90px' />
					<BaseButton icon={cart} iconClassName='flex w-7' />
				</div>
			</header>
		</div>
	);
};

export default Header;
