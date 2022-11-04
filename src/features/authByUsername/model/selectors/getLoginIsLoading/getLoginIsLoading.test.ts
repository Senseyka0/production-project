import { StateSchema } from "app/providers/store";

import { getLoginIsLoading } from "./getLoginIsLoading";

describe("getLoginIsLoading", () => {
	test("should return state", () => {
		const isLoading = true;

		const state: DeepPartial<StateSchema> = {
			login: {
				isLoading,
			},
		};

		expect(getLoginIsLoading(state as StateSchema)).toEqual(isLoading);
	});

	test("should work with empty state", () => {
		const state: DeepPartial<StateSchema> = {};

		expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
	});
});
