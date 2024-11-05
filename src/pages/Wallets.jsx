import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import WalletWriteUp from '../components/WalletWriteUp';

const Wallets = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className='bg-black'>
			<WalletWriteUp />
			<ToastContainer />
		</div>
	);
};

export default Wallets;
