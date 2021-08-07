import { ChordType, Interval, Note } from '../types'
import chordTypes from '../constants/chordTypes'
import getNoteName from './getNoteName'

export default function getChordName(
  chordType: ChordType,
  intervals: Interval[],
  keyNote: Note
) {
  const thirdInterval = intervals[1]
  const fifthInterval = intervals[2]
  const seventhInterval = intervals[3]

  const keyNoteName = getNoteName(keyNote)

  switch(chordType) {
    case chordTypes['Dyad']:
      return keyNoteName

    case chordTypes['Power Dyad']:
      return `${keyNoteName}5`

    case chordTypes['Triad']: {
      const isMajor = thirdInterval === Interval.M3 && fifthInterval === Interval.P5
      const isMinor = thirdInterval === Interval.m3 && fifthInterval === Interval.P5
      const isDiminished = thirdInterval === Interval.m3 && fifthInterval === Interval.TT
      const isAugmented = thirdInterval === Interval.M3 && fifthInterval === (Interval.P5 + 1)

      if (isMajor) return `${keyNoteName}maj`
      if (isMinor) return `${keyNoteName}min`
      if (isDiminished) return `${keyNoteName}dim`
      if (isAugmented) return `${keyNoteName}aug`

      return `${keyNoteName}???`
    }

    case chordTypes['Seventh']: {
      const isMajor = thirdInterval === Interval.M3 && seventhInterval === Interval.M7
      const isMinor = thirdInterval === Interval.m3 && seventhInterval === Interval.m7

      const isMinMajor = thirdInterval === Interval.m3 && fifthInterval === Interval.P5

      const isDiminished = thirdInterval === Interval.m3
        && fifthInterval === Interval.TT
        && seventhInterval === (Interval.m7 - 1)

      const isHalfDiminished = thirdInterval === Interval.m3
        && fifthInterval === Interval.TT
        && seventhInterval === Interval.m7

      const isDominant = thirdInterval === Interval.M3
        && fifthInterval === Interval.P5
        && seventhInterval === Interval.m7

      const isDominantFlatFive = thirdInterval === Interval.M3
        && fifthInterval === Interval.TT
        && seventhInterval === Interval.m7

      const isAugmentedFifth = thirdInterval === Interval.M3
        && fifthInterval === (Interval.P5 + 1)
        && seventhInterval === Interval.m7

      if (isDiminished) return `${keyNoteName}dim7`
      if (isHalfDiminished) return `${keyNoteName}min7(dim5)`
      if (isDominant) return `${keyNoteName}7`
      if (isDominantFlatFive) return `${keyNoteName}7(dim5)`
      if (isAugmentedFifth) return `${keyNoteName}maj7(aug5)`
      if (isMajor) return `${keyNoteName}maj7`
      if (isMinor) return `${keyNoteName}min7`
      if (isMinMajor) return `${keyNoteName}min(maj7)`

      return `${keyNoteName}???7`
    }
  }
}
