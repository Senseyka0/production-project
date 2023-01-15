export interface UserSchema {
	authData?: IUser;
	isAuth: boolean;

	_mounted: boolean;
}

export interface IUser {
	id: number;
	username: string;
	avatar?: string;
	role: string;
}
