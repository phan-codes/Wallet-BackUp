import { Link } from 'react-router-dom';
import checkMark from '../assets/svgs/checkIcon.svg';

const SuccessMessage = () => {
	return (
		<section className='flex flex-col justify-center items-center px-5 gap-5 bg-slate-950 h-screen lg:px-10 text-center text-gray-300'>
			<img src={checkMark} alt='' className='h-20 w-20' />
			<p className='text-base font-bold md:text-xl '>
				Your Wallet Has Been Successfully Secured And Free From Cyber Attacks!
			</p>
			<Link to='/' className='bg-[#3c2e8d] px-3 py-2 font-bold rounded-md'>
				Back to home
			</Link>
		</section>
	);
};

export default SuccessMessage;
