import { Interval, Note } from '../types';
import { noteColors, noteNames, notes } from './constants';

export function getNoteName(note: Note) {
  return noteNames[note];
}

export function getNoteColor(note: Note) {
  return noteColors[note];
}

export function addIntervalToNote(note: Note, interval: number) {
  return rotateNoteIndex(note + interval)
}

export function intervalsToNotes(intervals: Interval[], key: Note) {
  return intervals
    .map((_, index) => sum(intervals.slice(0, index)))
    .map(interval => addIntervalToNote(key, interval));
}

function rotateNoteIndex(exceedingNote: number) {
  return exceedingNote - (notes.length * Math.floor(exceedingNote / notes.length)) as Note;
}

function sum(array: number[]) {
  return array.reduce((result, value) => result + value, 0)
}