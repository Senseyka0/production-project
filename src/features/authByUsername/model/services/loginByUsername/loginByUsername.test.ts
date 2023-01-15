import { IUser, userActions } from "entities/user";
import { TestAsyncThunk } from "shared/config/tests";

import { loginByUsername } from "./loginByUsername";

describe("loginByUsername", () => {
	test("success login", async () => {
		const userValue: IUser = { username: "senseyka", id: 1, role: "ADMIN" };

		const thunk = new TestAsyncThunk(loginByUsername);

		thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));

		const result = await thunk.callThunk({ password: "123", username: "admin" });

		expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
		expect(thunk.dispatch).toHaveBeenCalledTimes(3);
		expect(thunk.api.post).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe("fulfilled");
		expect(result.payload).toBe(userValue);
	});

	test("error login", async () => {
		const thunk = new TestAsyncThunk(loginByUsername);

		thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));

		const result = await thunk.callThunk({ password: "123", username: "123" });

		expect(thunk.dispatch).toHaveBeenCalledTimes(2);
		expect(thunk.api.post).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe("rejected");
	});
});
