import { useContext } from 'react';
import NoteHighlightContext from './NoteHighlightContext';

export default function useHighlightedNote() {
  return useContext(NoteHighlightContext);
}
