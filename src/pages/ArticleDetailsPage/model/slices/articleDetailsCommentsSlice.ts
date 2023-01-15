import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import { StateSchema } from "app/providers/store";
import { IComment } from "entities/comment";
import { fetchCommentsByArticleId } from "../services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { ArticleDetailsCommentsSchema } from "../types/articleDetailsCommentsSchema";

const commentsAdapter = createEntityAdapter<IComment>({
	selectId: (comment) => comment.id,
});

const articleDetailsCommentsSlice = createSlice({
	name: "articleDetailsComments",
	initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
		isLoading: false,
		error: undefined,
		ids: [],
		entities: {},
	}),
	reducers: {},
	extraReducers: (builder) => {
		// --- fetchCommentsByArticleId ---
		builder
			.addCase(fetchCommentsByArticleId.pending, (state) => {
				state.isLoading = true;
				state.error = "";
			})

			.addCase(fetchCommentsByArticleId.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = undefined;

				commentsAdapter.setAll(state, action.payload);
			})

			.addCase(fetchCommentsByArticleId.rejected, (state, action) => {
				state.isLoading = false;

				state.error = action.payload;
			});
		// --- fetchCommentsByArticleId ---
	},
});

export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice;
export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
	(state) => state.articleDetailsComments || commentsAdapter.getInitialState()
);
