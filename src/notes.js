import { range } from 'ramda';

const notes = [
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

export const noteIndexes = range(0, notes.length);

export function getNoteName(noteIndex) {
  return notes[noteIndex];
}

export function rotateNoteIndex(noteIndex) {
  return noteIndex - (notes.length * Math.floor(noteIndex / notes.length));
}
