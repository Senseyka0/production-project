import { StateSchema } from "app/providers/store";

import { getProfileFirstName } from "./getProfileFirstName";

describe("getProfileFirstName", () => {
	test("should return state", () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				data: {
					firstName: "Mikhail",
				},
			},
		};

		expect(getProfileFirstName(state as StateSchema)).toEqual("Mikhail");
	});

	test("should work with empty state", () => {
		const state: DeepPartial<StateSchema> = {};

		expect(getProfileFirstName(state as StateSchema)).toEqual(undefined);
	});
});
