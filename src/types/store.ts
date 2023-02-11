import {User} from "./user";

export type UsersState = {
	users: User[]
	dispatchUser: (user: User) => void
}

export type VideoState = {
	videoStart: number | null
	dispatchVideoStartTime: (time: number) => void
}