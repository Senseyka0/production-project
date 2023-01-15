import {
	AnyAction,
	CombinedState,
	Dispatch,
	EnhancedStore,
	Reducer,
	ReducersMapObject,
} from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { NavigateOptions, To } from "react-router-dom";

import { ProfileSchema } from "entities/profile";
import { UserSchema } from "entities/user";
import { ArticleDetailsSchema } from "entities/article";
import { LoginSchema } from "features/authByUsername";
import { ArticleDetailsCommentsSchema } from "pages/ArticleDetailsPage";

import { createReduxStore } from "./store";

export interface StateSchema {
	user: UserSchema;

	// Async reducers
	login?: LoginSchema;
	profile?: ProfileSchema;
	articleDetails?: ArticleDetailsSchema;
	articleDetailsComments?: ArticleDetailsCommentsSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
	getReducerMap: () => ReducersMapObject<StateSchema>;
	reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
	add: (key: StateSchemaKey, reducer: Reducer) => void;
	remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
	reducerManager: ReducerManager;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];

export interface ThunkExtraArgument {
	api: AxiosInstance;
	navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
	rejectValue: T;
	extra: ThunkExtraArgument;
	dispatch?: Dispatch;
	state: StateSchema;
}
