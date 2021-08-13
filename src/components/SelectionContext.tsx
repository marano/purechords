import { createContext } from 'react'
import {
  ChordType,
  Note,
  Scale,
  ScaleDegree,
  Selection,
  Voicing,
} from '../types'

type Value = Selection & {
  selection: Selection,
  setSelectedNote: (note?: Note) => void
  setSelectedScale: (scale?: Scale) => void
  setSelectedChordType: (chordType?: ChordType) => void
  setSelectedScaleDegree: (chord?: ScaleDegree) => void
  setSelectedVoicing: (voicing?: Voicing) => void
}

export default createContext<Value>(undefined!)
