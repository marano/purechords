import { Note } from '../types'

export default function rotateArrayIndex<T>(exceedingNote: number, array: T[]) {
  return exceedingNote - (array.length * Math.floor(exceedingNote / array.length)) as Note
}
