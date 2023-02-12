import { User } from './user'

export type UsersState = {
  users: User[]
  incomingUsers: User[]
  dispatchUser: (user: User) => void
  dispatchIncomers: (user: User) => void
}

export type VideoState = {
  videoStart: number | null
  videoEnd: number | null
  dispatchVideoStartTime: (time: number) => void
  dispatchVideoEndTime: (time: number) => void
}
