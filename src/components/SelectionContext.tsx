import { createContext } from 'react'
import { Interval, Note, Scale } from '../types'

type Value = {
  selectedScale?: Scale
  setSelectedScale: (scale?: Scale) => void

  selectedChordType?: Interval[]
  setSelectedChordType: (chordType?: Interval[]) => void

  selectedChord?: Note[]
  setSelectedChord: (chord?: Note[]) => void
}

export default createContext<Value>(undefined!)
