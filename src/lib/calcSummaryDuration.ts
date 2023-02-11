import {Interval} from '../types/user'

const calcSummaryDuration = (intervals: Interval[]): number => {
	const durations = intervals.map((el) => el.till - el.from)
	return durations.reduce((acc, el) => acc + el, 0)
}

export default calcSummaryDuration
