import { createContext } from 'react';
import { Interval, Note } from '../types';

type Value = {
  selectedNote: Note | null
  setSelectedNote: (note: Note | null) => void

  selectedScaleNotes: Note[] | null
  setSelectedScaleNotes: (notes: Note[] | null) => void

  selectedIntervals: Interval[] | null
  setSelectedIntervals: (notes: Interval[] | null) => void

  selectedIntervalNotes: Note[] | null
}

export default createContext<Value>(null!);
