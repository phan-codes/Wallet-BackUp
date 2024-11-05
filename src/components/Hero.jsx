import heroImg from '../assets/heroImg.png';
import walletIcon from '../assets/svgs/walletIcon.svg';
import { HashLink as Link } from 'react-router-hash-link';
import Reveal from './Reveal';

const Hero = () => {
	return (
		<section className='px-5 py-5 bg-hero h-fit w-full flex flex-col items-center lg:px-10' id='home'>
			<Reveal>
				<div className='text-center mt-44'>
					<h1 className='text-2xl font-extrabold md:text-4xl'>QFS Wallet Secure</h1>
					<h3 className='text-xl font-bold text-[#3c2e8d] lg:text-2xl'>The best way to secure your digital assets</h3>
					<p className='leading-6'>
						The most secured quantum ledger wallet to store, recover, backup and <br className='hidden md:block' />{' '}
						secure your digital assets.
					</p>
				</div>
			</Reveal>
			<Reveal>
				<Link
					to='#category'
					className='flex justify-between items-center py-2 px-5 my-4 font-bold bg-[#3c2e8d] hover:bg-[#2f246d] rounded-md'
					smooth>
					Secure Now <img src={walletIcon} alt='' className='ml-2' />
				</Link>
			</Reveal>
			<Reveal>
				<div className='mt-10 lg:mt-0 border-b-[1px] border-solid border-[#252040] overflow-hidden'>
					<img src={heroImg} alt='' />
				</div>
			</Reveal>
		</section>
	);
};

export default Hero;
