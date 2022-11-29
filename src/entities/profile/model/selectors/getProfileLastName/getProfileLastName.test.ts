import { StateSchema } from "app/providers/store";

import { getProfileLastName } from "./getProfileLastName";

describe("getProfileLastName", () => {
	test("should return state", () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				data: {
					lastName: "Rypta",
				},
			},
		};

		expect(getProfileLastName(state as StateSchema)).toEqual("Rypta");
	});

	test("should work with empty state", () => {
		const state: DeepPartial<StateSchema> = {};

		expect(getProfileLastName(state as StateSchema)).toEqual(undefined);
	});
});
