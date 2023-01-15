import { IUser } from "entities/user";

export interface IComment {
	id: number;
	text: string;
	articleId: number;
	userId: number;
	user: IUser;
}
