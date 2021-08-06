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

export default function GuitarArmProvider(
  { strings, children }: Props
) {
  const {
    selectedNote,
    selectedScale,
    selectedChord,
    selectedVoicing,
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
    if (
      selectedVoicing !== undefined
        && selectedChord !== undefined
    ) {
      const stringStart = 0
      const stringEnd = strings.length

      const fretStart = 0
      const fretEnd = 21

      const voicedChord = selectedVoicing.order
        .map(noteIndex => selectedChord[noteIndex])

      const rootFrets = getFrets(stringStart, stringEnd, fretStart, fretEnd)
        .filter(fret => getNote(fret) == voicedChord[0])

      return rootFrets.flatMap(
        rootFret => getChordFrets(rootFret, voicedChord, selectedVoicing.stringJumps)
      )
    }

    if (selectedChord !== undefined) {
      const stringStart = 0
      const stringEnd = strings.length

      const fretStart = 0
      const fretEnd = 21

      return getFrets(stringStart, stringEnd, fretStart, fretEnd)
        .filter(fret => selectedChord.includes(getNote(fret)))
    }

    if (
      selectedNote !== undefined
        && selectedScale !== undefined
    ) {
      const stringStart = 0
      const stringEnd = strings.length

      const fretStart = 0
      const fretEnd = 6

      const frets = getFrets(stringStart, stringEnd, fretStart, fretEnd)

      const selectedScaleNotes = getScaleNotes(
        selectedScale,
        selectedNote
      )

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

    if (selectedNote !== undefined) {
      const stringStart = 0
      const stringEnd = strings.length

      const fretStart = 0
      const fretEnd = 21

      const frets = getFrets(stringStart, stringEnd, fretStart, fretEnd)

      return frets.filter(
        fret => getNote(fret) === selectedNote
      )
    }

    return []
  }

  function isFretHighlighted(fret: Fret) {
    return highlightedFrets.some(highlightedFret => areNumberArraysEquals(fret, highlightedFret))
  }

  function getChordFrets(rootNoteFret: Fret, chord: Note[], stringJumps: number[]) {
    const fretEnd = 21

    const frets = chord.slice(1, chord.length).reduce((result, chordNote, index) => {
      const previousResult = index === 0 ? rootNoteFret : result[index - 1]

      if (previousResult === undefined) {
        return result
      }

      const stringStep = 1 + stringJumps[index + 1]

      const searchFrets = getFrets(
        previousResult[0] + stringStep,
        Math.min(strings.length, previousResult[0] + stringStep + 1),
        Math.max(0, previousResult[1] - 4),
        Math.min(fretEnd, previousResult[1] + 4)
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
