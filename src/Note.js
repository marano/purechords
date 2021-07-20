import React from 'react';
import styled from 'styled-components/macro';
import { getNoteName, rotateNoteIndex } from './notes';
import useHighlightedNote from './useHighlightedNote';

const Highlight = styled.span`
  background-color: yellow;
`;

export default function Note({ index }) {
  const { highlightedNote } = useHighlightedNote();

  const rotatedNoteIndex = rotateNoteIndex(index);

  if (highlightedNote === rotatedNoteIndex) {
    return <Highlight>{getNoteName(rotatedNoteIndex)}</Highlight>;
  } else {
    return getNoteName(rotatedNoteIndex);
  }
}
