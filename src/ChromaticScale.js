import React from 'react';
import styled from 'styled-components/macro';
import HighligthableNote from './HighlitableNote';
import { noteIndexes } from './notes';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columnCount}, 1fr);
  justify-items: center;
  place-items: center;
  grid-gap: 0px;

  div {
    border: 1px solid black;
    width: 100%;
    text-align: center;
  }
`;

export default function ChromaticScale() {
  return (
    <Grid columnCount={12}>
      {noteIndexes.map(
        (noteIndex) => <HighligthableNote key={noteIndex} index={noteIndex} />,
      )}
    </Grid>
  );
}
