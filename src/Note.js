import React from 'react';
import styled from 'styled-components/macro';
import { getNoteName } from './notes';
import useHighlightedNote from './useHighlightedNote';

const Highlight = styled.span`
  background-color: yellow;
`;

export default function Note({ index }) {
  const { highlightedNote } = useHighlightedNote();

  if (highlightedNote === index) {
    return <Highlight>{getNoteName(index)}</Highlight>;
  } else {
    return getNoteName(index);
  }
}
