import { createContext } from 'react';

type Value = {
  selectedNote: number | null
  setSelectedNote: (note: number | null) => void

  selectedScaleNotes: number[] | null
  setSelectedScaleNotes: (notes: number[] | null) => void

  selectedIntervals: number[] | null
  setSelectedIntervals: (notes: number[] | null) => void

  selectedIntervalNotes: number[] | null
}

export default createContext<Value>(null!);
