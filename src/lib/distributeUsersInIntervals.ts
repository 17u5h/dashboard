import {User} from '../types/user'
import {filterUsersForDashboard} from "./filterUsersForDashboard";

export const distributeUsersInIntervals = (
	allUsers: User[],
	dispatchIncomers: (user: User[][]) => void,
	dispatchLeavers: (user: User[][]) => void,
	dispatchVideoEndTime: (time: number) => void,
	videoStartSeconds: number | null,
	intervalForFiltering: number
) => {

	if (videoStartSeconds === null) return
	const users = filterUsersForDashboard(allUsers)
	const videoEndSeconds = Math.max.apply(null, users.map((el) => Math.max.apply(null, el.intervals.map((el) => el.till))))
	const OverallIntervals = (videoEndSeconds - videoStartSeconds) / intervalForFiltering

	const incomersInInterval = []
	const leaversInInterval = []

	for (let i = 0; i < OverallIntervals; i++) {
		const endInterval = i * intervalForFiltering
		incomersInInterval.push(users.filter((el) => el.intervals[0].from - videoStartSeconds >= endInterval && el.intervals[0].from - videoStartSeconds < endInterval + intervalForFiltering))
		leaversInInterval.push(users.filter((el) => el.intervals[0].till - videoStartSeconds >= endInterval && el.intervals[0].till - videoStartSeconds < endInterval + intervalForFiltering))

	}
	dispatchIncomers(incomersInInterval)
	dispatchLeavers(leaversInInterval)
}
