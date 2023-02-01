export type Interval = {
	from: string
	till: string
	duration: string
}

export type User ={
	date: string
	firstName: string
	timeStart: string
	timeEnd: string
	intervals: Interval[]
}

export type Users = {
	users: User[]
}
export type FilteredUser = {
	firstName: string
	duration: number
}