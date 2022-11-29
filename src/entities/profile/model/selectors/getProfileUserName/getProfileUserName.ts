import { StateSchema } from "app/providers/store";

export const getProfileUserName = (state: StateSchema) => state?.profile?.data?.username;
