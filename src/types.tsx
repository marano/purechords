export enum Note {
  'B#' = 0,
  'C'  = 0,

  'C#' = 1,
  'Db' = 1,

  'D'  = 2,

  'D#' = 3,
  'Eb' = 3,

  'E'  = 4,
  'Fb' = 4,

  'E#' = 5,
  'F'  = 5,

  'F#' = 6,
  'Gb' = 6,

  'G'  = 7,

  'G#' = 8,
  'Ab' = 8,

  'A'  = 9,

  'A#' = 10,
  'Bb' = 10,

  'B'  = 11,
  'Cb' = 11
}

export enum Interval {
  P1 = 0,
  d2 = 0,

  A1 = 1,
  m2 = 1,

  M2 = 2,
  d3 = 2,

  A2 = 3,
  m3 = 3,

  M3 = 4,
  d4 = 4,

  A3 = 5,
  P4 = 5,

  A4 = 6,
  TT = 6,
  d5 = 6,

  P5 = 7,
  d6 = 7,

  A5 = 8,
  m6 = 8,

  M6 = 9,
  d7 = 9,

  A6 = 10,
  m7 = 10,

  M7 = 11,
  d8 = 11,

  A7 = 12,
  P8 = 12,
}

export enum ScaleNotePosition {
  first = 0,
  third = 2,
  fifth = 4,
  seventh = 6,
}

export enum ChordNotePosition {
  first = 0,
  third = 1,
  fifth = 2,
  seventh = 3,
}

export enum ChordType {
  dyad = 'Dyad',
  powerDyad = 'Power Dyad',
  triad = 'Triad',
  seventh = 'Seventh',
}

export type StringIndex = number
export type FretIndex = number

export type Fret = [StringIndex, FretIndex]

export type Scale = Interval[]
export type ScaleDegree = number

export type ChordPositions = ScaleNotePosition[]
export type Chord = Note[]

export interface Voicing {
  order: ChordNotePosition[]
  stringJumps: number[]
}
