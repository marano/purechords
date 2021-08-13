import { ReactNode } from 'react'
import { Fret, Note } from '../../types'
import addIntervalToNote from '../../utils/addIntervalToNotes'
import areNumberArraysEquals from '../../utils/areNumberArraysEquals'
import getChord from '../../utils/getChord'
import getFrets from '../../utils/getFrets'
import getScaleNotes from '../../utils/getScaleNotes'
import getVoicedChord from '../../utils/getVoicedChord'
import isNonNullable from '../../utils/isNonNullable'
import useSelectionContext from '../useSelectionContext'
import useSettingsContext from '../useSettingsContext'
import GuitarContext from './GuitarContext'

type Props = {
  children: ReactNode
}

export default function GuitarProvider(
  { children }: Props
) {
  const { strings, fretCount } = useSettingsContext()

  const {
    selectedNote,
    selectedScale,
    selectedChordType,
    selectedScaleDegree,
    selectedVoicing,
  } = useSelectionContext()

  const value = {
    getNote,
    isFretHighlighted,
  }

  const highlightedFrets = getHighlightedFrets()

  return (
    <GuitarContext.Provider value={value}>
      {children}
    </GuitarContext.Provider>
  )

  function getNote([stringIndex, fretIndex]: Fret) {
    return addIntervalToNote(strings[stringIndex], fretIndex)
  }

  function getHighlightedFrets(): Fret[] {
    if (
      selectedNote !== undefined
        && selectedScale !== undefined
        && selectedChordType !== undefined
        && selectedScaleDegree !== undefined
        && selectedVoicing !== undefined
    ) {
      const stringStart = 0
      const stringEnd = strings.length

      const fretStart = 0
      const fretEnd = fretCount

      const chord = getChord(
        selectedScale,
        selectedNote,
        selectedScaleDegree,
        selectedChordType
      )

      const voicedChord =getVoicedChord(chord, selectedVoicing)

      const rootFrets = getFrets(stringStart, stringEnd, fretStart, fretEnd)
        .filter(fret => getNote(fret) == voicedChord[0])

      return rootFrets.flatMap(
        rootFret => getChordFrets(
          rootFret,
          voicedChord,
          selectedVoicing.stringJumps
        )
      )
    }

    if (
      selectedNote !== undefined
        && selectedScale !== undefined
        && selectedChordType !== undefined
        && selectedScaleDegree !== undefined
    ) {
      const stringStart = 0
      const stringEnd = strings.length

      const fretStart = 0
      const fretEnd = fretCount

      const chord = getChord(
        selectedScale,
        selectedNote,
        selectedScaleDegree,
        selectedChordType
      )

      return getFrets(stringStart, stringEnd, fretStart, fretEnd)
        .filter(fret => chord.includes(getNote(fret)))
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
      const fretEnd = fretCount

      const frets = getFrets(stringStart, stringEnd, fretStart, fretEnd)

      return frets.filter(
        fret => getNote(fret) === selectedNote
      )
    }

    return []
  }

  function isFretHighlighted(fret: Fret) {
    return highlightedFrets.some(
      highlightedFret => areNumberArraysEquals(fret, highlightedFret)
    )
  }

  function getChordFrets(
    rootNoteFret: Fret,
    chord: Note[],
    stringJumps: number[]
  ) {
    const fretEnd = fretCount

    const frets = chord
      .slice(1, chord.length)
      .reduce((result, chordNote, index) => {
        const previousResult = index === 0 ? rootNoteFret : result[index - 1]

        if (previousResult === undefined) {
          return result
        }

        const stringStep = 1 + stringJumps[index + 1]

        const [previousString, previousFret] = previousResult

        const searchFrets = getFrets(
          previousString + stringStep,
          Math.min(strings.length, previousString + stringStep + 1),
          Math.max(0, previousFret - 6),
          Math.min(fretEnd, previousFret + 6)
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
