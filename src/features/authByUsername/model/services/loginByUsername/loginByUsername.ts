import { createAsyncThunk } from "@reduxjs/toolkit";

import { ThunkConfig } from "app/providers/store";
import { IUser, userActions } from "entities/user";
import { LOCAL_STORAGE_USER_KEY } from "shared/constants/localStorage";

interface Props {
	username: string;
	password: string;
}

export const loginByUsername = createAsyncThunk<IUser, Props, ThunkConfig<string>>(
	"login/loginByUsername",
	async ({ username, password }, thunkApi) => {
		const { extra, dispatch, rejectWithValue } = thunkApi;

		try {
			const response = await extra.api.post<IUser>("/login", {
				username,
				password,
			});

			if (!response.data) {
				throw new Error();
			}

			localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(response.data));

			dispatch(userActions.setAuthData(response.data));

			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data.message);
		}
	}
);
