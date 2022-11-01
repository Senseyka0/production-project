import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";

import { userActions } from "entities/user";
import { StateSchema } from "app/providers/store";
import { TestAsyncThunk } from "shared/config/tests";

import { loginByUsername } from "./loginByUsername";

jest.mock("axios");

const mockedAxios = jest.mocked(axios, true);

describe("loginByUsername", () => {
	test("success login", async () => {
		const userValue = { username: "senseyka", id: "1" };

		mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

		const thunk = new TestAsyncThunk(loginByUsername);
		const result = await thunk.callThunk({ password: "123", username: "admin" });

		expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
		expect(thunk.dispatch).toHaveBeenCalledTimes(3);
		expect(mockedAxios.post).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe("fulfilled");
		expect(result.payload).toBe(userValue);
	});

	test("error login", async () => {
		mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

		const thunk = new TestAsyncThunk(loginByUsername);
		const result = await thunk.callThunk({ password: "123", username: "123" });

		expect(thunk.dispatch).toHaveBeenCalledTimes(2);
		expect(mockedAxios.post).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe("rejected");
	});
});
