import { Interval } from '../types/user'
import {converterHHMMSStoSec} from "./converterHHMMSStoSec";

const calcSummaryDuration = (intervals: Interval[]): number => {
  const durations = intervals.map((el) => converterHHMMSStoSec(el.till) - converterHHMMSStoSec(el.from))
  return durations.reduce((acc, el) => acc + el, 0)
}

export default calcSummaryDuration
