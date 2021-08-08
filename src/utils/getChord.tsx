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

  const chordKey = getScaleNotes(
    scale,
    scaleKey
  )[scaleDegree]

  return intervalsToNotes(intervals, chordKey)
}
