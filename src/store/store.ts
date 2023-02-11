import {create} from "zustand";
import {User} from "../types/user";
import {UsersState, VideoState} from "../types/store";

export const useUsersStore = create<UsersState>((set) => ({
	users: [],
	dispatchUser: (user: User) => set(state => ({
			...state,
			users: [
				...state.users,
				user
			]
		}
	))
}))

export const useVideoStore = create<VideoState>((set) => ({
	videoStart: null,
	dispatchVideoStartTime: (time: number) => set(state => ({
		...state,
		videoStart: time
	}))
}))