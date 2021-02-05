// React core
import { StrictMode } from 'react';

// Rendering
import { render } from 'react-dom';

// Router
import { BrowserRouter } from 'react-router-dom';

// App
import App from './App';

// Styles Packages Import
import GlobalStyle from './components/GlobalStyle';
import { Normalize } from 'styled-normalize';

render(
	<StrictMode>
		<BrowserRouter>
			<Normalize />
			<GlobalStyle />
			<App />
		</BrowserRouter>
	</StrictMode>,
	document.getElementById('root')
);
