import { StateSchema } from "app/providers/store";

export const getProfileLastName = (state: StateSchema) => state?.profile?.data?.lastName;
