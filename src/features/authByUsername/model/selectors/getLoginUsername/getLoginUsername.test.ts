import { StateSchema } from "app/providers/store";

import { getLoginUsername } from "./getLoginUsername";

describe("getLoginUsername", () => {
	test("should return state", () => {
		const username = "senseyka";

		const state: DeepPartial<StateSchema> = {
			login: {
				username,
			},
		};

		expect(getLoginUsername(state as StateSchema)).toEqual(username);
	});

	test("should work with empty state", () => {
		const state: DeepPartial<StateSchema> = {};

		expect(getLoginUsername(state as StateSchema)).toEqual("");
	});
});
