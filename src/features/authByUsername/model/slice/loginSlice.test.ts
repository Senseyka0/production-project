import { LoginSchema } from "../types/loginSchema";
import { loginActions, loginReducer } from "./loginSlice";

describe("login slice", () => {
	test("test set username", () => {
		const state: DeepPartial<LoginSchema> = {
			username: "senseyka",
		};

		expect(loginReducer(state as LoginSchema, loginActions.setUsername("senseykaLLL"))).toEqual({
			username: "senseykaLLL",
		});
	});

	test("test set password", () => {
		const state: DeepPartial<LoginSchema> = {
			password: "123",
		};

		expect(loginReducer(state as LoginSchema, loginActions.setPassword("123LLL"))).toEqual({
			password: "123LLL",
		});
	});
});
