import { createContext } from 'react'
import { ChordType, Note, Scale, ScaleDegree, Voicing } from '../types'

type Value = {
  selectedNote?: Note
  setSelectedNote: (note?: Note) => void

  selectedScale?: Scale
  setSelectedScale: (scale?: Scale) => void

  selectedChordType?: ChordType
  setSelectedChordType: (chordType?: ChordType) => void

  selectedScaleDegree?: ScaleDegree
  setSelectedScaleDegree: (chord?: ScaleDegree) => void

  selectedVoicing?: Voicing
  setSelectedVoicing: (voicing?: Voicing) => void
}

export default createContext<Value>(undefined!)
