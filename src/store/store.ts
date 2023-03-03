import {create} from 'zustand'
import {User} from '../types/user'
import {ChartState, SettingsState, UsersState, VideoState} from '../types/store'

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
	dispatchIncomers: (incomingUsers: User[][]) =>
		set((state) => ({
			...state,
			incomingUsers
		})),
	dispatchIncomingUsersCount: (incomingUsersCount: number[]) => set((state) => ({
		...state, incomingUsersCount
	})),
	dispatchLeavers: (leavingUsers: User[][]) =>
		set((state) => ({
			...state,
			leavingUsers
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
	videoLink: '',
	timeToRewind: '0',
	dispatchVideoStartTime: (time: number) =>
		set((state) => ({
			...state,
			videoStart: time
		})),
	dispatchVideoEndTime: (time: number) =>
		set((state) => ({
			...state,
			videoEnd: time
		})),
	dispatchVideoLink: (link: string) =>
		set((state) => ({
			...state,
			videoLink: link
		})),
	dispatchTimeToRewindLink: (time: string) =>
		set((state) => ({
			...state,
			timeToRewind: time
		}))
}))

export const useSettingsStore = create<SettingsState>((set) => ({
	intervalForFiltering: 60,
	dispatchIntervalForFiltering: (time: number) => set((state) => ({
		...state,
		intervalForFiltering: time
	}))
}))

export const useChartStore = create<ChartState>((set) => ({
	chartTitle: '',
	dispatchChartTitle: (chartTitle: string) => set ((state) => ({
		...state,
		chartTitle
	}))
}))