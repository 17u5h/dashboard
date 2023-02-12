import { create } from 'zustand'
import { User } from '../types/user'
import { UsersState, VideoState } from '../types/store'

export const useUsersStore = create<UsersState>((set) => ({
  users: [],
  incomingUsers: [],
  dispatchUser: (user: User) =>
    set((state) => ({
      ...state,
      users: [...state.users, user]
    })),
  dispatchIncomers: (incomingUser: User) =>
    set((state) => ({
      ...state,
      incomingUsers: [...state.incomingUsers, incomingUser]
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
