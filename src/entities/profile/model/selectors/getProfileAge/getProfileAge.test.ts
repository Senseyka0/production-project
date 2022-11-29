import { StateSchema } from "app/providers/store";

import { getProfileAge } from "./getProfileAge";

describe("getProfileAge", () => {
	test("should return state", () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				data: {
					age: 21,
				},
			},
		};

		expect(getProfileAge(state as StateSchema)).toEqual(21);
	});

	test("should work with empty state", () => {
		const state: DeepPartial<StateSchema> = {};

		expect(getProfileAge(state as StateSchema)).toEqual(undefined);
	});
});
