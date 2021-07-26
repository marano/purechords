import { range, sum } from 'ramda';

const noteNames = [
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

const noteColors = [
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

const tone = 2;
const semiTone = 1;

export const majorScaleIntervals = [tone, tone, semiTone, tone, tone, tone, semiTone];

export const notes = range(0, noteNames.length);

export function getNoteName(note) {
  return noteNames[note];
}

export function getNoteColor(note) {
  return noteColors[note];
}

export function rotateNoteIndex(note) {
  return note - (noteNames.length * Math.floor(note / noteNames.length));
}

export function intervalsToNotes(intervals, key) {
  return intervals
    .map((_, index) => key + sum(intervals.slice(0, index)))
    .map(rotateNoteIndex);
}