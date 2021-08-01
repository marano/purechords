import { useState, ReactNode } from 'react'
import { Interval, Note, Scale } from '../types'
import SelectionContext from './SelectionContext'

type Props = {
  children: ReactNode
}

export default function SelectionProvider({ children }: Props) {
  const [
    selectedScale,
    setSelectedScale,
  ] = useState<Scale | undefined>()

  const [
    selectedChordType,
    setSelectedChordType,
  ] = useState<Interval[] | undefined>()

  const [
    selectedChord,
    setSelectedChord,
  ] = useState<Note[] | undefined>()

  const value = {
    selectedScale,
    setSelectedScale,

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