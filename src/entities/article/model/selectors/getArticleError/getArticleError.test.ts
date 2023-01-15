import { StateSchema } from "app/providers/store";

import { getArticleError } from "./getArticleError";

describe("getArticleError", () => {
	test("should return error", () => {
		const state: DeepPartial<StateSchema> = {
			articleDetails: {
				error: "Error State",
			},
		};

		expect(getArticleError(state as StateSchema)).toEqual("Error State");
	});

	test("should work with empty state", () => {
		const state: DeepPartial<StateSchema> = {};

		expect(getArticleError(state as StateSchema)).toEqual(undefined);
	});
});
