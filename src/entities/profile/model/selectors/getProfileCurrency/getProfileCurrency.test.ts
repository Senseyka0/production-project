import { StateSchema } from "app/providers/store";
import { Currency } from "entities/currency";

import { getProfileCurrency } from "./getProfileCurrency";

describe("getProfileCurrency", () => {
	test("should return state", () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				data: {
					currency: Currency.UAH,
				},
			},
		};

		expect(getProfileCurrency(state as StateSchema)).toEqual(Currency.UAH);
	});

	test("should work with empty state", () => {
		const state: DeepPartial<StateSchema> = {};

		expect(getProfileCurrency(state as StateSchema)).toEqual(undefined);
	});
});
