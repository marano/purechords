import { createContext } from 'react'
import { Interval, Note } from '../types'

type Value = {
  selectedScaleNotes?: Note[]
  setSelectedScaleNotes: (notes?: Note[]) => void

  selectedChordType?: Interval[]
  setSelectedChordType: (chordType?: Interval[]) => void

  selectedChord?: Note[]
  setSelectedChord: (chord?: Note[]) => void
}

export default createContext<Value>(undefined!)
