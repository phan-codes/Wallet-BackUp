import { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const NavBar = () => {
	// ! For NAVBAR on SCROLL UP APPEAR
	const [hidden, setHidden] = useState(false);
	const { scrollY } = useScroll();

	useMotionValueEvent(scrollY, 'change', (latest) => {
		const previous = scrollY.getPrevious();
		if (latest > previous && latest > 150) {
			setHidden(true);
		} else {
			setHidden(false);
		}
	});

	// ! FOR CLICK EVENT OF HAMBURGER MENU

	const [isMenuShown, setIsMenuShown] = useState(false);

	const handleMenuShow = () => {
		setIsMenuShown(!isMenuShown);
	};

	const hideMenu = () => {
		setIsMenuShown(false);
	};

	window.addEventListener('scroll', hideMenu);

	return (
		<motion.nav
			className='fixed top-7 right-10 left-10 z-50 text-gray-300 font-Ubuntu bg-black border border-solid border-[#252040] w-4/5 rounded-full mx-auto lg:w-2/3'
			variants={{
				visible: { translateY: 0 },
				hidden: { translateY: '-300%' },
			}}
			animate={hidden ? 'hidden' : 'visible'}
			transition={{ duration: 0.5, ease: 'easeInOut' }}>
			<div className='flex justify-between items-center  py-1 px-5'>
				<div className='flex'>
					<span className='text-[#3c2e8d] text-5xl font-Jacquard font-extrabold'>Q</span>
					<span className='self-center -ml-4 font-Pacifico font-semibold text-[#3c2e8d]'>F</span>
					<span className='self-center font-Pacifico font-semibold text-[#3c2e8d]'>S</span>
					<div className='text-[9px] self-center text-[#3c2e8d] px-2 border-r-2 border-b-2 border-solid border-[#3c2e8d] font-semibold rounded-full '>
						Wallet Secure
					</div>
				</div>

				<div className='hidden justify-between items-center w-[400px] lg:flex'>
					<Link
						to='#home'
						className='relative py-[2px] px-[6px] mx-2 hover:text-gray-400 before:content-[""] before:h-[2px] before:absolute before:bg-[#252040] before:w-0 before:-bottom-0 before:left-0 hover:before:w-[53px] before:duration-500 cursor-pointer'
						smooth>
						Home
					</Link>
					<Link
						to='#about'
						className='relative py-[2px] px-[6px] mx-2 hover:text-gray-400 before:content-[""] before:h-[2px] before:absolute before:bg-[#252040] before:w-0 before:-bottom-0 before:left-0 hover:before:w-[55px] before:duration-500 cursor-pointer'
						smooth>
						About
					</Link>
					<Link
						to='#category'
						className='relative py-[2px] px-[6px] mx-2 hover:text-gray-400 before:content-[""] before:h-[2px] before:absolute before:bg-[#252040] before:w-0 before:-bottom-0 before:left-0 hover:before:w-[126px] before:duration-500 cursor-pointer'
						smooth>
						Select an option
					</Link>
					<Link
						to='#contact'
						className='relative py-[2px] px-[6px] mx-2 hover:text-gray-400 before:content-[""] before:h-[2px] before:absolute before:bg-[#252040] before:w-0 before:-bottom-0 before:left-0 hover:before:w-[66px] before:duration-500 cursor-pointer'
						smooth>
						Contact
					</Link>
				</div>
				<div className='flex flex-col gap-y-1 lg:hidden cursor-pointer relative ' onClick={handleMenuShow}>
					<div
						className={`w-7 h-[2px] bg-[#3c2e8d] rounded-full duration-300 ${
							isMenuShown ? 'rotate-45 translate-y-[6px] duration-300' : ''
						}`}></div>
					<div className={`w-10 h-[2px] bg-[#3c2e8d] rounded-full duration-300 ${isMenuShown ? 'hidden' : ''}`}></div>
					<div
						className={`w-7 h-[2px] bg-[#3c2e8d] rounded-full self-end duration-300 ${
							isMenuShown ? '-rotate-45 duration-300' : ''
						}`}></div>
				</div>
			</div>

			<div
				className={`absolute min-w-full h-fit flex justify-center top-[52px]  right-0 items-center flex-col bg-black rounded-md lg:hidden  ${
					isMenuShown ? 'gap-y-3 py-10 duration-700' : 'hidden py-0 gap-y-0 duration-300'
				}`}>
				<Link
					to='#home'
					className='relative py-[2px] px-[6px] mx-2 hover:text-gray-400 before:content-[""] before:h-[2px] before:absolute before:bg-[#252040] before:w-0 before:-bottom-0 before:left-0 hover:before:w-[53px] before:duration-500 '
					onClick={hideMenu}
					smooth>
					Home
				</Link>
				<Link
					to='#about'
					className='relative py-[2px] px-[6px] mx-2 hover:text-gray-400 before:content-[""] before:h-[2px] before:absolute before:bg-[#252040] before:w-0 before:-bottom-0 before:left-0 hover:before:w-[55px] before:duration-500'
					onClick={hideMenu}
					smooth>
					About
				</Link>
				<Link
					to='#category'
					className='relative py-[2px] px-[6px] mx-2 hover:text-gray-400 before:content-[""] before:h-[2px] before:absolute before:bg-[#252040] before:w-0 before:-bottom-0 before:left-0 hover:before:w-[126px] before:duration-500'
					onClick={hideMenu}
					smooth>
					Select an option
				</Link>
				<Link
					to='#contact'
					className='relative py-[2px] px-[6px] mx-2 hover:text-gray-400 before:content-[""] before:h-[2px] before:absolute before:bg-[#252040] before:w-0 before:-bottom-0 before:left-0 hover:before:w-[66px] before:duration-500'
					onClick={hideMenu}
					smooth>
					Contact
				</Link>
			</div>
		</motion.nav>
	);
};

export default NavBar;
