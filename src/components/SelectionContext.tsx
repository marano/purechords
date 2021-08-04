import { createContext } from 'react'
import { Chord, ChordType, Interval, Scale } from '../types'

type Value = {
  selectedScaleIntervals?: Interval[]
  setSelectedScaleIntervals: (intervals?: Interval[]) => void

  selectedScale?: Scale
  setSelectedScale: (scale?: Scale) => void

  selectedChordType?: ChordType
  setSelectedChordType: (chordType?: ChordType) => void

  selectedChord?: Chord
  setSelectedChord: (chord?: Chord) => void

  selectedVoicing?: number[]
  setSelectedVoicing: (voicing?: number[]) => void
}

export default createContext<Value>(undefined!)
