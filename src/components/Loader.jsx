import PulseLoader from 'react-spinners/PulseLoader';

const override = {
	display: 'block',
	margin: '0 auto',
};

function Loader() {
	return (
		<div className='sweet-loading'>
			<PulseLoader
				cssOverride={override}
				size={20}
				aria-label='Loading Spinner'
				data-testid='loader'
				speedMultiplier={0.8}
			/>
		</div>
	);
}

export default Loader;
