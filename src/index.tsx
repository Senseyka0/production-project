import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "app/providers/theme";
import { App } from "app";

import "shared/config/i18n";

import "app/styles/index.scss";

render(
	<BrowserRouter>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</BrowserRouter>,
	document.querySelector("#root")
);
