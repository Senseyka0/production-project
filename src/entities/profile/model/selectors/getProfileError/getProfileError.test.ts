import { StateSchema } from "app/providers/store";

import { getProfileError } from "./getProfileError";

describe("getProfileError", () => {
	test("should return state", () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				error: "hello",
			},
		};

		expect(getProfileError(state as StateSchema)).toEqual("hello");
	});

	test("should work with empty state", () => {
		const state: DeepPartial<StateSchema> = {};

		expect(getProfileError(state as StateSchema)).toEqual(undefined);
	});
});
