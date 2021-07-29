import { cartesian } from 'fp-ts-std/Array'
import { range } from 'fp-ts/NonEmptyArray'

export function getFrets(stringStart: number, stringEnd: number, fretStart: number, fretEnd: number) {
  const stringRange = range(stringStart, stringEnd - 1).reverse();
  const fretRange = range(fretStart, fretEnd - 1);

  return cartesian(stringRange)(fretRange);
}