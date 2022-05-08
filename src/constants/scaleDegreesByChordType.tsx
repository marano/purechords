import { ChordType, ScaleDegree } from '../types'

const { first, third, fifth, seventh, ninth } = ScaleDegree

export default {
  [ChordType.dyad]: [first, third],
  [ChordType.powerDyad]: [first, fifth],
  [ChordType.triad]: [first, third, fifth],
  [ChordType.seventh]: [first, third, fifth, seventh],
  [ChordType.seventhAdd9]: [first, third, seventh, ninth],
}
