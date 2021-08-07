import { ChordType, Interval, Note } from '../types'
import getNoteName from './getNoteName'

const {
  m3,
  M3,
  TT,
  P5,
  m7,
  M7,
} = Interval

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
    case ChordType.dyad:
      return keyNoteName

    case ChordType.powerDyad:
      return `${keyNoteName}5`

    case ChordType.triad: {
      const isMajor = thirdInterval === M3 && fifthInterval === P5
      const isMinor = thirdInterval === m3 && fifthInterval === P5
      const isDiminished = thirdInterval === m3 && fifthInterval === TT
      const isAugmented = thirdInterval === M3 && fifthInterval === (P5 + 1)

      if (isMajor) return `${keyNoteName}maj`
      if (isMinor) return `${keyNoteName}min`
      if (isDiminished) return `${keyNoteName}dim`
      if (isAugmented) return `${keyNoteName}aug`

      return `${keyNoteName}???`
    }

    case ChordType.seventh: {
      const isMajor = thirdInterval === M3 && seventhInterval === M7
      const isMinor = thirdInterval === m3 && seventhInterval === m7

      const isMinMajor = thirdInterval === m3 && fifthInterval === P5

      const isDiminished = thirdInterval === m3
        && fifthInterval === TT
        && seventhInterval === (m7 - 1)

      const isHalfDiminished = thirdInterval === m3
        && fifthInterval === TT
        && seventhInterval === m7

      const isDominant = thirdInterval === M3
        && fifthInterval === P5
        && seventhInterval === m7

      const isDominantFlatFive = thirdInterval === M3
        && fifthInterval === TT
        && seventhInterval === m7

      const isAugmentedFifth = thirdInterval === M3
        && fifthInterval === (P5 + 1)
        && seventhInterval === m7

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
