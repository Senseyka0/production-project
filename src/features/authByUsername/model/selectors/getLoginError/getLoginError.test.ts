import { DeepPartial } from "@reduxjs/toolkit";

import { StateSchema } from "app/providers/store";

import { getLoginError } from "./getLoginError";

describe("getLoginError", () => {
	test("should return state", () => {
		const error = "User not found!";

		const state: DeepPartial<StateSchema> = {
			login: {
				error,
			},
		};

		expect(getLoginError(state as StateSchema)).toEqual(error);
	});

	test("should work with empty state", () => {
		const state: DeepPartial<StateSchema> = {};

		expect(getLoginError(state as StateSchema)).toEqual(undefined);
	});
});
