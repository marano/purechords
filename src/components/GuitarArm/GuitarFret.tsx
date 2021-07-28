import styled from 'styled-components/macro';
import { getNoteColor, getNoteName } from '../../utils/notes';
import useSelectionContext from '../useSelectionContext';
import useGuitarArmContext from './useGuitarArmContext';

type ContainerProps = {
  color: string
  isOpenString: boolean
}

const Container = styled.div`
  background-color: ${(props: ContainerProps) => props.color} !important;

  margin-left: ${(props: ContainerProps) => props.isOpenString ? -2 : 0}px;
  margin-top: ${(props: ContainerProps) => props.isOpenString ? -2 : 0}px;
  margin-bottom: ${(props: ContainerProps) => props.isOpenString ? -2 : 0}px;
  padding-right: ${(props: ContainerProps) => props.isOpenString ? 2 : 0}px;
  padding-bottom: ${(props: ContainerProps) => props.isOpenString ? 2 : 0}px;
`

type Props = {
  stringIndex: number
  fretIndex: number
}

export default function GuitarFret({ stringIndex, fretIndex }: Props) {
  const { selectedNote, selectedScaleNotes } = useSelectionContext()
  const { getNote, isFretHighlighted } = useGuitarArmContext();

  const note = getNote(stringIndex, fretIndex);
  const noteColor = getNoteColor(note);

  const isHighlighted = isFretHighlighted(stringIndex, fretIndex)

  return (
    <Container isOpenString={fretIndex === 0} color={getContainerColor()}>
      {getNoteName(note)}
    </Container>
  );

  function getContainerColor() {
    if (selectedNote === null && !selectedScaleNotes) {
      return noteColor
    } else if (isHighlighted) {
      return noteColor
    } else {
      return 'white'
    }
  }
}
