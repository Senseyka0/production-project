import { createAsyncThunk } from "@reduxjs/toolkit";

import { ThunkConfig } from "app/providers/store";

import { getProfileForm } from "../../selectors";
import { IProfile } from "../../types/profile";

export const updateProfileData = createAsyncThunk<IProfile, void, ThunkConfig<string>>(
	"profile/updateProfileData",
	async (_, thunkApi) => {
		const { extra, rejectWithValue, getState } = thunkApi;

		const formData = getProfileForm(getState());

		try {
			const response = await extra.api.put<IProfile>("/profile", formData);

			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data.message);
		}
	}
);
