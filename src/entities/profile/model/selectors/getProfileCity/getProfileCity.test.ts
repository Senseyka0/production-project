import { StateSchema } from "app/providers/store";
import { City } from "entities/city";

import { getProfileCity } from "./getProfileCity";

describe("getProfileCity", () => {
	test("should return state", () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				data: {
					city: City.Chernivtsi,
				},
			},
		};

		expect(getProfileCity(state as StateSchema)).toEqual(City.Chernivtsi);
	});

	test("should work with empty state", () => {
		const state: DeepPartial<StateSchema> = {};

		expect(getProfileCity(state as StateSchema)).toEqual(undefined);
	});
});
