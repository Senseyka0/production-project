import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ProfileSchema, IProfile } from "../types/profile";
import { fetchProfileData } from "../services/fetchProfileData/fetchProfileData";
import { updateProfileData } from "../services/updateProfileData/updateProfileData";

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
		setIsReadonly: (state, action: PayloadAction<boolean>) => {
			state.isReadonly = action.payload;
		},

		cancelEdit: (state) => {
			state.isReadonly = true;

			state.form = state.data;
		},

		updateProfileData: (state, action: PayloadAction<IProfile>) => {
			state.form = { ...state.data, ...action.payload };
		},
	},
	extraReducers: (builder) => {
		// --- fetchProfileData ---
		builder
			.addCase(fetchProfileData.pending, (state) => {
				state.isLoading = true;
				state.error = "";
			})

			.addCase(fetchProfileData.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = undefined;
				state.data = action.payload;
				state.form = action.payload;
			})

			.addCase(fetchProfileData.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
		// --- fetchProfileData ---

		// --- updateProfileData ---
		builder
			.addCase(updateProfileData.pending, (state) => {
				state.error = undefined;

				state.isLoading = true;
			})

			.addCase(updateProfileData.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = undefined;

				state.isReadonly = true;
				state.data = action.payload;
				state.form = action.payload;
			})

			.addCase(updateProfileData.rejected, (state, action) => {
				state.isLoading = false;

				state.error = action.payload;
			});
		// --- updateProfileData ---
	},
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
