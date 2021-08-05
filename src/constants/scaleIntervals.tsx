import { Interval } from '../types'

const {
  U,
  M2,
  m3,
  M3,
  P4,
  P5,
  m6,
  M6,
  m7,
  M7,
  Oct,
} = Interval

export default {
  'Major': [U, M2, M3, P4, P5, M6, M7, Oct],
  'Natural Minor': [U, M2, m3, P4, P5, m6, m7, Oct],
  'Harmonic Minor': [U, M2, m3, P4, P5, m6, M7, Oct],
  'Melodic Minor': [U, M2, m3, P4, P5, M6, M7, Oct],
}