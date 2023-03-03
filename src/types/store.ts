import { User } from './user'

export type UsersState = {
  users: User[]
  incomingUsers: User[][]
  incomingUsersCount: number[]
  leavingUsers: User[][]
  leavingUsersCount: number[]
  dispatchUser: (user: User) => void
  dispatchIncomers: (user: User[][]) => void
  dispatchIncomingUsersCount: (user: number[]) => void
  dispatchLeavers: (user: User[][]) => void
  dispatchLeavingUsersCount: (user: number[]) => void
  dispatchClearData: () => void
}

export type VideoState = {
  videoStart: number | null
  videoEnd: number | null
  videoLink: string
  timeToRewind: string
  dispatchVideoStartTime: (time: number) => void
  dispatchVideoEndTime: (time: number) => void
  dispatchVideoLink: (link: string) => void
  dispatchTimeToRewindLink: (link: string) => void
}

export type SettingsState = {
  intervalForFiltering: number
  secondsUserShouldWatch: number
  dispatchIntervalForFiltering: (time: number) => void
  dispatchSecondsUserShouldWatch: (time: number) => void
}

export type ChartState = {
  chartTitle: string
  dispatchChartTitle: (chartTitle: string) => void
}
