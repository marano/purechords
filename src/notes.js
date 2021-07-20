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

export const noteIndexes = range(0, notes.length);

export function getNoteName(noteIndex) {
  return notes[noteIndex];
}

export function rotateNoteIndex(noteIndex) {
  return noteIndex - (notes.length * Math.floor(noteIndex / notes.length));
}
