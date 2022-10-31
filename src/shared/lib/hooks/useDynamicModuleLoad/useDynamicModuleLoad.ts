import { useEffect } from "react";
import { useDispatch, useStore } from "react-redux";
import { Reducer } from "@reduxjs/toolkit";

import { ReduxStoreWithManager, StateSchemaKey } from "app/providers/store";

export const useDynamicModuleLoad = ({ reducers, removeAfterUnmount }: Props) => {
	const store = useStore() as ReduxStoreWithManager;
	const dispatch = useDispatch();

	useEffect(() => {
		Object.entries(reducers).forEach(([key, reducer]: ReducersListEntry) => {
			store.reducerManager.add(key, reducer);

			dispatch({ type: `@INIT ${key} reducer` });
		});

		return () => {
			if (removeAfterUnmount) {
				Object.entries(reducers).forEach(([key]: ReducersListEntry) => {
					store.reducerManager.remove(key);

					dispatch({ type: `@DESTROY ${key} reducer` });
				});
			}
		};

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
};

interface Props {
	reducers: ReducersList;
	removeAfterUnmount?: boolean;
}

export type ReducersList = {
	[name in StateSchemaKey]?: Reducer;
};

type ReducersListEntry = [StateSchemaKey, Reducer];
