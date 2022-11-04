import { StateSchema } from "app/providers/store";

export const getProfileAge = (state: StateSchema) => state?.profile?.data?.age || 0;
