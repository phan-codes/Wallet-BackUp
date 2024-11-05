import WalletList from '../components/WalletList';
import WalletWriteUp from '../components/WalletWriteUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Wallets = () => {
	return (
		<div>
			<WalletWriteUp />
			<WalletList />
			<ToastContainer />
		</div>
	);
};

export default Wallets;
