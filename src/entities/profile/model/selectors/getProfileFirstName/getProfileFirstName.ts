import { StateSchema } from "app/providers/store";

export const getProfileFirstName = (state: StateSchema) => state?.profile?.data?.firstName;
