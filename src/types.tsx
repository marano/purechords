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

export enum Note {
  'B#' = Interval.P1,
  'C'  = Interval.P1,

  'C#' = Interval.A1,
  'Db' = Interval.m2,

  'D'  = Interval.M2,

  'D#' = Interval.A2,
  'Eb' = Interval.m3,

  'E'  = Interval.M3,
  'Fb' = Interval.d4,

  'E#' = Interval.A3,
  'F'  = Interval.P4,

  'F#' = Interval.A4,
  'Gb' = Interval.d5,

  'G'  = Interval.P5,

  'G#' = Interval.A5,
  'Ab' = Interval.m6,

  'A'  = Interval.M6,

  'A#' = Interval.A6,
  'Bb' = Interval.m7,

  'B'  = Interval.M7,
  'Cb' = Interval.d8
}

export enum ScaleNotePosition {
  first = 0,
  third = 2,
  fifth = 4,
  seventh = 6,
  ninth = 8,
}

export enum ChordType {
  dyad = 'Dyad',
  powerDyad = 'Power Dyad',
  triad = 'Triad',
  seventh = 'Seventh',
  seventhAdd9 = 'Seventh Add 9',
}

export type StringIndex = number
export type FretIndex = number

export type Fret = [StringIndex, FretIndex]

export type Scale = Interval[]
export type ScaleDegree = number

export type ChordPositions = ScaleNotePosition[]
export type Chord = Note[]

export interface Voicing {
  order: ScaleNotePosition[]
  stringJumps: number[]
}

export interface Selection {
  selectedNote?: Note
  selectedScale?: Scale
  selectedChordType?: ChordType
  selectedScaleDegree?: ScaleDegree
  selectedVoicing?: Voicing
}
