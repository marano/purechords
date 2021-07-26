import React from 'react';
import styled from 'styled-components/macro';
import { getNoteColor, getNoteName } from '../notes';
import useSelectionContext from '../useSelectionContext';
import useGuitarArmContext from './useGuitarArmContext';

const Container = styled.div`
  background-color: ${props => props.color} !important;

  margin-left: ${props => props.isOpenString ? -2 : 0}px;
  margin-top: ${props => props.isOpenString ? -2 : 0}px;
  margin-bottom: ${props => props.isOpenString ? -2 : 0}px;
  padding-right: ${props => props.isOpenString ? 2 : 0}px;
  padding-bottom: ${props => props.isOpenString ? 2 : 0}px;
`

export default function GuitarFret({ stringIndex, fretIndex }) {
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
