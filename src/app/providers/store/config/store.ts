import { configureStore, DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";

import { userReducer } from "entities/user";

import { createReducerManager } from "./reducerManager";
import { StateSchema } from "./stateSchema";

export const createReduxStore = (
	initialState?: StateSchema,
	asyncReducers?: ReducersMapObject<StateSchema>
) => {
	const rootReducers: ReducersMapObject<StateSchema> = {
		...asyncReducers,
		user: userReducer,
	};

	const reducerManager = createReducerManager(rootReducers);

	const store = configureStore<StateSchema>({
		reducer: reducerManager.reduce,
		devTools: IS_DEV,
		preloadedState: initialState,
	});

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	store.reducerManager = reducerManager;

	return store;
};

const Dispatch = createReduxStore().dispatch;

export type AppDispatch = typeof Dispatch;
