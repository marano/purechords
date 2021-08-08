import { Fret } from '../../types'
import getChord from '../../utils/getChord'
import { getNoteColor } from '../../utils/getNoteColor'
import getNoteName from '../../utils/getNoteName'
import useSelectionContext from '../useSelectionContext'
import FretContainer from './FretContainer'
import RootCircle from './RootCircle'
import useGuitarArmContext from './useGuitarArmContext'

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
  } = useGuitarArmContext()

  const note = getNote(fret)
  const noteColor = getNoteColor(note)

  const isHighlighted = isFretHighlighted(fret)
  const isRootNote = getIsRootNote()
  const isRootHighlighted = isRootNote && isHighlighted

  return (
    <FretContainer
      isOpenString={fret[1] === 0}
      color={getContainerColor()}
    >
      <RootCircle isHighlighted={isRootHighlighted}>
        {getNoteName(note)}
      </RootCircle>
    </FretContainer>
  )

  function getContainerColor() {
    if (isHighlighted) {
      return noteColor
    } else {
      return 'white'
    }
  }

  function getIsRootNote() {
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

      return chord[0] === note
    }

    if (
      selectedNote !== undefined
      && selectedScale !== undefined
    ) {
      return selectedNote === note
    }

    return false
  }
}
