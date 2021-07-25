import { range } from 'ramda';

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

const tone = 2;
const semiTone = 1;

export const majorScaleIntervals = [tone, tone, semiTone, tone, tone, tone, semiTone];

export const notes = range(0, noteNames.length);

export function getNoteName(note) {
  return noteNames[note];
}

export function rotateNoteIndex(note) {
  return note - (noteNames.length * Math.floor(note / noteNames.length));
}
