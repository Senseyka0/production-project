import { StateSchema } from "app/providers/store";

export const getArticleDetailsCommentsIsLoading = (state: StateSchema) =>
	state?.articleDetailsComments?.isLoading;
