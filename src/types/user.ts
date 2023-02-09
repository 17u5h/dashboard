export type Interval = {
  from: string
  till: string
  duration: string
}

export type User = {
  date: string
  username: string
  timeStart: string
  timeEnd: string
  intervals: Interval[]
}

export type Users = {
  users: User[]
}
export type FilteredUser = {
  username: string
  duration: number
}
