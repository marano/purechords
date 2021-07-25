import React from 'react';
import styled from 'styled-components/macro';
import Note from './Note';

const Pointer = styled.div`
  cursor: pointer;
`;

export default function ClickableNote({ note, isHighlighted, onClick }) {
  return (
    <Pointer className={isHighlighted && 'highlighted'} onClick={onClick}>
      <Note note={note} />
    </Pointer>
  );
}
