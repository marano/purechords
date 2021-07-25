import React from 'react';
import styled from 'styled-components/macro';
import NoteName from './NoteName';

const Pointer = styled.div`
  cursor: pointer;
`;

export default function ClickableNoteName({ note, isHighlighted, onClick }) {
  return (
    <Pointer className={isHighlighted && 'highlighted'} onClick={onClick}>
      <NoteName note={note} />
    </Pointer>
  );
}
