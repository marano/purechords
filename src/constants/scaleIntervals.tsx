import { Interval } from '../types'

const {
  P1,
  m2,
  M2,
  A2,
  m3,
  M3,
  P4,
  A4,
  d5,
  P5,
  A5,
  m6,
  M6,
  m7,
  M7,
  P8,
} = Interval

export default {
  'Major': [P1, M2, M3, P4, P5, M6, M7, P8],

  'Natural Minor': [P1, M2, m3, P4, P5, m6, m7, P8],
  'Harmonic Minor': [P1, M2, m3, P4, P5, m6, M7, P8],
  'Melodic Minor': [P1, M2, m3, P4, P5, M6, M7, P8],

  'Major Pentatonic': [P1, M2, M3, P5, M6, P8],
  'Minor Pentatonic': [P1, m3, P4, P5, m7, P8],

  'Ionian': [P1, M2, M3, P4, P5, M6, M7, P8],
  'Dorian': [P1, M2, m3, P4, P5, M6, m7, P8],
  'Phrygian': [P1, m2, m3, P4, P5, m6, m7, P8],
  'Lydian': [P1, M2, M3, A4, P5, M6, M7, P8],
  'Mixolydian': [P1, M2, M3, P4, P5, M6, m7, P8],
  'Aeolian': [P1, M2, m3, P4, P5, m6, m7, P8],
  'Locrian': [P1, m2, m3, P4, d5, m6, m7, P8],

  'Blues': [P1, m3, P4, d5, P5, m6],
  'Arabic': [P1, M2, M3, P4, d5, m6, m7],
  'Balinese': [P1, m2, m3, P5, m6],
  'Bizantine': [P1, m2, M3, P4, d5, P5, m6],
  'Chinese': [P1, M3, d5, P5, M7],
  'Mongolese': [P1, M2, M3, P5, m6],
  'Egipcian': [P1, M2, P4, P5, m7],
  'Hindu': [P1, M2, M3, P4, P5, m6, m7],
  'Hirajoshi': [P1, M2, M3, P4, P5, m6, m7],
  'Hungarian mayor': [P1, A2, M3, A4, P5, m6, m7],
  'Hungarian minor': [P1, M2, M3, A4, P5, m6, M7],
  'Hungarian Sinti': [P1, M2, m3, A4, P5, m6, m7],
}
