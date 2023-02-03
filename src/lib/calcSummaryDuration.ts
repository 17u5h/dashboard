import { Interval } from '../types/user'

const calcSummaryDuration = (intervals: Interval[]): number => {
  const durations = intervals.map((el) => Number(el.duration))
  return durations.reduce((acc, el) => acc + el, 0)
}

export default calcSummaryDuration
