import { createAsyncThunk } from "@reduxjs/toolkit";

import { ThunkConfig } from "app/providers/store";
import { IComment } from "entities/comment";
import i18n from "shared/config/i18n/i18n";

export const fetchCommentsByArticleId = createAsyncThunk<
	IComment[],
	string | undefined,
	ThunkConfig<string>
>("articleDetailsComments/fetchCommentsByArticleId", async (articleId, thunkApi) => {
	const { extra, rejectWithValue } = thunkApi;

	if (!articleId) {
		return rejectWithValue(i18n.t("Comment is not found"));
	}

	try {
		const response = await extra.api.get<IComment[]>("/comments", {
			params: {
				articleId,
				_expand: "user",
			},
		});

		if (!response.data) {
			throw new Error();
		}

		return response.data;
	} catch (error) {
		if (error.response.status === 404) {
			return rejectWithValue(i18n.t("Comment is not found"));
		}

		return rejectWithValue(error.response.data.message);
	}
});
