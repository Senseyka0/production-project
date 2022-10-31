import { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";
import { Story } from "@storybook/react";

import { StateSchema, StoreProvider } from "app/providers/store";
import { loginReducer } from "features/authByUsername/model/slice/loginSlice";

type Reducers = DeepPartial<ReducersMapObject<StateSchema>>;

const defaultAsyncReducers: Reducers = {
	login: loginReducer,
};

export const StoreDecorator =
	(state: DeepPartial<StateSchema>, asyncReducers?: Reducers) => (Story: Story) =>
		(
			<StoreProvider
				initialState={state}
				asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
			>
				<Story />
			</StoreProvider>
		);
