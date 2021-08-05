import { ChordNotePosition } from '../types'

const { first, third, fifth, seventh } = ChordNotePosition

export default [
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
]
