import { Note } from '../types'
import notes from '../constants/notes'
import rotateNumber from './rotateNumber'

export default function addIntervalToNote(note: Note, interval: number) {
  return rotateNumber(note + interval, notes.length) as Note
}
