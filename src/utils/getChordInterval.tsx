import { ChordType, Note, Scale, ScaleDegree } from '../types'
import getChord from './getChord'
import getChordIntervals from './getChordIntervals'

export default function getChordInterval(
  scaleKey: Note,
  chordType: ChordType,
  scale: Scale,
  scaleDegree: ScaleDegree,
  note: Note
) {
  const intervals = getChordIntervals(
    chordType,
    scale,
    scaleDegree
  )

  const chord = getChord(
    scale,
    scaleKey,
    scaleDegree,
    chordType
  )

  const noteIndex = chord.findIndex(
    chordNote => chordNote === note
  )

  return intervals[noteIndex]
}
