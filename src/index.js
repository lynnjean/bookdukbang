import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

import { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from './style/theme';
import { BrowserRouter } from 'react-router-dom';
import reset from 'styled-reset';
import GlobalStyles from './style/global';

const ResetStyle = createGlobalStyle`
	${reset}
`;
const container = document.getElementById('root');
const root = createRoot(container);
const mode = 'light';
root.render(
	<>
		<ThemeProvider theme={theme[mode]}>
			<GlobalStyles />
			<ResetStyle />
			<BrowserRouter basename={process.env.PUBLIC_URL}>
				<App />
			</BrowserRouter>
		</ThemeProvider>
	</>,
);
