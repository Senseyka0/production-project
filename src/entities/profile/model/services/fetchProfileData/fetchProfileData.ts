import { createAsyncThunk } from "@reduxjs/toolkit";

import { ThunkConfig } from "app/providers/store";

import { IProfile } from "../../types/profile";

export const fetchProfileData = createAsyncThunk<IProfile, void, ThunkConfig<string>>(
	"profile/fetchProfileData",
	async (_, thunkApi) => {
		const { extra, rejectWithValue } = thunkApi;

		try {
			const response = await extra.api.get<IProfile>("/profile");

			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data.message);
		}
	}
);
