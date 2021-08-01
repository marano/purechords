import { useState, ReactNode } from 'react'
import { Note } from '../types'
import areNumberArraysEquals from '../utils/areNumberArraysEquals'
import SelectionContext from './SelectionContext'

type Props = {
  children: ReactNode
}

export default function SelectionProvider({ children }: Props) {
  const [selectedScaleNotes, setSelectedScaleNotes] = useState<Note[] | undefined>()
  const [selectedChord, setSelectedChord] = useState<Note[] | undefined>()

  const value = {
    selectedScaleNotes,
    setSelectedScaleNotes(noteSequence?: Note[]) {
      if (selectedScaleNotes && noteSequence && areNumberArraysEquals(selectedScaleNotes, noteSequence)) {
        setSelectedScaleNotes(undefined)
      } else {
        setSelectedScaleNotes(noteSequence)
      }
    },

    selectedChord,
    setSelectedChord(chord?: Note[]) {
      if (chord === selectedChord) {
        setSelectedChord(undefined)
      } else {
        setSelectedChord(chord)
      }
    }
  }

  return (
    <SelectionContext.Provider value={value}>
      {children}
    </SelectionContext.Provider>
  )
}