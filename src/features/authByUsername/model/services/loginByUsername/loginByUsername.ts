import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { IUser, userActions } from "entities/user";
import { LOCAL_STORAGE_USER_KEY } from "shared/constants/localStorage";

interface Props {
	username: string;
	password: string;
}

export const loginByUsername = createAsyncThunk<IUser, Props, { rejectValue: string }>(
	"login/loginByUsername",
	async ({ username, password }, thunkApi) => {
		try {
			const response = await axios.post<IUser>("http://localhost:8000/login", {
				username,
				password,
			});

			if (!response.data) {
				throw new Error();
			}

			localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(response.data));

			thunkApi.dispatch(userActions.setAuthData(response.data));

			return response.data;
		} catch (error) {
			return thunkApi.rejectWithValue(error.response.data.message);
		}
	}
);
