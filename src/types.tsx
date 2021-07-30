export type Note = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11

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