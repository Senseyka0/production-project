import { StateSchema } from "app/providers/store";

export const getProfileCurrency = (state: StateSchema) => state?.profile?.data?.currency || "";
