import { StateSchema } from "app/providers/store";

import { getArticleDetailsCommentsError } from "./getArticleDetailsCommentsError";

describe("getArticleDetailsCommentsError", () => {
	test("should return isLoading", () => {
		const state: DeepPartial<StateSchema> = {
			articleDetailsComments: {
				error: "error state",
			},
		};

		expect(getArticleDetailsCommentsError(state as StateSchema)).toEqual("error state");
	});

	test("should work with empty state", () => {
		const state: DeepPartial<StateSchema> = {};

		expect(getArticleDetailsCommentsError(state as StateSchema)).toEqual(undefined);
	});
});
