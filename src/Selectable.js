import React from 'react';
import styled from 'styled-components/macro';

const Pointer = styled.div`
  cursor: pointer;
`;

export default function Selectable({ isSelected, onSelect, children }) {
  return (
    <Pointer className={isSelected && 'highlighted'} onClick={onSelect}>
      {children}
    </Pointer>
  );
}
