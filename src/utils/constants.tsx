import { isNumber } from 'fp-ts/number';
import { Interval, Note } from '../types';

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

export const scaleIntervals = {
  major: [
    Interval.U,
    Interval.M2,
    Interval.M3,
    Interval.P4,
    Interval.P5,
    Interval.M6,
    Interval.M7
  ]
}

export const chordIntervals = {
  major: [Interval.U, Interval.M3, Interval.P5],
  augmented: [Interval.U, Interval.M3, Interval.m6],
  minor: [Interval.U, Interval.m3, Interval.P5],
}

export const notes = Object.values(Note).filter(isNumber);