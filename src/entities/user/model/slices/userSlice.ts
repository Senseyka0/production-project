import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { LOCAL_STORAGE_USER_KEY } from "shared/constants/localStorage";

import { UserSchema, IUser } from "../types/user";

const initialState: UserSchema = {
	authData: undefined,
	isAuth: false,
};

const userSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		setAuthData: (state, action: PayloadAction<IUser>) => {
			state.authData = action.payload;
			state.isAuth = true;
		},
		initAuthData: (state) => {
			const authData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_USER_KEY) || "{}");

			if (Object.keys(authData).length !== 0) {
				state.authData = authData;
				state.isAuth = true;
			}
		},
		logOut: (state) => {
			state.authData = undefined;
			state.isAuth = false;

			localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
		},
	},
});

export const { actions: userActions, reducer: userReducer } = userSlice;
