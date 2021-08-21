import { Fret } from '../../types'
import getChord from '../../utils/getChord'
import getChordInterval from '../../utils/getChordInterval'
import getIntervalName from '../../utils/getIntervalName'
import { getNoteColor } from '../../utils/getNoteColor'
import getNoteName from '../../utils/getNoteName'
import useSelectionContext from '../useSelectionContext'
import FretContainer from './FretContainer'
import RootCircle from './RootCircle'
import useGuitarContext from './useGuitarContext'

type Props = {
  fret: Fret
}

export default function GuitarFret({ fret }: Props) {
  const {
    selectedNote,
    selectedScale,
    selectedChordType,
    selectedScaleDegree,
  } = useSelectionContext()

  const {
    getNote,
    isFretHighlighted,
  } = useGuitarContext()

  const note = getNote(fret)

  const chordInterval = selectedNote !== undefined
    && selectedChordType !== undefined
    && selectedScale !== undefined
    && selectedScaleDegree !== undefined
    ? getChordInterval(
      selectedNote,
      selectedChordType,
      selectedScale,
      selectedScaleDegree,
      note
    )
    : undefined

  const noteColor = getNoteColor(note)

  const isHighlighted = isFretHighlighted(fret)
  const rootNote = getRootNote()
  const isRootNote = rootNote === note
  const isRootHighlighted = isRootNote && isHighlighted

  return (
    <FretContainer
      isOpenString={fret[1] === 0}
      color={getContainerColor()}
    >
      <RootCircle isHighlighted={isRootHighlighted}>
        {getNoteName(note)}
      </RootCircle>

      {getInterval()}
    </FretContainer>
  )

  function getInterval() {
    if (!isRootNote && isHighlighted && chordInterval !== undefined) {
      return getIntervalName(chordInterval)
    }
  }

  function getContainerColor() {
    if (isHighlighted) {
      return noteColor
    } else {
      return 'white'
    }
  }

  function getRootNote() {
    if (
      selectedNote !== undefined
      && selectedScale !== undefined
      && selectedChordType !== undefined
      && selectedScaleDegree !== undefined
    ) {
      const chord = getChord(
        selectedScale,
        selectedNote,
        selectedScaleDegree,
        selectedChordType
      )

      return chord[0]
    } else if (
      selectedNote !== undefined
      && selectedScale !== undefined
    ) {
      return selectedNote
    }
  }
}
