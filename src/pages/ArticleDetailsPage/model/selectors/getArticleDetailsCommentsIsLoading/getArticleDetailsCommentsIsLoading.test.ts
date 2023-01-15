import { StateSchema } from "app/providers/store";

import { getArticleDetailsCommentsIsLoading } from "./getArticleDetailsCommentsIsLoading";

describe("getArticleDetailsCommentsIsLoading", () => {
	test("should return isLoading", () => {
		const state: DeepPartial<StateSchema> = {
			articleDetailsComments: {
				isLoading: true,
			},
		};

		expect(getArticleDetailsCommentsIsLoading(state as StateSchema)).toEqual(true);
	});

	test("should work with empty state", () => {
		const state: DeepPartial<StateSchema> = {};

		expect(getArticleDetailsCommentsIsLoading(state as StateSchema)).toEqual(undefined);
	});
});
