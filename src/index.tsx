import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "app/providers/theme";
import { ErrorBoundary } from "app/providers/error";
import { StoreProvider } from "app/providers/store";
import { App } from "app";

import "shared/config/i18n/i18n";

import "app/styles/index.scss";

render(
	<BrowserRouter>
		<StoreProvider>
			<ErrorBoundary>
				<ThemeProvider>
					<App />
				</ThemeProvider>
			</ErrorBoundary>
		</StoreProvider>
	</BrowserRouter>,
	document.querySelector("#root")
);
