import { ReactNode } from 'react'
import { Note } from '../types'
import SettingsContext from './SettingsContext'

type Props = {
  children: ReactNode
}

export default function SettingsProvider({ children }: Props) {
  const value = {
    strings: [Note.E, Note.A, Note.D, Note.G, Note.B, Note.E],
    fretCount: 21,
  }

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  )
}
