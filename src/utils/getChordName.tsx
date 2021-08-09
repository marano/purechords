import { keys } from 'fp-ts/lib/Record'
import { ChordType, Interval, Note } from '../types'
import chordTraits from '../constants/chordTraits'
import getNoteName from './getNoteName'

export default function getChordName(
  chordType: ChordType,
  intervals: Interval[],
  key: Note
) {
  const keyName = getNoteName(key)

  const trait = findTrait(
    chordTraits[chordType],
    intervals
  )

  return `${keyName}${trait}`
}

function findTrait(
  traitIntervals: Record<string, (Interval | undefined)[]>,
  intervals: Interval[]
) {
  return keys(traitIntervals).reverse().find(
    trait =>
      traitIntervals[trait].every(
        (interval, intervalIndex) =>
          interval === undefined
            || interval === intervals[intervalIndex]
      )
  ) || '?'
}
