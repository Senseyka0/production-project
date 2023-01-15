import { StateSchema } from "app/providers/store";

import { getArticleIsLoading } from "./getArticleIsLoading";

describe("getArticleIsLoading", () => {
	test("should return isLoading", () => {
		const state: DeepPartial<StateSchema> = {
			articleDetails: {
				isLoading: true,
			},
		};

		expect(getArticleIsLoading(state as StateSchema)).toEqual(true);
	});

	test("should work with empty state", () => {
		const state: DeepPartial<StateSchema> = {};

		expect(getArticleIsLoading(state as StateSchema)).toEqual(undefined);
	});
});
