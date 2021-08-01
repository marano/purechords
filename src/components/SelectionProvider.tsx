import { useState, ReactNode } from 'react'
import { Interval, Note } from '../types'
import SelectionContext from './SelectionContext'

type Props = {
  children: ReactNode
}

export default function SelectionProvider({ children }: Props) {
  const [selectedScaleNotes, setSelectedScaleNotes] = useState<Note[] | undefined>()
  const [selectedChordType, setSelectedChordType] = useState<Interval[] | undefined>()
  const [selectedChord, setSelectedChord] = useState<Note[] | undefined>()

  const value = {
    selectedScaleNotes,
    setSelectedScaleNotes,
    selectedChordType,
    setSelectedChordType,
    selectedChord,
    setSelectedChord,
  }

  return (
    <SelectionContext.Provider value={value}>
      {children}
    </SelectionContext.Provider>
  )
}