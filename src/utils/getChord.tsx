import { ChordType, Note, Scale, ScaleDegree } from '../types'
import getChordIntervals from './getChordIntervals'
import getScaleNotes from './getScaleNotes'
import intervalsToNotes from './intervalsToNotes'

export default function getChord(
  scale: Scale,
  scaleKey: Note,
  scaleDegree: ScaleDegree,
  chordType: ChordType
) {
  const intervals = getChordIntervals(
    chordType,
    scale,
    scaleDegree
  )

  const scaleNotes = getScaleNotes(
    scale,
    scaleKey
  )

  const chordKey = scaleNotes[scaleDegree]

  return intervalsToNotes(intervals, chordKey)
}
