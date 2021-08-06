import { Interval, Note } from '../types'
import intervalsToNotes from './intervalsToNotes'

export default function getScaleNotes(intervals: Interval[], key: Note) {
  const notes = intervalsToNotes(intervals, key)

  return notes.slice(0, notes.length - 1)
}