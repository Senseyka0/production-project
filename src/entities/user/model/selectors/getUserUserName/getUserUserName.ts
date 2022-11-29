import { StateSchema } from "app/providers/store";

export const getUserUserName = (state: StateSchema) => state?.user?.authData?.username;
