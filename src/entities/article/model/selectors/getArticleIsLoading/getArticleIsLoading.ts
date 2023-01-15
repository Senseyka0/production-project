import { StateSchema } from "app/providers/store";

export const getArticleIsLoading = (state: StateSchema) => state?.articleDetails?.isLoading;
