import scaleDegreesByChordType from '../constants/scaleDegreesByChordType'
import chordVoicings from '../constants/chordVoicings'
import { Chord, ChordType, Voicing } from '../types'

export default function getVoicedChord(chord: Chord, voicing: Voicing): Chord {
  const chordType = Object
    .values(ChordType)
    .find(chordType => chordVoicings[chordType].includes(voicing))!

  return voicing.scaleDegrees
    .map(
      scaleDegree => scaleDegreesByChordType[chordType].indexOf(scaleDegree)
    )
    .map(index => chord[index])
}
