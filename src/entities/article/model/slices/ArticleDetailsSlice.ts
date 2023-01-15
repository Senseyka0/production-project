import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { getArticleById } from "../services/getArticleById";
import { ArticleDetailsSchema } from "../types/articleDetailsSchema";

const initialState: ArticleDetailsSchema = {
	isLoading: false,
	data: undefined,
	error: "",
};

const articleDetailsSlice = createSlice({
	name: "articleDetails",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		// --- getArticleById ---
		builder
			.addCase(getArticleById.pending, (state) => {
				state.isLoading = true;
				state.error = "";
			})

			.addCase(getArticleById.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = undefined;
				state.data = action.payload;
			})

			.addCase(getArticleById.rejected, (state, action) => {
				state.isLoading = false;

				state.error = action.payload;
			});
		// --- getArticleById ---
	},
});

export const { actions: articleDetailsActions } = articleDetailsSlice;
export const { reducer: articleDetailsReducer } = articleDetailsSlice;
