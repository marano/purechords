import { useState, ReactNode } from 'react'
import { ChordType, Interval, Note, Scale } from '../types'
import SelectionContext from './SelectionContext'

type Props = {
  children: ReactNode
}

export default function SelectionProvider({ children }: Props) {
  const [
    selectedScaleIntervals,
    setSelectedScaleIntervals,
  ] = useState<Interval[] | undefined>()

  const [
    selectedScale,
    setSelectedScale,
  ] = useState<Scale | undefined>()

  const [
    selectedChordType,
    setSelectedChordType,
  ] = useState<ChordType | undefined>()

  const [
    selectedChord,
    setSelectedChord,
  ] = useState<Note[] | undefined>()

  const [
    selectedVoicing,
    setSelectedVoicing,
  ] = useState<number[] | undefined>()

  const value = {
    selectedScaleIntervals,
    setSelectedScaleIntervals(intervals?: Interval[]) {
      setSelectedScale(undefined)
      setSelectedChord(undefined)
      setSelectedScaleIntervals(intervals)
    },

    selectedScale,
    setSelectedScale,

    selectedChordType,
    setSelectedChordType(chordType?: ChordType) {
      setSelectedChord(undefined)
      setSelectedChordType(chordType)
    },

    selectedChord,
    setSelectedChord,

    selectedVoicing,
    setSelectedVoicing,
  }

  return (
    <SelectionContext.Provider value={value}>
      {children}
    </SelectionContext.Provider>
  )
}