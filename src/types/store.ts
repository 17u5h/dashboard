import { User } from './user'

export type UsersState = {
  users: User[]
  incomingUsers: User[][]
  incomingUsersCount: number[]
  leavingUsers: User[][]
  leavingUsersCount: number[]
  dispatchUser: (user: User) => void
  dispatchIncomers: (user: User[]) => void
  dispatchIncomingUsersCount: (user: number[]) => void
  dispatchLeavers: (user: User[]) => void
  dispatchLeavingUsersCount: (user: number[]) => void
  dispatchClearData: () => void
}

export type VideoState = {
  videoStart: number | null
  videoEnd: number | null
  dispatchVideoStartTime: (time: number) => void
  dispatchVideoEndTime: (time: number) => void
}
