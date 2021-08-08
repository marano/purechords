import { ChordType, Note, Scale, ScaleDegree } from '../types'
import getChordIntervals from './getChordIntervals'
import getScaleNotes from './getScaleNotes'
import intervalsToNotes from './intervalsToNotes'
import rotateNumber from './rotateNumber'

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

  const lastInterval = rotateNumber(intervals[intervals.length - 1], 12)
  const shouldFixNineth = Math.abs(lastInterval - intervals[0]) === 1

  const fixedIntervals = shouldFixNineth
    ? [...intervals.slice(0, intervals.length - 1), lastInterval + 2]
    : intervals

  const chordKey = getScaleNotes(
    scale,
    scaleKey
  )[scaleDegree]

  return intervalsToNotes(fixedIntervals, chordKey)
}
