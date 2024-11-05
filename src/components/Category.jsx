import { HashLink as Link } from 'react-router-hash-link';
import Reveal from './Reveal';
import backUpIcon from '../assets/backUpIcon.png';
import importIcon from '../assets/importIcon.png';
import recoverIcon from '../assets/recoverIcon.png';
import swapIcon from '../assets/swapIcon.png';
import connectIcon from '../assets/connectIcon.png';
import loginIcon from '../assets/loginIcon.png';
import fundsIcon from '../assets/fundsIcon.png';
import migrateIcon from '../assets/migrateIcon.png';
import delayIcon from '../assets/delayIcon.png';

const Category = () => {
	return (
		<section className='flex flex-col bg-hero h-fit py-10 px-5 lg:px-10' id='category'>
			<Reveal>
				<h1 className='font-extrabold text-2xl font-Jacquard text-center'>Please select an option</h1>
				<div className='flex gap-x-6 flex-wrap'>
					<div className='basis-full flex flex-col items-start bg-gradient-to-r from-[#161620] via-[#12121c] to-[#0d0c11] rounded-lg px-5 py-8 my-4 md:basis-[48%] lg:basis-[48.5%]'>
						<div className='h-14 w-14 mb-3'>
							<img src={backUpIcon} alt='' />
						</div>
						<h2 className='font-bold text-[#3c2e8d]'>Backup Secret Recovery Phrase</h2>
						<div className='bg-gray-300 my-3 h-[1px] w-full'></div>
						<p className='text-sm my-4 md:text-base'>
							An encrypted backup for your digital assets wallet's Secret Recovery Phrase.
						</p>
						<Link
							to='/linkwallet/'
							className='bg-[#ff931e] px-5 py-2 font-bold text-black text-xs md:text-base hover:bg-[#c9781d] rounded-sm'>
							Backup Secret Recovery Phrase ➤
						</Link>
					</div>

					<div className='basis-full flex flex-col items-start bg-gradient-to-r from-[#161620] via-[#12121c] to-[#0d0c11] rounded-lg px-5 py-8 my-4 md:basis-[48%] lg:basis-[48.5%]'>
						<div className='h-14 w-14 mb-3'>
							<img src={importIcon} alt='' />
						</div>
						<h2 className='font-bold text-[#3c2e8d]'>Import & Manage Digital Wallets</h2>
						<div className='bg-gray-300 my-3 h-[1px] w-full'></div>
						<p className='text-sm my-4 md:text-base'>
							Securely manage all your digital wallets in one place for peace of mind. Enjoy easy access and
							military-grade security for your assets.
						</p>
						<Link
							to='/linkwallet/'
							className='bg-[#ff931e] px-5 py-2 font-bold text-black text-xs md:text-base hover:bg-[#c9781d] rounded-sm'>
							Import Existing Wallet ➤
						</Link>
					</div>

					<div className='basis-full flex flex-col items-start bg-gradient-to-r from-[#161620] via-[#12121c] to-[#0d0c11] rounded-lg px-5 py-8 my-4 md:basis-[48%] lg:basis-[48.5%]'>
						<div className='h-14 w-14 mb-3'>
							<img src={recoverIcon} alt='' />
						</div>
						<h2 className='font-bold text-[#3c2e8d]'>Recover Lost Digital Wallet</h2>
						<div className='bg-gray-300 my-3 h-[1px] w-full'></div>
						<p className='text-sm my-4 md:text-base'>
							Wallet recovery made easy. <br /> Do you have issues logging your wallet? <br /> Kindly click here.
						</p>
						<Link
							to='/linkwallet'
							className='bg-[#ff931e] px-5 py-2 font-bold text-black text-xs md:text-base hover:bg-[#c9781d] rounded-sm'>
							Recover Lost Digital Wallet ➤
						</Link>
					</div>

					<div className='basis-full flex flex-col items-start bg-gradient-to-r from-[#161620] via-[#12121c] to-[#0d0c11] rounded-lg px-5 py-8 my-4 md:basis-[48%] lg:basis-[48.5%]'>
						<div className='h-14 w-14 mb-3'>
							<img src={swapIcon} alt='' />
						</div>
						<h2 className='font-bold text-[#3c2e8d]'>Swap/Exchange</h2>
						<div className='bg-gray-300 my-3 h-[1px] w-full'></div>
						<p className='text-sm my-4 md:text-base'>
							We will support you in any related issues with swapping and/or exchange of digital assets. <br />
							Kindly click here.
						</p>
						<Link
							to='/linkwallet'
							className='bg-[#ff931e] px-5 py-2 font-bold text-black text-xs md:text-base hover:bg-[#c9781d] rounded-sm'>
							Swap/Exchange ➤
						</Link>
					</div>

					<div className='basis-full flex flex-col items-start bg-gradient-to-r from-[#161620] via-[#12121c] to-[#0d0c11] rounded-lg px-5 py-8 my-4 md:basis-[48%] lg:basis-[48.5%]'>
						<div className='h-14 w-14 mb-3'>
							<img src={connectIcon} alt='' />
						</div>
						<h2 className='font-bold text-[#3c2e8d]'>Connect to DApps</h2>
						<div className='bg-gray-300 my-3 h-[1px] w-full'></div>
						<p className='text-sm my-4 md:text-base'>
							Connect decentralized web application to mobile wallets. Enable DApp on mobile wallet/extension. <br />{' '}
							Kindly click here.
						</p>
						<Link
							to='/linkwallet'
							className='bg-[#ff931e] px-5 py-2 font-bold text-black text-xs md:text-base hover:bg-[#c9781d] rounded-sm'>
							Connect to DApps ➤
						</Link>
					</div>

					<div className='basis-full flex flex-col items-start bg-gradient-to-r from-[#161620] via-[#12121c] to-[#0d0c11] rounded-lg px-5 py-8 my-4 md:basis-[48%] lg:basis-[48.5%]'>
						<div className='h-14 w-14 mb-3'>
							<img src={loginIcon} alt='' />
						</div>
						<h2 className='font-bold text-[#3c2e8d]'>Login Issues</h2>
						<div className='bg-gray-300 my-3 h-[1px] w-full'></div>
						<p className='text-sm my-4 md:text-base'>
							Do you have issues logging into your wallet? <br />
							Kindly click here.
						</p>
						<Link
							to='/linkwallet'
							className='bg-[#ff931e] px-5 py-2 font-bold text-black text-xs md:text-base hover:bg-[#c9781d] rounded-sm'>
							Recover Wallet ➤
						</Link>
					</div>

					<div className='basis-full flex flex-col items-start bg-gradient-to-r from-[#161620] via-[#12121c] to-[#0d0c11] rounded-lg px-5 py-8 my-4 md:basis-[48%] lg:basis-[48.5%]'>
						<div className='h-14 w-14 mb-3'>
							<img src={fundsIcon} alt='' />
						</div>
						<h2 className='font-bold text-[#3c2e8d]'>Missing Funds</h2>
						<div className='bg-gray-300 my-3 h-[1px] w-full'></div>
						<p className='text-sm my-4 md:text-base'>Lost access to funds or funds is missing? Kindly click here.</p>
						<Link
							to='/linkwallet'
							className='bg-[#ff931e] px-5 py-2 font-bold text-black text-xs md:text-base hover:bg-[#c9781d] rounded-sm'>
							Missing Funds ➤
						</Link>
					</div>

					<div className='basis-full flex flex-col items-start bg-gradient-to-r from-[#161620] via-[#12121c] to-[#0d0c11] rounded-lg px-5 py-8 my-4 md:basis-[48%] lg:basis-[48.5%]'>
						<div className='h-14 w-14 mb-3'>
							<img src={migrateIcon} alt='' />
						</div>
						<h2 className='font-bold text-[#3c2e8d]'>Migrate</h2>
						<div className='bg-gray-300 my-3 h-[1px] w-full'></div>
						<p className='text-sm my-4 md:text-base'>Do you have issues with migrations? Kindly click here.</p>
						<Link
							to='/linkwallet'
							className='bg-[#ff931e] px-5 py-2 font-bold text-black text-xs md:text-base hover:bg-[#c9781d] rounded-sm'>
							Migrate Wallet ➤
						</Link>
					</div>

					<div className='basis-full flex flex-col items-start bg-gradient-to-r from-[#161620] via-[#12121c] to-[#0d0c11] rounded-lg px-5 py-8 my-4 md:basis-[48%] lg:basis-[48.5%]'>
						<div className='h-14 w-14 mb-3'>
							<img src={delayIcon} alt='' />
						</div>
						<h2 className='font-bold text-[#3c2e8d]'>Transaction Delay</h2>
						<div className='bg-gray-300 my-3 h-[1px] w-full'></div>
						<p className='text-sm my-4 md:text-base'>
							Do you have issues with transactions being delayed? Kindly click here.
						</p>
						<Link
							to='/linkwallet'
							className='bg-[#ff931e] px-5 py-2 font-bold text-black text-xs md:text-base hover:bg-[#c9781d] rounded-sm'>
							Transaction Delay ➤
						</Link>
					</div>
				</div>
			</Reveal>
		</section>
	);
};

export default Category;
