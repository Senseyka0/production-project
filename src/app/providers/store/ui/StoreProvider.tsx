import { DeepPartial } from "@reduxjs/toolkit";
import { ReactNode } from "react";
import { Provider } from "react-redux";

import { StateSchema } from "../config/stateSchema";
import { createReduxStore } from "../config/store";

export const StoreProvider = ({ children, initialState }: Props) => {
	const store = createReduxStore(initialState as StateSchema);

	return <Provider store={store}>{children}</Provider>;
};

interface Props {
	children: ReactNode;
	initialState?: DeepPartial<StateSchema>;
}
