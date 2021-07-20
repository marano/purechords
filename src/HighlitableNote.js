import React from 'react';
import styled from 'styled-components/macro';
import Note from './Note';
import useHighlightedNote from './useHighlightedNote';

const Button = styled.div`
  cursor: pointer;

  &.highlighted {
    background-color: black;
    color: white;
  }
`;

export default function HighligthableNote({ index }) {
  const { setHighlightedNote } = useHighlightedNote();
  const { highlightedNote } = useHighlightedNote();

  return (
    <Button className={highlightedNote === index && 'highlighted'} onClick={onClick}>
      <Note index={index} />
    </Button>
  );

  function onClick() {
    setHighlightedNote(index);
  }
}
