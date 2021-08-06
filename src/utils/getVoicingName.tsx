import { replicate } from 'fp-ts/lib/ReadonlyNonEmptyArray'
import { ChordNotePosition, Voicing } from '../types'

const { first, third, fifth, seventh } = ChordNotePosition

const nameByPosition = {
  [first]: '1',
  [third]: '3',
  [fifth]: '5',
  [seventh]: '7',
}

export default function getVoicingName(voicing: Voicing) {
  const positionNames = voicing.order.map(
    position => nameByPosition[position]
  )

  return voicing.stringJumps.reduce(
    (result, stringJumps, index) => {
      const before = result.slice(0, index)

      const between = stringJumps > 0
        ? replicate(' ')(stringJumps)
        : []

      const after = result.slice(index, result.length)

      return before.concat(between).concat(after)
    },
    positionNames
  ).join('/')
}
