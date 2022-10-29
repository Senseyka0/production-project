import { configureStore } from "@reduxjs/toolkit";

import { userReducer } from "entities/user";

import { StateSchema } from "./stateSchema";

export const createReduxStore = (initialState?: StateSchema) => {
	return configureStore<StateSchema>({
		reducer: {
			user: userReducer,
		},
		devTools: IS_DEV,
		preloadedState: initialState,
	});
};
