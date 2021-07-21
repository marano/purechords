import React from 'react';
import styled from 'styled-components/macro';
import Note from './Note';

const Pointer = styled.div`
  cursor: pointer;
`;

export default function ClickableNote({ index, isHighlighted, onClick }) {
  return (
    <Pointer className={isHighlighted && 'highlighted'} onClick={onClick}>
      <Note index={index} />
    </Pointer>
  );
}
