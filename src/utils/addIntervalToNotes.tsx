import { Note } from "../types";
import notes from "../constants/notes";

export default function addIntervalToNote(note: Note, interval: number) {
  return rotateNoteIndex(note + interval)
}


function rotateNoteIndex(exceedingNote: number) {
  return exceedingNote - (notes.length * Math.floor(exceedingNote / notes.length)) as Note;
}