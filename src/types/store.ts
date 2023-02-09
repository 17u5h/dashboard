import {User} from "./user";

export type UsersState = {
	users: User[]
	dispatchUser: (user: User) => void
}