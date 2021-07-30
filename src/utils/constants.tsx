import { range } from 'fp-ts/NonEmptyArray'
import { Interval, Note } from '../types';

export const noteNames = [
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
];

export const noteColors = [
  '#e23058',
  '#f7583a',
  '#f8943e',
  '#f3b72f',
  '#edd92a',
  '#95c531',
  '#55a753',
  '#11926e',
  '#3161a3',
  '#5b37cb',
  '#a247be',
  '#e957b2',
];

export const chordIntervals = {
  major: [Interval.U, Interval.M3, Interval.P5],
  augmented: [Interval.U, Interval.M3, Interval.m6],
  minor: [Interval.U, Interval.m3, Interval.P5],
}

export const tone: Interval = Interval.M2;
export const semiTone: Interval = Interval.m2;

export const majorScaleIntervals = [
  Interval.U,
  Interval.M2,
  Interval.M3,
  Interval.P4,
  Interval.P5,
  Interval.M6,
  Interval.M7,
  Interval.Oct
];

export const notes = range(0, noteNames.length - 1) as Note[];