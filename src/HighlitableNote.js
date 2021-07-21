import React from 'react';
import styled from 'styled-components/macro';
import Note from './Note';
import useHighlightedNote from './useHighlightedNote';

const Pointer = styled.div`
  cursor: pointer;
`;

export default function HighligthableNote({ index }) {
  const { highlightedNote, setHighlightedNote } = useHighlightedNote();

  const isHighlighted = highlightedNote === index;

  return (
    <Pointer className={isHighlighted && 'highlighted'} onClick={onClick}>
      <Note index={index} />
    </Pointer>
  );

  function onClick() {
    setHighlightedNote(index);
  }
}
