import { Story } from "@storybook/react";

import { StateSchema, StoreProvider } from "app/providers/store";
import { articleDetailsReducer } from "entities/article";
import { profileReducer } from "entities/profile";
import { loginReducer } from "features/authByUsername/model/slice/loginSlice";
import { ReducersList } from "shared/lib/hooks/useDynamicModuleLoad";

const defaultAsyncReducers: ReducersList = {
	login: loginReducer,
	profile: profileReducer,
	articleDetails: articleDetailsReducer,
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
