import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	/* Added font-size to normalize rem */
	:root {
		font-size: 16px;
	}

	/* Some basic style for all elements */
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		flex-shrink: 0;
	}

	/* Remove links underline */
	a {
		text-decoration: none;
	}

	/* Added h1 normalized font-size */
	h1 {
		font-size: 3rem;
	}

	/* Removed any outline on focus (ugly) */
	a:focus,
	button:focus,
	input:focus,
	textarea:focus {
		outline: none;
	}
`;

export default GlobalStyle;