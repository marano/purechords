import { createContext } from 'react'
import { Chord, ChordType, Interval, Scale, Voicing } from '../types'

type Value = {
  selectedScaleIntervals?: Interval[]
  setSelectedScaleIntervals: (intervals?: Interval[]) => void

  selectedScale?: Scale
  setSelectedScale: (scale?: Scale) => void

  selectedChordType?: ChordType
  setSelectedChordType: (chordType?: ChordType) => void

  selectedChord?: Chord
  setSelectedChord: (chord?: Chord) => void

  selectedVoicing?: Voicing
  setSelectedVoicing: (voicing?: Voicing) => void
}

export default createContext<Value>(undefined!)
