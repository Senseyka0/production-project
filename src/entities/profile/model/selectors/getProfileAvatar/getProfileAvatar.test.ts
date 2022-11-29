import { StateSchema } from "app/providers/store";

import { getProfileAvatar } from "./getProfileAvatar";

describe("getProfileAvatar", () => {
	test("should return state", () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				data: {
					avatar: "https://cdn.kapwing.com/collections/video_image-x1Jgy3nJKT.jpeg",
				},
			},
		};

		expect(getProfileAvatar(state as StateSchema)).toEqual(
			"https://cdn.kapwing.com/collections/video_image-x1Jgy3nJKT.jpeg"
		);
	});

	test("should work with empty state", () => {
		const state: DeepPartial<StateSchema> = {};

		expect(getProfileAvatar(state as StateSchema)).toEqual(undefined);
	});
});
