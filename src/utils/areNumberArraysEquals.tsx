import { getEq } from 'fp-ts/Array'
import { Eq } from 'fp-ts/number'

export default function areNumberArraysEquals(arrayA: number[], arrayB: number[]) {
  return getEq(Eq).equals(arrayA, arrayB)
}
