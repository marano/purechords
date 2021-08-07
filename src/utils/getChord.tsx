import { ChordType, Note, Scale, ScaleDegree } from '../types'
import getChordIntervals from './getChordIntervals'
import intervalsToNotes from './intervalsToNotes'

export default function getChord(
  scale: Scale,
  scaleDegree: ScaleDegree,
  chordType: ChordType,
  key: Note
) {
  const intervals = getChordIntervals(
    chordType,
    scale,
    scaleDegree
  )

  return intervalsToNotes(intervals, key)
}
