import { Interval, Note } from '../types'
import addIntervalToNote from './addIntervalToNotes'

export default function intervalsToNotes(intervals: Interval[], key: Note) {
  return intervals.map(interval => addIntervalToNote(key, interval))
}