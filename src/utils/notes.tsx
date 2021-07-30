import { range } from 'fp-ts/NonEmptyArray'
import { Note } from '../types';

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

export const notes = range(0, noteNames.length - 1) as Note[];

export function getNoteName(note: Note) {
  return noteNames[note];
}

export function getNoteColor(note: Note) {
  return noteColors[note];
}

export function addIntervalToNote(note: Note, interval: number) {
  return rotateNoteIndex(note + interval)
}

export function intervalsToNotes(intervals: number[], key: Note) {
  return intervals
    .map((_, index) => key + sum(intervals.slice(0, index)))
    .map(rotateNoteIndex);
}

function rotateNoteIndex(exceedingNote: number) {
  return exceedingNote - (notes.length * Math.floor(exceedingNote / notes.length)) as Note;
}

function sum(array: number[]) {
  return array.reduce((result, value) => result + value, 0)
}