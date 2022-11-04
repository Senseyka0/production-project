import { ReducersMapObject } from "@reduxjs/toolkit";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { useNavigate } from "react-router-dom";

import { StateSchema } from "../config/stateSchema";
import { createReduxStore } from "../config/store";

export const StoreProvider = ({ children, initialState, asyncReducers }: Props) => {
	const navigate = useNavigate();

	const store = createReduxStore(
		initialState as StateSchema,
		asyncReducers as ReducersMapObject<StateSchema>,
		navigate
	);

	return <Provider store={store}>{children}</Provider>;
};

interface Props {
	children: ReactNode;
	initialState?: DeepPartial<StateSchema>;
	asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}
