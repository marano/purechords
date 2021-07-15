import React from 'react';
import styled from 'styled-components/macro';
import Note from './Note';
import useHighlightedNote from './useHighlightedNote';

const Button = styled.div`
  cursor: pointer;
`;

export default function HighligthableNote({ index }) {
  const { setHighlightedNote } = useHighlightedNote();

  return (
    <Button onClick={onClick}>
      <Note index={index} />
    </Button>
  );

  function onClick() {
    setHighlightedNote(index);
  }
}
