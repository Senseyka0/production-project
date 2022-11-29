import { StateSchema } from "app/providers/store";

import { getProfileUserName } from "./getProfileUserName";

describe("getProfileUserName", () => {
	test("should return state", () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				data: {
					username: "senseyka",
				},
			},
		};

		expect(getProfileUserName(state as StateSchema)).toEqual("senseyka");
	});

	test("should work with empty state", () => {
		const state: DeepPartial<StateSchema> = {};

		expect(getProfileUserName(state as StateSchema)).toEqual(undefined);
	});
});
