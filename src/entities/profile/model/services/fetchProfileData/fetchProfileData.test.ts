import { City } from "entities/city";
import { Country } from "entities/country";
import { Currency } from "entities/currency";
import { TestAsyncThunk } from "shared/config/tests";

import { fetchProfileData } from "./fetchProfileData";

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

describe("fetchProfileData", () => {
	test("success fetch profile data", async () => {
		const thunk = new TestAsyncThunk(fetchProfileData);

		thunk.api.get.mockReturnValue(Promise.resolve({ data }));

		const result = await thunk.callThunk();

		expect(thunk.api.get).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe("fulfilled");
		expect(result.payload).toEqual(data);
	});

	test("error fetch profile data", async () => {
		const thunk = new TestAsyncThunk(fetchProfileData);

		thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

		const result = await thunk.callThunk();

		expect(result.meta.requestStatus).toBe("rejected");
	});
});
