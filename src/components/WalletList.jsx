import LinkWallet from './LinkWallet.jsx';
import trustWalletIcon from '../assets/trustWalletIcon.png';
import lobstrIcon from '../assets/lobstrIcon.png';
import walletConnectIcon from '../assets/walletConnectIcon.png';
import atomicIcon from '../assets/atomicIcon.png';
import metamaskIcon from '../assets/metamaskIcon.png';
import rainbowIcon from '../assets/rainbowIcon.png';
import argentIcon from '../assets/argentIcon.png';
import gnosisIcon from '../assets/GnosisIcon.png';
import cryptoDefiIcon from '../assets/cryptoDefiIcon.png';
import pillar from '../assets/pillar.png';
import anchorIcon from '../assets/anchorIcon.png';
import ontoIcon from '../assets/ontoIcon.png';
import tokenpocketIcon from '../assets/tokenpocketIcon.png';
import mathwalletIcon from '../assets/mathwalletIcon.png';
import bitpayIcon from '../assets/bitpayIcon.png';
import maiarIcon from '../assets/maiarIcon.png';
import ledgerliveIcon from '../assets/ledgerliveIcon.png';
import wallethIcon from '../assets/wallethIcon.png';
import authereumIcon from '../assets/authereumIcon.png';
import huobiIcon from '../assets/huobiIcon.png';
import eidooIcon from '../assets/eidooIcon.png';
import mykeyIcon from '../assets/mykeyIcon.png';
import loopringIcon from '../assets/loopringIcon.png';
import trustvaultIcon from '../assets/trustvaultIcon.png';
import coin98Icon from '../assets/coin98Icon.png';
import coolwalletIcon from '../assets/coolwalletIcon.png';
import aliceIcon from '../assets/aliceIcon.png';
import alphaIcon from '../assets/alphaIcon.png';
import dcentwalletIcon from '../assets/dcentwalletIcon.png';
import zelcoreIcon from '../assets/zelcoreIcon.png';
import nashIcon from '../assets/nashIcon.png';
import coinomiIcon from '../assets/coinomiIcon.png';
import gridplusIcon from '../assets/gridplusIcon.png';
import cybavowalletIcon from '../assets/cybavowalletIcon.png';
import tokenaryIcon from '../assets/tokenaryIcon.png';
import wazirxIcon from '../assets/wazirxIcon.png';
import torusIcon from '../assets/torusIcon.png';
import spatiumIcon from '../assets/spatiumIcon.png';
import safepalIcon from '../assets/safepalIcon.png';
import equalIcon from '../assets/equalIcon.png';
import infinitoIcon from '../assets/infinitoIcon.png';
import walletioIcon from '../assets/walletioIcon.png';
import infinityIcon from '../assets/infinityIcon.png';
import ownbitIcon from '../assets/ownbitIcon.png';
import easypocketIcon from '../assets/easypocketIcon.png';
import bridgeIcon from '../assets/bridgeIcon.png';
import sparkpointIcon from '../assets/sparkpointIcon.png';
import viawalletIcon from '../assets/viawalletIcon.png';
import bitkeepIcon from '../assets/bitkeepIcon.png';
import visionIcon from '../assets/visionIcon.png';
import swftIcon from '../assets/swftIcon.png';
import peakdefiIcon from '../assets/peakdefiIcon.png';
import cosmosstationIcon from '../assets/cosmosstationIcon.png';
import graphIcon from '../assets/graphIcon.png';
import kardachainIcon from '../assets/kardachainIcon.png';
import keplrIcon from '../assets/keplrIcon.png';
import harmonyIcon from '../assets/harmonyIcon.png';
import iconexIcon from '../assets/iconexIcon.png';
import fetchIcon from '../assets/fetchIcon.png';
import xdcIcon from '../assets/xdcIcon.png';
import unstoppableIcon from '../assets/unstoppableIcon.png';
import meetoneIcon from '../assets/meetoneIcon.png';
import dokIcon from '../assets/dokIcon.png';
import atwalletIcon from '../assets/atwalletIcon.png';
import morixwalletIcon from '../assets/morixwalletIcon.png';
import midasIcon from '../assets/midasIcon.png';
import ellipalIcon from '../assets/ellipalIcon.png';
import keyringproIcon from '../assets/keyringproIcon.png';
import blockchainIcon from '../assets/blockchainIcon.png';
import bscIcon from '../assets/bscIcon.png';
import aktionariatIcon from '../assets/aktionariatIcon.png';
import coinbaseIcon from '../assets/coinbaseIcon.png';
import exodusIcon from '../assets/exodusIcon.png';
import phantomIcon from '../assets/phantomIcon.png';

const WalletList = () => {
	const wallets = [
		{ id: 1, name: 'Trust', image: trustWalletIcon },
		{ id: 2, name: 'Lobstr', image: lobstrIcon },
		{ id: 3, name: 'Wallet Connect', image: walletConnectIcon },
		{ id: 4, name: 'Atomic', image: atomicIcon },
		{ id: 5, name: 'MetaMask', image: metamaskIcon },
		{ id: 6, name: 'Rainbow', image: rainbowIcon },
		{ id: 7, name: 'Argent', image: argentIcon },
		{ id: 8, name: 'Gnosis Safe MultiSig', image: gnosisIcon },
		{ id: 9, name: 'Crypto.com | DeFi Wallet', image: cryptoDefiIcon },
		{ id: 10, name: 'Pillar', image: pillar },
		{ id: 11, name: 'Anchor', image: anchorIcon },
		{ id: 12, name: 'ONTO', image: ontoIcon },
		{ id: 13, name: 'TokenPocket', image: tokenpocketIcon },
		{ id: 14, name: 'MathWallet', image: mathwalletIcon },
		{ id: 15, name: 'BitPay', image: bitpayIcon },
		{ id: 16, name: 'Maiar', image: maiarIcon },
		{ id: 17, name: 'Ledger Live', image: ledgerliveIcon },
		{ id: 18, name: 'Walleth', image: wallethIcon },
		{ id: 19, name: 'Authereum', image: authereumIcon },
		{ id: 20, name: 'Huobi Wallet', image: huobiIcon },
		{ id: 21, name: 'Eidoo', image: eidooIcon },
		{ id: 22, name: 'MYKEY', image: mykeyIcon },
		{ id: 23, name: 'Loopring Wallet', image: loopringIcon },
		{ id: 24, name: 'TrustVault', image: trustvaultIcon },
		{ id: 25, name: 'Coin98', image: coin98Icon },
		{ id: 26, name: 'CoolWallet S', image: coolwalletIcon },
		{ id: 27, name: 'Alice', image: aliceIcon },
		{ id: 28, name: 'AlphaWallet', image: alphaIcon },
		{ id: 29, name: "D'CENT Wallet", image: dcentwalletIcon },
		{ id: 30, name: 'ZelCore', image: zelcoreIcon },
		{ id: 31, name: 'Nash', image: nashIcon },
		{ id: 32, name: 'Coinomi', image: coinomiIcon },
		{ id: 33, name: 'GridPlus', image: gridplusIcon },
		{ id: 34, name: 'CYBAVO Wallet', image: cybavowalletIcon },
		{ id: 35, name: 'Tookenary', image: tokenaryIcon },
		{ id: 36, name: 'WazirX', image: wazirxIcon },
		{ id: 37, name: 'Torus', image: torusIcon },
		{ id: 38, name: 'Spatium', image: spatiumIcon },
		{ id: 39, name: 'SafePal', image: safepalIcon },
		{ id: 40, name: 'Equal', image: equalIcon },
		{ id: 41, name: 'Infinito', image: infinitoIcon },
		{ id: 42, name: 'wallet.io', image: walletioIcon },
		{ id: 43, name: 'Infinity Wallet', image: infinityIcon },
		{ id: 44, name: 'Ownbit', image: ownbitIcon },
		{ id: 45, name: 'EasyPocket', image: easypocketIcon },
		{ id: 46, name: 'Bridge Wallet', image: bridgeIcon },
		{ id: 47, name: 'SparkPoint', image: sparkpointIcon },
		{ id: 48, name: 'ViaWallet', image: viawalletIcon },
		{ id: 49, name: 'BitKeep', image: bitkeepIcon },
		{ id: 50, name: 'Vision', image: visionIcon },
		{ id: 51, name: 'SWFT Wallet', image: swftIcon },
		{ id: 52, name: 'PEAKDEFI Wallet', image: peakdefiIcon },
		{ id: 53, name: 'Cosmostation', image: cosmosstationIcon },
		{ id: 54, name: 'Graph Protocol', image: graphIcon },
		{ id: 55, name: 'KardiaChain', image: kardachainIcon },
		{ id: 56, name: 'Keplr', image: keplrIcon },
		{ id: 57, name: 'Harmony', image: harmonyIcon },
		{ id: 58, name: 'ICONex', image: iconexIcon },
		{ id: 59, name: 'Fetch', image: fetchIcon },
		{ id: 60, name: 'XDC Wallet', image: xdcIcon },
		{ id: 61, name: 'Unstoppable Wallet', image: unstoppableIcon },
		{ id: 62, name: 'MEET.ONE', image: meetoneIcon },
		{ id: 63, name: 'Dok Wallet', image: dokIcon },
		{ id: 64, name: 'AT.Wallet', image: atwalletIcon },
		{ id: 65, name: 'MoriX Wallet', image: morixwalletIcon },
		{ id: 66, name: 'Midas Wallet', image: midasIcon },
		{ id: 67, name: 'Ellipal', image: ellipalIcon },
		{ id: 68, name: 'KEYRING PRO', image: keyringproIcon },
		{ id: 69, name: 'Blockchain', image: blockchainIcon },
		{ id: 70, name: 'Binance Smart Chain', image: bscIcon },
		{ id: 71, name: 'Aktionariat', image: aktionariatIcon },
		{ id: 72, name: 'Coinbase', image: coinbaseIcon },
		{ id: 73, name: 'Exodus', image: exodusIcon },
		{ id: 74, name: 'Phantom', image: phantomIcon },
	];

	return (
		<div>
			<LinkWallet wallets={wallets} />
		</div>
	);
};

export default WalletList;
