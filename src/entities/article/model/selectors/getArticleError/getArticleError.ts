import { StateSchema } from "app/providers/store";

export const getArticleError = (state: StateSchema) => state?.articleDetails?.error;
