import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { App } from "./app/App";
import { ThemeProvider } from "./app/providers/theme";

import "./app/styles/index.scss";

render(
	<BrowserRouter>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</BrowserRouter>,
	document.querySelector("#root")
);
