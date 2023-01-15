import { createAsyncThunk } from "@reduxjs/toolkit";

import { ThunkConfig } from "app/providers/store";
import i18n from "shared/config/i18n/i18n";

import { IArticle } from "../types/article";

export const getArticleById = createAsyncThunk<IArticle, string, ThunkConfig<string>>(
	"articleDetails/getArticleById",
	async (articleId, thunkApi) => {
		const { extra, rejectWithValue } = thunkApi;

		try {
			const response = await extra.api.get<IArticle>(`/articles/${articleId}`);

			if (!response.data) {
				throw new Error();
			}

			return response.data;
		} catch (error) {
			if (error.response.status === 404) {
				return rejectWithValue(i18n.t("Article is not found"));
			}

			return rejectWithValue(error.response.data.message);
		}
	}
);
