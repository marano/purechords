import { Scale } from '../types'
import intervalsToNotes from './intervalsToNotes'

export default function getScaleNotes(scale: Scale) {
  const notes = intervalsToNotes(scale.intervals, scale.key)
  return notes.slice(0, notes.length - 1)
}