export interface UserSchema {
	authData?: IUser;
	isAuth: boolean;
}

export interface IUser {
	id: string;
	username: string;
}
