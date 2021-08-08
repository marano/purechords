import { ChordNotePosition, ChordType } from '../types'

const { first, third, fifth, seventh } = ChordNotePosition

export default {
  [ChordType.dyad]: [],
  [ChordType.powerDyad]: [],
  [ChordType.triad]: [
    {
      order: [first, third, fifth],
      stringJumps: [0, 0, 0],
    },
    {
      order: [third, fifth, first],
      stringJumps: [0, 0, 0],
    },
    {
      order: [fifth, first, third],
      stringJumps: [0, 0, 0],
    },
    {
      order: [first, fifth, third],
      stringJumps: [0, 1, 0],
    },
    {
      order: [third, first, fifth],
      stringJumps: [0, 1, 0],
    },
    {
      order: [fifth, third, first],
      stringJumps: [0, 1, 0],
    },
  ],
  [ChordType.seventh]: [
    {
      order: [first, third, fifth, seventh],
      stringJumps: [0, 0, 0, 0],
    },
    {
      order: [first, fifth, seventh, third],
      stringJumps: [0, 0, 0, 0],
    },
    {
      order: [third, seventh, first, fifth],
      stringJumps: [0, 0, 0, 0],
    },
    {
      order: [fifth, first, third, seventh],
      stringJumps: [0, 0, 0, 0],
    },
    {
      order: [seventh, third, fifth, first],
      stringJumps: [0, 0, 0, 0],
    },
    {
      order: [first, seventh, third, fifth],
      stringJumps: [0, 1, 0, 0],
    },
    {
      order: [third, first, fifth, seventh],
      stringJumps: [0, 1, 0, 0],
    },
    {
      order: [fifth, third, seventh, first],
      stringJumps: [0, 1, 0, 0],
    },
    {
      order: [seventh, fifth, first, third],
      stringJumps: [0, 1, 0, 0],
    },
    {
      order: [first, third, fifth, seventh],
      stringJumps: [0, 2, 0, 0],
    },
    {
      order: [third, fifth, seventh, first],
      stringJumps: [0, 2, 0, 0],
    },
    {
      order: [fifth, seventh, first, third],
      stringJumps: [0, 2, 0, 0],
    },
    {
      order: [seventh, first, third, fifth],
      stringJumps: [0, 2, 0, 0],
    },
  ],
  [ChordType.seventhAdd9]: [
    // {
    //   order: [2],
    //   stringJumps: [0, 0, 0, 0],
    //   // first = 0,
    //   // third = 2,
    //   // fifth = 4,
    //   // seventh = 6,
    //   // nineth = 8,
    //   // [ChordType.seventhAdd9]: [first, third, seventh, nineth],
    //   //
    // },
  ],
}
