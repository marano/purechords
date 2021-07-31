import { Note } from '../types'
import notes from '../constants/notes'
import rotateArrayIndex from './rotateArrayIndex'

export default function addIntervalToNote(note: Note, interval: number) {
  return rotateArrayIndex(note + interval, notes)
}