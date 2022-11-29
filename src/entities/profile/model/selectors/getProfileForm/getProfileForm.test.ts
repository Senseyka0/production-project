import { StateSchema } from "app/providers/store";
import { City } from "entities/city";
import { Country } from "entities/country";
import { Currency } from "entities/currency";

import { getProfileForm } from "./getProfileForm";

describe("getProfileForm", () => {
	test("should return state", () => {
		const form = {
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
				form,
			},
		};

		expect(getProfileForm(state as StateSchema)).toEqual(form);
	});

	test("should work with empty state", () => {
		const state: DeepPartial<StateSchema> = {};

		expect(getProfileForm(state as StateSchema)).toEqual(undefined);
	});
});
