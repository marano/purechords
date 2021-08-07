import { useState, ReactNode } from 'react'
import { ChordType, Note, Scale, ScaleDegree, Voicing } from '../types'
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
    selectedScale,
    setSelectedScale,
  ] = useState<Scale | undefined>()

  const [
    selectedChordType,
    setSelectedChordType,
  ] = useState<ChordType | undefined>()

  const [
    selectedScaleDegree,
    setSelectedScaleDegree,
  ] = useState<ScaleDegree | undefined>()

  const [
    selectedVoicing,
    setSelectedVoicing,
  ] = useState<Voicing | undefined>()

  const value = {
    selectedNote,
    setSelectedNote,

    selectedScale,
    setSelectedScale,

    selectedChordType,
    setSelectedChordType,

    selectedScaleDegree,
    setSelectedScaleDegree,

    selectedVoicing,
    setSelectedVoicing,
  }

  return (
    <SelectionContext.Provider value={value}>
      {children}
    </SelectionContext.Provider>
  )
}
