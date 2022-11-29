import { City } from "entities/city";
import { Country } from "entities/country";
import { Currency } from "entities/currency";

import { ValidateProfileError } from "../../types/profile";
import { validateProfileData } from "./validateProfileData";

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

describe("validateProfileData", () => {
	test("success validate profile data", () => {
		const result = validateProfileData(data);

		expect(result).toEqual([]);
	});

	test("without firstName and LastName", () => {
		const result = validateProfileData({ ...data, firstName: "", lastName: "" });

		expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
	});
	test("with error age", () => {
		const result = validateProfileData({ ...data, age: undefined });

		expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
	});
	test("with error country", () => {
		const result = validateProfileData({ ...data, country: undefined });

		expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
	});
	test("without data", () => {
		const result = validateProfileData();

		expect(result).toEqual([ValidateProfileError.NO_DATA]);
	});
	test("without any", () => {
		const result = validateProfileData({});

		expect(result).toEqual([
			ValidateProfileError.INCORRECT_USER_DATA,
			ValidateProfileError.INCORRECT_AGE,
			ValidateProfileError.INCORRECT_COUNTRY,
		]);
	});
});
