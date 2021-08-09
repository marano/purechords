import { ChordType, ScaleNotePosition } from '../types'

const { first, third, fifth, seventh, ninth } = ScaleNotePosition

export default {
  [ChordType.dyad]: [first, third],
  [ChordType.powerDyad]: [first, fifth],
  [ChordType.triad]: [first, third, fifth],
  [ChordType.seventh]: [first, third, fifth, seventh],
  [ChordType.seventhAdd9]: [first, third, seventh, ninth],
}
