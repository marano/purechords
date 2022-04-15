import { ChordType, Interval } from '../types'

const __ = undefined

const {
  P1,
  M2,
  m3,
  M3,
  A4,
  d5,
  P5,
  A5,
  d7,
  m7,
  M7,
} = Interval

export default {
  [ChordType.dyad]: {
    '': [__, __],
  },
  [ChordType.powerDyad]: {
    '5': [__, __],
  },
  [ChordType.triad]: {
    maj: [P1, M3, P5],
    min: [P1, m3, P5],
    dim: [P1, m3, d5],
    aug: [P1, M3, A5],
  },
  [ChordType.seventh]: {
    'min(maj7)':  [P1, m3, P5, M7],
    'min7':       [P1, m3, P5, m7],
    'maj7':       [P1, M3, P5, M7],
    'maj7(aug5)': [P1, M3, A5, M7],
    '7(dim5)':    [P1, M3, d5, m7],
    '7':          [P1, M3, P5, m7],
    'min7(dim5)': [P1, m3, d5, m7],
    'dim7':       [P1, m3, d5, m7],
  },
  [ChordType.seventhAdd9]: {
    'min(maj7)':  [P1, m3, P5, M2],
    'min7':       [P1, m3, M2, m7],
    'maj7':       [P1, M3, M2, M7],
    'maj7(aug5)': [P1, M3, A5, m7],
    '7(dim5)':    [P1, M3, A4, m7],
    '7':          [P1, M3, M2, m7],
    'min7(dim5)': [P1, m3, d5, m7],
    'dim7':       [P1, m3, d5, m7],
  },
}

