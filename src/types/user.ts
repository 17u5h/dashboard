export type Interval = {
  from: number
  till: number
}

export type User = {
  username: string
  email: string
  tel: string
  IP: string
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
