import { City } from "entities/city";
import { Country } from "entities/country";
import { Currency } from "entities/currency";
import { updateProfileData } from "../services/updateProfileData/updateProfileData";

import { ProfileSchema, ValidateProfileError } from "../types/profile";
import { profileActions, profileReducer } from "./profileSlice";

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

describe("profile slice", () => {
	test("test set is readonly", () => {
		const state: DeepPartial<ProfileSchema> = {
			isReadonly: false,
		};

		expect(profileReducer(state as ProfileSchema, profileActions.setIsReadonly(true))).toEqual({
			isReadonly: true,
		});
	});

	test("test cancel edit", () => {
		const state: DeepPartial<ProfileSchema> = {
			data,
			form: { username: "" },
		};

		expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toEqual({
			isReadonly: true,
			validateErrors: undefined,
			data,
			form: data,
		});
	});

	test("test update profile", () => {
		const state: DeepPartial<ProfileSchema> = {
			form: { username: "sss" },
		};

		expect(profileReducer(state as ProfileSchema, profileActions.updateProfileData(data))).toEqual({
			form: data,
		});
	});

	test("test update profile service pending", () => {
		const state: DeepPartial<ProfileSchema> = {
			validateErrors: [ValidateProfileError.INCORRECT_AGE],
			isLoading: false,
		};

		expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toEqual({
			validateErrors: undefined,
			isLoading: true,
		});
	});

	test("test update profile service fulfilled", () => {
		const state: DeepPartial<ProfileSchema> = {
			validateErrors: [ValidateProfileError.INCORRECT_AGE],
			isLoading: true,
			isReadonly: false,
		};

		expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, ""))).toEqual({
			validateErrors: undefined,
			isLoading: false,
			isReadonly: true,
			data,
			form: data,
		});
	});
});
