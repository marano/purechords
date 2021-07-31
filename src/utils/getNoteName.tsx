import { Note } from '../types'

export default function getNoteName(note: Note) {
  return Note[note]
}

