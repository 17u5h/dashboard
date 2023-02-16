import {User} from "../types/user";
import {secondsUserShouldWatch} from "../constants/constants";

export const filterUsersForDashboard = (allUsers: User[]) => {
	const usersClone: User[] = JSON.parse(JSON.stringify(allUsers))
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