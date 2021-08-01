import { Note } from '../types'

export default function rotateArrayIndex<T>(exceedingIndex: number, array: T[]) {
  return exceedingIndex - (array.length * Math.floor(exceedingIndex / array.length)) as Note
}
