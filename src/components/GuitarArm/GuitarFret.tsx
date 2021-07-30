import styled from 'styled-components/macro';
import { Fret } from '../../types';
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
  fret: Fret
}

export default function GuitarFret({ fret }: Props) {
  const { selectedNote, selectedScaleNotes } = useSelectionContext()
  const { getNote, isFretHighlighted } = useGuitarArmContext();

  const note = getNote(fret);
  const noteColor = getNoteColor(note);

  const isHighlighted = isFretHighlighted(fret)

  return (
    <Container isOpenString={fret[1] === 0} color={getContainerColor()}>
      {getNoteName(note)}
    </Container>
  );

  function getContainerColor() {
    if (selectedNote === undefined && !selectedScaleNotes) {
      return noteColor
    } else if (isHighlighted) {
      return noteColor
    } else {
      return 'white'
    }
  }
}
