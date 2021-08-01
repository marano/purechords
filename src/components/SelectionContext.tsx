import { createContext } from 'react'
import { ChordType, Note, Scale } from '../types'

type Value = {
  selectedScale?: Scale
  setSelectedScale: (scale?: Scale) => void

  selectedChordType?: ChordType
  setSelectedChordType: (chordType?: ChordType) => void

  selectedChord?: Note[]
  setSelectedChord: (chord?: Note[]) => void
}

export default createContext<Value>(undefined!)
