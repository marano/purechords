import { Interval, Note } from '../types'
import intervalsToNotes from './intervalsToNotes'

export default function relativeIntervalsToNotes(intervals: Interval[], key: Note) {
  const absoluteIntervals = intervals.map(
    (_, index) => sum(intervals.slice(0, index))
  )

  return intervalsToNotes(absoluteIntervals, key)
}

function sum(array: number[]) {
  return array.reduce((result, value) => result + value, 0)
}