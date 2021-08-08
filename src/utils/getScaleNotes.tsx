import { Note, Scale } from '../types'
import intervalsToNotes from './intervalsToNotes'

export default function getScaleNotes(scale: Scale, key: Note) {
  const notes = intervalsToNotes(scale, key)

  return notes.slice(0, notes.length - 1)
}
