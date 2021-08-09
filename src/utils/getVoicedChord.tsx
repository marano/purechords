import chordPositions from '../constants/chordPositions'
import chordVoicings from '../constants/chordVoicings'
import { Chord, ChordType, Voicing } from '../types'

export default function getVoicedChord(chord: Chord, voicing: Voicing) {
  const chordType = Object
    .values(ChordType)
    .find(chordType => chordVoicings[chordType].includes(voicing))!

  const order = voicing.order.map(
    scaleNotePosition =>
      chordPositions[chordType].indexOf(scaleNotePosition)
  )

  return order.map(index => chord[index])
}
