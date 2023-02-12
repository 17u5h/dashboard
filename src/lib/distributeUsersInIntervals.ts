import {User} from '../types/user'
import calcSummaryDuration from './calcSummaryDuration'
import {intervalForFiltering, secondsUserShouldWatch} from '../constants/constants'

export const distributeUsersInIntervals = (
	allUsers: User[],
	dispatchIncomers: (user: User[]) => void,
	dispatchLeavers: (user: User[]) => void,
	dispatchVideoEndTime: (time: number) => void,
	videoStartSeconds: number | null
) => {
	if (videoStartSeconds === null) return
	const users = allUsers.filter((el) => calcSummaryDuration(el.intervals) > secondsUserShouldWatch)
	const videoEndSeconds = Math.max.apply(null, users.map((el) => Math.max.apply(null, el.intervals.map((el) => el.till))))
	const OverallIntervals = (videoEndSeconds - videoStartSeconds) / intervalForFiltering

	for (let i = 0; i < OverallIntervals; i++) {
		const endInterval = i * intervalForFiltering
		const incomersInInterval = users.filter((el) => el.intervals[0].from - videoStartSeconds >= endInterval && el.intervals[0].from - videoStartSeconds < endInterval + intervalForFiltering)
		const leaversInInterval = users.filter((el) => el.intervals[el.intervals.length - 1].till - videoStartSeconds >= endInterval && el.intervals[el.intervals.length - 1].till - videoStartSeconds < endInterval + intervalForFiltering)
		dispatchIncomers(incomersInInterval)
		dispatchLeavers(leaversInInterval)
	}
}
