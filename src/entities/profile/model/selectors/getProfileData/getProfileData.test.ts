import { StateSchema } from "app/providers/store";
import { City } from "entities/city";
import { Country } from "entities/country";
import { Currency } from "entities/currency";

import { getProfileData } from "./getProfileData";

describe("getProfileData", () => {
	test("should return state", () => {
		const data = {
			username: "Senseyka",
			age: 21,
			avatar: "https://cdn.kapwing.com/collections/video_image-x1Jgy3nJKT.jpeg",
			city: City.Chernivtsi,
			country: Country.Ukraine,
			currency: Currency.UAH,
			firstName: "Mikhail",
			lastName: "Rypta",
		};

		const state: DeepPartial<StateSchema> = {
			profile: {
				data,
			},
		};

		expect(getProfileData(state as StateSchema)).toEqual(data);
	});

	test("should work with empty state", () => {
		const state: DeepPartial<StateSchema> = {};

		expect(getProfileData(state as StateSchema)).toEqual(undefined);
	});
});
