import { Interval } from '../types'

export default {
  chromatic: [
    Interval.U,
    Interval.m2,
    Interval.M2,
    Interval.m3,
    Interval.M3,
    Interval.P4,
    Interval.TT,
    Interval.P5,
    Interval.m6,
    Interval.M6,
    Interval.m7,
    Interval.M7
  ],
  major: [ // Ionian mode
    Interval.U,
    Interval.M2,
    Interval.M3,
    Interval.P4,
    Interval.P5,
    Interval.M6,
    Interval.M7
  ],
  naturalMinor: [ // Aeolian mode
    Interval.U,
    Interval.M2,
    Interval.m3,
    Interval.P4,
    Interval.P5,
    Interval.m6,
    Interval.m7
  ],
  harmonicMinor: [ // Aeolian #7 scale
    Interval.U,
    Interval.M2,
    Interval.m3,
    Interval.P4,
    Interval.P5,
    Interval.m6,
    Interval.M7
  ],
  melodicMinor: [
    Interval.U,
    Interval.M2,
    Interval.m3,
    Interval.P4,
    Interval.P5,
    Interval.M6,
    Interval.M7
  ]
}