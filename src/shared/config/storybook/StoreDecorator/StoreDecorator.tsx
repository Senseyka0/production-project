import { Story } from "@storybook/react";

import { StateSchema, StoreProvider } from "app/providers/store";
import { profileReducer } from "entities/profile";
import { loginReducer } from "features/authByUsername/model/slice/loginSlice";
import { ReducersList } from "shared/lib/hooks/useDynamicModuleLoad";

const defaultAsyncReducers: ReducersList = {
	login: loginReducer,
	profile: profileReducer,
};

export const StoreDecorator =
	(state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) => (Story: Story) =>
		(
			<StoreProvider
				initialState={state}
				asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
			>
				<Story />
			</StoreProvider>
		);
