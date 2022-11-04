import { StateSchema } from "app/providers/store";

export const getProfileCountry = (state: StateSchema) => state?.profile?.data?.country || "";
