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
