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

export const intervalNames = [
  'm2',
  'M2',
  'm3',
  'M3',
  'P4',
  'TT',
  'P5',
  'm6',
  'M6',
  'm7',
  'M7',
  'Oct',
];

export const tone: Interval = 2;
export const semiTone: Interval = 1;

export const majorScaleIntervals = [tone, tone, semiTone, tone, tone, tone, semiTone];

export const notes = range(0, noteNames.length - 1) as Note[];
export const intervals = range(0, intervalNames.length - 1) as Interval[];