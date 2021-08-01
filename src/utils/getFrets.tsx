import { cartesian } from 'fp-ts-std/Array'
import { range } from 'fp-ts/NonEmptyArray'

export default function getFrets(stringStart: number, stringEnd: number, fretStart: number, fretEnd: number) {
  const stringRange = range(stringStart, stringEnd - 1)
  const fretRange = range(fretStart, fretEnd - 1)

  return cartesian(stringRange)(fretRange)
}