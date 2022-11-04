import { StateSchema } from "app/providers/store";

import { getLoginPassword } from "./getLoginPassword";

describe("getLoginPassword", () => {
	test("should return state", () => {
		const password = "admin123";

		const state: DeepPartial<StateSchema> = {
			login: {
				password,
			},
		};

		expect(getLoginPassword(state as StateSchema)).toEqual(password);
	});

	test("should work with empty state", () => {
		const state: DeepPartial<StateSchema> = {};

		expect(getLoginPassword(state as StateSchema)).toEqual("");
	});
});
