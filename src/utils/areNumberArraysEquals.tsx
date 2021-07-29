import { getEq } from 'fp-ts/lib/Array';
import { Eq } from 'fp-ts/lib/number';

export default function areNumberArraysEquals(arrayA: number[], arrayB: number[]) {
  return getEq(Eq).equals(arrayA, arrayB)
}
