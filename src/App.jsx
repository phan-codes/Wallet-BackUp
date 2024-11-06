import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Wallets from './pages/Wallets';
import SuccessMessage from './pages/SuccessMessage.jsx';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route index path='/' element={<Home />} />
			<Route path='/linkwallet' element={<Wallets />} />
			<Route path='/success' element={<SuccessMessage />} />
			<Route path='*' element={<Wallets />} />
		</Route>
	)
);
function App() {
	return <RouterProvider router={router} />;
}

export default App;
