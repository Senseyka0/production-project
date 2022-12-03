export interface UserSchema {
	authData?: IUser;
	isAuth: boolean;

	_mounted: boolean;
}

export interface IUser {
	id: string;
	username: string;
}
