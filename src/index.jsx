// Render
import { render } from 'react-dom';

// React core
import { StrictMode } from 'react';

// App
import App from './App';

render(
	<StrictMode>
		<App />
	</StrictMode>,
	document.getElementById('root'),
);