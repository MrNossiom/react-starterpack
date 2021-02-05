// React hooks
import { useEffect } from 'react';

// Router
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Main from './pages/Main';
import Page404 from './pages/404';

const App = () => {
	const location = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location.pathname]);

	return (
		<>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Main} />
				<Route path="/404" component={Page404} />

				{/* 404 Error Redirection */}
				<Redirect to="/404" />
			</Switch>
		</>
	);
};

export default App;
