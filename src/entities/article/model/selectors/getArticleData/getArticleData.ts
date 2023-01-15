import { StateSchema } from "app/providers/store";

export const getArticleData = (state: StateSchema) => state.articleDetails?.data;
