import { StateSchema } from "app/providers/store";

import { ValidateProfileError } from "../../types/profile";
import { getProfileValidateErrors } from "./getProfileValidateErrors";

describe("getProfileValidateErrors", () => {
	test("should return state", () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				validateErrors: [ValidateProfileError.INCORRECT_USER_DATA],
			},
		};

		expect(getProfileValidateErrors(state as StateSchema)).toEqual([
			ValidateProfileError.INCORRECT_USER_DATA,
		]);
	});

	test("should work with empty state", () => {
		const state: DeepPartial<StateSchema> = {};

		expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
	});
});
