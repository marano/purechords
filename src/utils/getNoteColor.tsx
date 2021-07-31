import { Note } from "../types";
import noteColors from "../constants/noteColors";

export function getNoteColor(note: Note) {
  return noteColors[note];
}