import { ReactNode } from 'react'
import { Fret, Note } from '../../types'
import addIntervalToNote from '../../utils/addIntervalToNotes'
import areNumberArraysEquals from '../../utils/areNumberArraysEquals'
import getFrets from '../../utils/getFrets'
import getScaleNotes from '../../utils/getScaleNotes'
import isNonNullable from '../../utils/isNonNullable'
import useSelectionContext from '../useSelectionContext'
import GuitarArmContext from './GuitarArmContext'

type Props = {
  strings: Note[]
  children: ReactNode
}

export default function GuitarArmProvider({ strings, children }: Props) {
  const {
    selectedScale,
    selectedChord,
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
    if (selectedChord) {
      const stringStart = 0
      const stringEnd = strings.length

      const fretStart = 0
      const fretEnd = 21

      const frets = getFrets(stringStart, stringEnd, fretStart, fretEnd)

      const rootNoteFrets = frets.filter(
        fret => getNote(fret) === selectedChord[0]
      )

      return rootNoteFrets.flatMap(
        rootNoteFret => getChordFrets(rootNoteFret, selectedChord)
      )
    }

    if (selectedScale !== undefined) {
      const stringStart = 0
      const stringEnd = strings.length

      const fretStart = 0
      const fretEnd = 6

      const frets = getFrets(stringStart, stringEnd, fretStart, fretEnd)

      const selectedScaleNotes = getScaleNotes(selectedScale)

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

  function getChordFrets(rootNoteFret: Fret, chord: Note[]) {
    const fretEnd = 21

    const frets = chord.slice(1, chord.length).reduce((result, chordNote, index) => {
      const previousResult = index === 0 ? rootNoteFret : result[index - 1]

      if (previousResult === undefined) {
        return result
      }

      const searchFrets = getFrets(
        previousResult[0] + 1,
        strings.length,
        Math.max(0, rootNoteFret[1] - 3),
        Math.min(fretEnd, rootNoteFret[1] + 3)
      )

      const fretFound = searchFrets.find(fret => getNote(fret) === chordNote)

      return [...result, fretFound]
    }, [] as (Fret | undefined)[])

    if (frets.every(isNonNullable)) {
      return [rootNoteFret, ...frets]
    } else {
      return []
    }
  }
}
