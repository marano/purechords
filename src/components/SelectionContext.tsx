import { createContext } from 'react'
import { Interval, Note } from '../types'

type Value = {
  selectedNote?: Note
  setSelectedNote: (note?: Note) => void

  selectedScaleNotes?: Note[]
  setSelectedScaleNotes: (notes?: Note[]) => void

  selectedIntervals?: Interval[]
  setSelectedIntervals: (notes?: Interval[]) => void
  selectedIntervalNotes?: Note[]

  selectedChordNote?: Note
  setSelectedChordNote: (note?: Note) => void
}

export default createContext<Value>(undefined!)
