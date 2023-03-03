import {User} from "../types/user";

export const filterUsersForDashboard = (allUsers: User[], secondsUserShouldWatch: number) => {
	const usersClone: User[] = structuredClone(allUsers)
	usersClone.forEach(el => el.intervals = el.intervals.filter(el => (el.till - el.from) > secondsUserShouldWatch))
	const usersForDashboard: User[] = []

	const createUsersForDashboard = (intervalsLength: number, el: User) => {
		for (let i = 0; i < intervalsLength; i++) {
			const oneIntervalUser: User = {
				...el,
				intervals: [el.intervals[i]]
			}
			usersForDashboard.push(oneIntervalUser)
		}
	}
	usersClone.forEach(el => createUsersForDashboard(el.intervals.length, el))
	return usersForDashboard
}