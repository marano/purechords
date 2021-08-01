import { Fret } from '../../types'
import { getNoteColor } from '../../utils/getNoteColor'
import getNoteName from '../../utils/getNoteName'
import FretContainer from './FretContainer'
import useGuitarArmContext from './useGuitarArmContext'

type Props = {
  fret: Fret
}

export default function GuitarFret({ fret }: Props) {
  const { getNote, isFretHighlighted } = useGuitarArmContext()

  const note = getNote(fret)
  const noteColor = getNoteColor(note)

  const isHighlighted = isFretHighlighted(fret)

  return (
    <FretContainer isOpenString={fret[1] === 0} color={getContainerColor()}>
      {getNoteName(note)}
    </FretContainer>
  )

  function getContainerColor() {
    if (isHighlighted) {
      return noteColor
    } else {
      return 'white'
    }
  }
}
