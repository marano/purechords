import { createContext } from 'react'
import { ChordType, Interval, Note, Scale } from '../types'

type Value = {
  selectedScaleIntervals?: Interval[]
  setSelectedScaleIntervals: (intervals?: Interval[]) => void

  selectedScale?: Scale
  setSelectedScale: (scale?: Scale) => void

  selectedChordType?: ChordType
  setSelectedChordType: (chordType?: ChordType) => void

  selectedChord?: Note[]
  setSelectedChord: (chord?: Note[]) => void
}

export default createContext<Value>(undefined!)
