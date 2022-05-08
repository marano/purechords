import scaleDegreesByChordType from '../constants/scaleDegreesByChordType'
import { ChordType, Scale, ScaleDegree } from '../types'

export default function getChordIntervals(
  chordType: ChordType,
  scale: Scale,
  keyScaleDegree: ScaleDegree
) {
  return scaleDegreesByChordType[chordType].map(
    scaleDegree =>
      getScaleIntervalAtIndex(scale, keyScaleDegree + scaleDegree)
       - getScaleIntervalAtIndex(scale, keyScaleDegree)
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
