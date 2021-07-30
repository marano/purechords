import { Interval, Note } from '../types';
import { noteColors, notes } from './constants';

export function getNoteName(note: Note) {
  return Note[note]
}

export function getNoteColor(note: Note) {
  return noteColors[note];
}

export function addIntervalToNote(note: Note, interval: number) {
  return rotateNoteIndex(note + interval)
}

export function intervalsToNotes(intervals: Interval[], key: Note) {
  return intervals.map(interval => addIntervalToNote(key, interval));
}

export function relativeIntervalsToNotes(intervals: Interval[], key: Note) {
  const absoluteIntervals = intervals.map(
    (_, index) => sum(intervals.slice(0, index))
  )

  return intervalsToNotes(absoluteIntervals, key)
}

function rotateNoteIndex(exceedingNote: number) {
  return exceedingNote - (notes.length * Math.floor(exceedingNote / notes.length)) as Note;
}

function sum(array: number[]) {
  return array.reduce((result, value) => result + value, 0)
}