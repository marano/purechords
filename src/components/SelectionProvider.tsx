import { useState, ReactNode } from 'react'
import { ChordType, Interval, Note, Voicing } from '../types'
import SelectionContext from './SelectionContext'

type Props = {
  children: ReactNode
}

export default function SelectionProvider({ children }: Props) {
  const [
    selectedNote,
    setSelectedNote,
  ] = useState<Note | undefined>()

  const [
    selectedScaleIntervals,
    setSelectedScaleIntervals,
  ] = useState<Interval[] | undefined>()

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
  ] = useState<Voicing | undefined>()

  const value = {
    selectedNote,
    setSelectedNote,

    selectedScaleIntervals,
    setSelectedScaleIntervals(intervals?: Interval[]) {
      setSelectedChord(undefined)
      setSelectedScaleIntervals(intervals)
    },

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