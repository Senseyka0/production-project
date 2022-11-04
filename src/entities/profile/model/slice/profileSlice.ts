import { createSlice } from "@reduxjs/toolkit";

import { ProfileSchema } from "../types/profile";
import { fetchProfileData } from "../services/fetchProfileData/fetchProfileData";

const initialState: ProfileSchema = {
	isLoading: false,
	data: undefined,
	error: "",
	isReadonly: true,
};

const profileSlice = createSlice({
	name: "profile",
	initialState,
	reducers: {
		setUsername: (state) => {
			state.isLoading = true;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProfileData.pending, (state) => {
				state.isLoading = true;
				state.error = "";
			})

			.addCase(fetchProfileData.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = "";
				state.data = action.payload;
			})

			.addCase(fetchProfileData.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
