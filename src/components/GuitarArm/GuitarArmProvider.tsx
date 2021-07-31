import { ReactNode } from 'react'
import { Fret, Note } from '../../types'
import addIntervalToNote from '../../utils/addIntervalToNotes'
import areNumberArraysEquals from '../../utils/areNumberArraysEquals'
import getFrets from '../../utils/getFrets'
import useSelectionContext from '../useSelectionContext'
import GuitarArmContext from './GuitarArmContext'

type Props = {
  strings: Note[]
  fretCount: number
  children: ReactNode
}

export default function GuitarArmProvider({ strings, fretCount, children }: Props) {
  const {
    selectedNote,
    selectedScaleNotes,
    selectedIntervalNotes,
    selectedChord
  } = useSelectionContext()

  const value = {
    getNote,
    isFretHighlighted,
  }

  const highlightedFrets = getHighlightedFrets()

  return (
    <GuitarArmContext.Provider value={value}>
      {children}
    </GuitarArmContext.Provider>
  )

  function getNote([stringIndex, fretIndex]: Fret) {
    return addIntervalToNote(strings[stringIndex], fretIndex)
  }

  function getHighlightedFrets(): Fret[] {
    if (selectedNote !== undefined) {
      const stringStart = 0
      const stringEnd = strings.length

      const fretStart = 0
      const fretEnd = fretCount

      const highlightedNotes = [selectedNote, ...(selectedIntervalNotes || [])]

      return getFrets(stringStart, stringEnd, fretStart, fretEnd)
        .filter(
          (fret) => highlightedNotes.includes(getNote(fret))
        )
    }

    if (selectedChord) {
      const stringStart = 0
      const stringEnd = strings.length

      const fretStart = 0
      const fretEnd = 21

      const frets = getFrets(stringStart, stringEnd, fretStart, fretEnd)

      return frets.filter(
        fret => selectedChord.includes(getNote(fret))
      )
    }

    if (selectedScaleNotes !== undefined) {
      const stringStart = 0
      const stringEnd = strings.length

      const fretStart = 0
      const fretEnd = 6

      const frets = getFrets(stringStart, stringEnd, fretStart, fretEnd)

      let currentScaleNote = 0

      return frets.filter(
        fret => {
          if (selectedScaleNotes[currentScaleNote] === getNote(fret)) {
            if (++currentScaleNote === selectedScaleNotes.length) {
              currentScaleNote = 0
            }
            return true
          }
        }
      )
    }

    return []
  }

  function isFretHighlighted(fret: Fret) {
    return highlightedFrets.some(highlightedFret => areNumberArraysEquals(fret, highlightedFret))
  }
}
