
export type interval = {
	from: string
	till: string
	duration: string
}

export type user ={
	date: string
	firstName: string
	timeStart: string
	timeEnd: string
	intervals: interval[]
}
export type filteredUser = {
	firstName: string
	duration: number
}