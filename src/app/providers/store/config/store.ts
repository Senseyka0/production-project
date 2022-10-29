import { configureStore } from "@reduxjs/toolkit";

import { StateSchema } from "./stateSchema";

export const createReduxStore = (initialState?: StateSchema) => {
	return configureStore<StateSchema>({
		reducer: {},
		devTools: IS_DEV,
		preloadedState: initialState,
	});
};
