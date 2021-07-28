import { createContext } from 'react';
import { Note } from '../types';

type Value = {
  selectedNote: Note | null
  setSelectedNote: (note: Note | null) => void

  selectedScaleNotes: Note[] | null
  setSelectedScaleNotes: (notes: Note[] | null) => void

  selectedIntervals: number[] | null
  setSelectedIntervals: (notes: number[] | null) => void

  selectedIntervalNotes: Note[] | null
}

export default createContext<Value>(null!);
