import { StateSchema } from "app/providers/store";

import { getProfileIsReadonly } from "./getProfileIsReadonly";

describe("getProfileIsReadonly", () => {
	test("should return state", () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				isReadonly: true,
			},
		};

		expect(getProfileIsReadonly(state as StateSchema)).toEqual(true);
	});

	test("should work with empty state", () => {
		const state: DeepPartial<StateSchema> = {};

		expect(getProfileIsReadonly(state as StateSchema)).toEqual(undefined);
	});
});
