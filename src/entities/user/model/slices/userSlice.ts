import { createSlice } from "@reduxjs/toolkit";

import { UserSchema } from "../types/user";

const initialState: UserSchema = {
	authData: undefined,
	isAuth: false,
};

const userSlice = createSlice({
	name: "users",
	initialState,
	reducers: {},
});

export const { actions: userActions, reducer: userReducer } = userSlice;
