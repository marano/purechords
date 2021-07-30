export enum Note {
  'C',
  'C#',
  'D',
  'D#',
  'E',
  'F',
  'F#',
  'G',
  'G#',
  'A',
  'A#',
  'B',
}

export enum Interval {
  U,
  m2,
  M2,
  m3,
  M3,
  P4,
  TT,
  P5,
  m6,
  M6,
  m7,
  M7,
  Oct,
}

export type StringIndex = number
export type FretIndex = number

export type Fret = [StringIndex, FretIndex]