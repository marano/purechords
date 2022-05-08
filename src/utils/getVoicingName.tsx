import { replicate } from 'fp-ts/lib/ReadonlyNonEmptyArray'
import { Voicing } from '../types'

export default function getVoicingName(voicing: Voicing) {
  const positionNames = voicing.scaleDegrees
    .map(scaleDegree => scaleDegree + 1)
    .map(scaleDegreePosition => scaleDegreePosition.toString())

  return voicing.stringJumps.reduce(
    (result, stringJumps, index) => {
      const before = result.slice(0, index)

      const between = stringJumps > 0
        ? replicate('-')(stringJumps)
        : []

      const after = result.slice(index, result.length)

      return before.concat(between).concat(after)
    },
    positionNames
  ).join('/')
}
