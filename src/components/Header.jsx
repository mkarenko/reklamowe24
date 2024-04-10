import React, {useState} from 'react';

import logo from '../assets/logo.png';
import mail from '../assets/mail.svg';
import phone from '../assets/phone.svg';

const Header = () => {
	const [showMail, setShowMail] = useState(false);
	const [showPhone, setShowPhone] = useState(false);

	const handleRefreshSite = () => window.location.reload();

	return (
		<div className='w-screen flex border-b-[1px] py-5 px-[90px]'>
			<header className='w-screen flex justify-between'>
				<button id='logoButton' type='button' onClick={handleRefreshSite}>
					<img alt='logo' src={logo} className='w-[175px] h-[55px]' />
				</button>
				<div className='flex gap-3 mr-6'>
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
			</header>
		</div>
	);
};

export default Header;
