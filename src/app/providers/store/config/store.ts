import { configureStore } from "@reduxjs/toolkit";

import { userReducer } from "entities/user";
import { loginReducer } from "features/authByUsername";

import { StateSchema } from "./stateSchema";

export const createReduxStore = (initialState?: StateSchema) => {
	return configureStore<StateSchema>({
		reducer: {
			user: userReducer,
			login: loginReducer,
		},
		devTools: IS_DEV,
		preloadedState: initialState,
	});
};

const Dispatch = createReduxStore().dispatch;

export type AppDispatch = typeof Dispatch;
