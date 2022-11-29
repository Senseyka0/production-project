import { City } from "entities/city";
import { Country } from "entities/country";
import { Currency } from "entities/currency";
import { TestAsyncThunk } from "shared/config/tests";
import { ValidateProfileError } from "../../types/profile";

import { updateProfileData } from "./updateProfileData";

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

describe("updateProfileData", () => {
	test("success update profile data", async () => {
		const thunk = new TestAsyncThunk(updateProfileData, {
			profile: {
				form: data,
				isLoading: false,
			},
		});

		thunk.api.put.mockReturnValue(Promise.resolve({ data }));

		const result = await thunk.callThunk();

		expect(thunk.api.put).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe("fulfilled");
		expect(result.payload).toEqual(data);
	});

	test("error validate", async () => {
		const thunk = new TestAsyncThunk(updateProfileData, {
			profile: {
				form: { ...data, lastName: "" },
				isLoading: false,
			},
		});

		const result = await thunk.callThunk();

		expect(result.meta.requestStatus).toBe("rejected");
		expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
	});

	test("error update profile data", async () => {
		const thunk = new TestAsyncThunk(updateProfileData, {
			profile: {
				form: data,
				isLoading: false,
			},
		});

		thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

		const result = await thunk.callThunk();

		expect(result.meta.requestStatus).toBe("rejected");
		expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
	});
});
