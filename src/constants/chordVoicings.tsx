import { ChordNotePosition, ChordType, SeventhAdded9ChordNotePosition } from '../types'

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
    {
      order: [
        SeventhAdded9ChordNotePosition.first,
        SeventhAdded9ChordNotePosition.third,
        SeventhAdded9ChordNotePosition.seventh,
        SeventhAdded9ChordNotePosition.nineth,
      ],
      stringJumps: [0, 0, 0, 0],
    },
    {
      order: [
        SeventhAdded9ChordNotePosition.third,
        SeventhAdded9ChordNotePosition.first,
        SeventhAdded9ChordNotePosition.nineth,
        SeventhAdded9ChordNotePosition.seventh,
      ],
      stringJumps: [0, 0, 0, 0],
    },
    {
      order: [
        SeventhAdded9ChordNotePosition.third,
        SeventhAdded9ChordNotePosition.first,
        SeventhAdded9ChordNotePosition.nineth,
        SeventhAdded9ChordNotePosition.seventh,
      ],
      stringJumps: [0, 1, 0, 0],
    },
  ],
}
