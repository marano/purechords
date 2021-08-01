import { createContext } from 'react'
import { Note } from '../types'

type Value = {
  selectedScaleNotes?: Note[]
  setSelectedScaleNotes: (notes?: Note[]) => void

  selectedChord?: Note[]
  setSelectedChord: (chord?: Note[]) => void
}

export default createContext<Value>(undefined!)
