import { StateSchema } from "app/providers/store";

export const getProfileCity = (state: StateSchema) => state?.profile?.data?.city || "";
