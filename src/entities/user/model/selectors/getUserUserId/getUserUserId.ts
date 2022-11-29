import { StateSchema } from "app/providers/store";

export const getUserUserId = (state: StateSchema) => state?.user?.authData?.id;
