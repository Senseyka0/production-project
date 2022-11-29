import { StateSchema } from "app/providers/store";

export const getUserIsAuth = (state: StateSchema) => state?.user?.isAuth;
