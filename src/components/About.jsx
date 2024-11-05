import secureIcon from '../assets/svgs/secureIcon.svg';
import aboutIcon from '../assets/svgs/aboutIcon.svg';
import securityIcon from '../assets/svgs/securityIcon.svg';
import Reveal from './Reveal';

const About = () => {
	return (
		<section className='flex flex-col bg-hero h-fit py-10 px-5 text-center lg:px-10' id='about'>
			<Reveal>
				<div className='flex flex-col items-center bg-gradient-to-r from-[#161620] via-[#12121c] to-[#0d0c11] rounded-lg px-5 py-8'>
					<div className='flex justify-center items-center'>
						<div className='bg-[#3c2e8d] h-[2px] w-[40px] rounded-full mr-4'></div>
						<h1 className='font-extrabold text-2xl text-[#3c2e8d]'>ABOUT</h1>
					</div>
					<div className='w-16 h-16 my-2'>
						<img src={aboutIcon} alt='' />
					</div>
					<p className='leading-6 md:leading-8 text-sm md:text-base'>
						As digital technology has grown in popularity, cybercrime has also increased significantly. As we become
						more dependent on digital media, cyber criminals stand a greater chance of getting away with unfair
						practices. In this situation, QFS Wallet Secure saves the day. The future-proof system is hailed as the way
						forward for all financial transactions. This vault is heavily secured by Secret Space Programs (SSP),
						providing the highest level of security. Easy to work with We will consistently exceed customer expectation
						by providing value-adding banking solutions. Offers QFS return outstanding value through our wide range of
						products and services.
					</p>
					<div className=' leading-loose'>
						<div className='flex justify-center items-center mt-14'>
							<div className='bg-[#3c2e8d] h-[2px] w-[40px] rounded-full mr-4'></div>
							<h1 className='font-extrabold text-xl'>How it works</h1>
						</div>
						<div className='w-full h-16 my-2 flex justify-center'>
							<img src={securityIcon} alt='' />
						</div>
						<h3 className='font-bold'>Secure your assets </h3>
						<p className='text-sm lg:text-base'> Connect your Wallet to the vault, to secure your assets. </p>
					</div>
				</div>
			</Reveal>

			<Reveal>
				<div className='flex flex-col items-center bg-gradient-to-r from-[#161620] via-[#12121c] to-[#0d0c11] rounded-xl px-5 py-8 mt-10'>
					<div className='flex justify-center items-center'>
						<div className='bg-[#3c2e8d] h-[2px] w-[30px] rounded-full mr-2'></div>
						<h1 className='font-bold text-[#3c2e8d] lg:text-xl'>Seed Phrase Protection</h1>
					</div>
					<div className='w-16 h-16 my-3'>
						<img src={secureIcon} alt='' />
					</div>
					<p className=' leading-6 text-sm lg:text-base'>
						QFS Wallet Secure's Seed Phrase Protection means that you never have to worry about losing access to your
						cryptocurrency. Managing your own private key or seed phrase can be daunting, with risks of theft and loss.
						Your private key serves as the starting point for creating a backup of your seed phrase. Ensure that yours
						is protected.
					</p>
				</div>
			</Reveal>
		</section>
	);
};

export default About;
