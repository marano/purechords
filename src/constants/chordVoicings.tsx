import { ChordType, ScaleDegree, Voicing } from '../types'

const { first, third, fifth, seventh, ninth } = ScaleDegree

export default {
  [ChordType.dyad]: [] as Voicing[],
  [ChordType.powerDyad]: [] as Voicing[],
  [ChordType.triad]: [
    {
      scaleDegrees: [first, third, fifth],
      stringJumps: [0, 0, 0],
    },
    {
      scaleDegrees: [third, fifth, first],
      stringJumps: [0, 0, 0],
    },
    {
      scaleDegrees: [fifth, first, third],
      stringJumps: [0, 0, 0],
    },
    {
      scaleDegrees: [first, fifth, third],
      stringJumps: [0, 1, 0],
    },
    {
      scaleDegrees: [third, first, fifth],
      stringJumps: [0, 1, 0],
    },
    {
      scaleDegrees: [fifth, third, first],
      stringJumps: [0, 1, 0],
    },
  ],
  [ChordType.seventh]: [
    {
      scaleDegrees: [first, third, fifth, seventh],
      stringJumps: [0, 0, 0, 0],
    },
    {
      scaleDegrees: [first, fifth, seventh, third],
      stringJumps: [0, 0, 0, 0],
    },
    {
      scaleDegrees: [third, seventh, first, fifth],
      stringJumps: [0, 0, 0, 0],
    },
    {
      scaleDegrees: [fifth, first, third, seventh],
      stringJumps: [0, 0, 0, 0],
    },
    {
      scaleDegrees: [seventh, third, fifth, first],
      stringJumps: [0, 0, 0, 0],
    },
    {
      scaleDegrees: [first, seventh, third, fifth],
      stringJumps: [0, 1, 0, 0],
    },
    {
      scaleDegrees: [third, first, fifth, seventh],
      stringJumps: [0, 1, 0, 0],
    },
    {
      scaleDegrees: [fifth, third, seventh, first],
      stringJumps: [0, 1, 0, 0],
    },
    {
      scaleDegrees: [seventh, fifth, first, third],
      stringJumps: [0, 1, 0, 0],
    },
    {
      scaleDegrees: [first, third, fifth, seventh],
      stringJumps: [0, 2, 0, 0],
    },
    {
      scaleDegrees: [third, fifth, seventh, first],
      stringJumps: [0, 2, 0, 0],
    },
    {
      scaleDegrees: [fifth, seventh, first, third],
      stringJumps: [0, 2, 0, 0],
    },
    {
      scaleDegrees: [seventh, first, third, fifth],
      stringJumps: [0, 2, 0, 0],
    },
  ],
  [ChordType.seventhAdd9]: [
    {
      scaleDegrees: [first, third, seventh, ninth],
      stringJumps: [0, 0, 0, 0],
    },
    {
      scaleDegrees: [third, first, ninth, seventh],
      stringJumps: [0, 0, 0, 0],
    },
    {
      scaleDegrees: [third, first, ninth, seventh],
      stringJumps: [0, 1, 0, 0],
    },
  ],
}
