import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import whatsappIcon from '../assets/svgs/whatsapp.svg';
import emailIcon from '../assets/svgs/email.svg';
import telegramIcon from '../assets/svgs/telegramIcon.svg';
import Reveal from './Reveal';

const Contact = () => {
	const date = new Date();
	const form = useRef();

	const sendMessage = (e) => {
		e.preventDefault();

		emailjs
			.sendForm('service_k4o0ygn', 'template_0llkya5', form.current, {
				publicKey: 'Td_dx3NSUAVtvJh_p',
			})
			.then(
				() => {
					toast.success('Message sent sucessfully');
					e.target.reset();
				},
				() => {
					toast.error('Network error. Try again');
				}
			);
	};

	return (
		<section id='contact' className='h-fit bg-[#3c2e8d] w-full px-10 py-10'>
			<Reveal>
				<h1 className='flex flex-col justify-center items-center text-3xl font-bold w-full'>
					CONTACT US
					<hr className='h-1 border-none bg-gray-300 w-20 my-4 rounded-full' />
				</h1>
				<div className='flex flex-col items-center justify-center'>
					<h3 className='pt-3 mb-5'>Write us a message</h3>
					<form action='submit' className='py-8 mb-8 w-full lg:w-[40%]' ref={form} onSubmit={sendMessage}>
						<div className='relative'>
							<input
								type='text'
								name='name'
								required
								placeholder='Full Name'
								className='text-black outline-none p-2 mb-6 caret-black peer w-full bg-gray-100 placeholder-transparent rounded-md'
							/>
							<label
								htmlFor='name'
								className='absolute -top-9 left-0 text-gray-300  p-2 pointer-events-none peer-placeholder-shown:top-0 peer-placeholder-shown:text-gray-400 peer-focus:-top-9 peer-focus:text-gray-300 duration-500'>
								Full Name
							</label>
						</div>
						<div className='relative py-2'>
							<input
								type='email'
								name='email'
								required
								placeholder='Email'
								className='text-black outline-none p-2 mb-6 caret-black peer w-full bg-gray-100 placeholder-transparent rounded-md'
							/>
							<label
								htmlFor='email'
								className='absolute -top-6 left-0 text-gray-300  p-2 pointer-events-none peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-focus:-top-6 peer-focus:text-gray-300 duration-500'>
								Email
							</label>
						</div>
						<div className='relative py-2'>
							<input
								type='text'
								name='subject'
								required
								placeholder='Subject'
								className='text-black outline-none p-3 mb-6 caret-black peer w-full bg-gray-100 placeholder-transparent rounded-md'
							/>
							<label
								htmlFor='subject'
								className='absolute -top-6 left-0 text-gray-300  p-2 pointer-events-none peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-focus:-top-6 peer-focus:text-gray-300 duration-500'>
								Subject
							</label>
						</div>
						<div className='relative py-2'>
							<textarea
								type='text'
								name='message'
								required
								placeholder='Message'
								className='text-black outline-none p-3 mb-6 caret-black peer w-full bg-gray-100 min-h-44 placeholder-transparent rounded-md'
							/>
							<label
								htmlFor='message'
								className='absolute -top-6 left-0 text-gray-300  p-2 pointer-events-none peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-focus:-top-6 peer-focus:text-gray-300 duration-500'>
								Message
							</label>
						</div>
						<input
							type='submit'
							className='px-4 py-2 w-full outline-none border-none rounded-md bg-[#0f0000] shadow-lg hover:bg-gray-950 cursor-pointer'
							value='Send Message'
						/>
					</form>

					{/* ALL SOCIALS */}

					<div className='flex justify-between items-center min-w-24'>
						<a href='https://wa.me/+18605181205' className='h-6 w-6' target='blank'>
							<img src={whatsappIcon} alt='' />
						</a>
						<a href='https://t.me/qfswalletsecure' className='h-6 w-6 flex' target='blank'>
							<img src={telegramIcon} alt='' />
						</a>
						<a href='mailto:qfswalletsecure@gmail.com' className='h-6 w-6 flex' target='blank'>
							<img src={emailIcon} alt='' />
						</a>
					</div>
					<p className='py-3 font-bold'>&copy; {`${date.getFullYear()} QFS Wallet Secure`}</p>
				</div>
			</Reveal>
		</section>
	);
};

export default Contact;
