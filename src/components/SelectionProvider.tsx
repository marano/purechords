import { useState, ReactNode } from 'react'
import { Note } from '../types'
import SelectionContext from './SelectionContext'

type Props = {
  children: ReactNode
}

export default function SelectionProvider({ children }: Props) {
  const [selectedScaleNotes, setSelectedScaleNotes] = useState<Note[] | undefined>()
  const [selectedChord, setSelectedChord] = useState<Note[] | undefined>()

  const value = {
    selectedScaleNotes,
    setSelectedScaleNotes,
    selectedChord,
    setSelectedChord
  }

  return (
    <SelectionContext.Provider value={value}>
      {children}
    </SelectionContext.Provider>
  )
}