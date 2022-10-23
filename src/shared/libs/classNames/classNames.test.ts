import { classNames } from "./classNames";

describe("classNames", () => {
	test("with only first param", () => {
		expect(classNames("hello", {}, [])).toBe("hello");
	});

	test("with additional class", () => {
		expect(classNames("hello", {}, ["world", "lol"])).toBe("hello world lol");
	});

	test("with only first param", () => {
		expect(classNames("some", {}, [])).toBe("some");
	});

	test("with mods", () => {
		expect(classNames("hello", { of: true, you: false, me: true }, ["world"])).toBe(
			"hello world of me"
		);
	});

	test("with falsy mods", () => {
		expect(classNames("hello", { of: false, you: false, me: false }, ["world"])).toBe(
			"hello world"
		);
	});

	test("with undefined mods", () => {
		expect(classNames("hello", { of: undefined, you: undefined, me: undefined }, ["world"])).toBe(
			"hello world"
		);
	});

	test("with null mods", () => {
		expect(classNames("hello", { of: null, you: null, me: null }, ["world"])).toBe("hello world");
	});

	test("with empty string mods", () => {
		expect(classNames("hello", { of: "", you: "", me: "" }, ["world"])).toBe("hello world");
	});
});
