import {create} from 'zustand'
import {User} from '../types/user'
import {UsersState, VideoState} from '../types/store'

export const useUsersStore = create<UsersState>((set) => ({
	users: [],
	incomingUsers: [],
	incomingUsersCount: [],
	leavingUsers: [],
	leavingUsersCount: [],
	dispatchUser: (user: User) =>
		set((state) => ({
			...state,
			users: [...state.users, user]
		})),
	dispatchIncomers: (incomingUser: User[]) =>
		set((state) => ({
			...state,
			incomingUsers: [...state.incomingUsers, incomingUser]
		})),
	dispatchIncomingUsersCount: (incomingUsersCount: number[]) => set((state) => ({
		...state, incomingUsersCount
	})),
	dispatchLeavers: (leavingUser: User[]) =>
		set((state) => ({
			...state,
			leavingUsers: [...state.leavingUsers, leavingUser]
		})),
	dispatchLeavingUsersCount: (leavingUsersCount: number[]) => set((state) => ({
		...state, leavingUsersCount
	})),
	dispatchClearData: () => set(state => ({
		...state,
		users: [],
		incomingUsers: [],
		incomingUsersCount: [],
		leavingUsers: [],
		leavingUsersCount: [],
	}))
}))

export const useVideoStore = create<VideoState>((set) => ({
	videoStart: null,
	videoEnd: null,
	dispatchVideoStartTime: (time: number) =>
		set((state) => ({
			...state,
			videoStart: time
		})),
	dispatchVideoEndTime: (time: number) =>
		set((state) => ({
			...state,
			videoEnd: time
		}))
}))
