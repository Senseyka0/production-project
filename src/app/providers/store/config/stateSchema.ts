import { UserSchema } from "entities/user";
import { LoginSchema } from "features/authByUsername";

export interface StateSchema {
	user: UserSchema;
	login: LoginSchema;
}
