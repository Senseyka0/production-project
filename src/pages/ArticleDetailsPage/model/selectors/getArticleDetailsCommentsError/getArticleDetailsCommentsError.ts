import { StateSchema } from "app/providers/store";

export const getArticleDetailsCommentsError = (state: StateSchema) =>
	state?.articleDetailsComments?.error;
