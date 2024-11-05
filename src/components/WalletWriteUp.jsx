import { HashLink as Link } from 'react-router-hash-link';
import backIcon from '../assets/svgs/backIcon.svg';
import Reveal from '../components/Reveal';
import WalletList from './WalletList';
const WalletWriteUp = () => {
	return (
		<section className='py-10 px-5 bg-gray-950 text-gray-300 font-Ubuntu'>
			<Reveal>
				<div className='mb-10'>
					<Link to='/#category' className='text-sm md:text-base flex justify-between items-center w-16'>
						<img src={backIcon} alt='' />
						Back
					</Link>
				</div>
				<p className='text-center text-sm md:text-base'>
					Multiple IOS, Windows and Android wallets support the protocol. Simply scan a QR code from your desktop
					computer screen to start securely using a dApp with your mobile wallet. Interaction between mobile apps and
					mobile browsers are supported via mobile deep linking.
				</p>
			</Reveal>
			<WalletList />
		</section>
	);
};

export default WalletWriteUp;
