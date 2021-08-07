import chordPositions from '../constants/chordPositions'
import { ChordType, Scale, ScaleDegree } from '../types'

export default function getChordIntervals(
  chordType: ChordType,
  scale: Scale,
  scaleDegree: ScaleDegree
) {
  return chordPositions[chordType].map(
    chordPosition =>
      getScaleIntervalAtIndex(scale, scaleDegree + chordPosition)
       - getScaleIntervalAtIndex(scale, scaleDegree)
  )
}

function getScaleIntervalAtIndex(
  scale: Scale,
  scaleDegree: number
) {
  const lastScaleDegree = scale.length - 1
  const rotations = Math.floor(scaleDegree / lastScaleDegree)
  const lastInterval = scale[lastScaleDegree]
  const rest = scaleDegree - (lastScaleDegree * rotations)

  return (rotations * lastInterval) + scale[rest]
}
