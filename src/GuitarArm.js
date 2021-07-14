import React from 'react';
import styled from 'styled-components/macro';
import GuitarString from './GuitarString';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columnCount}, 1fr);};
  justify-items: center;
  place-items: center;
`;

export default function GuitarArm() {
  const fretCount = 13;

  return (
    <Grid columnCount={fretCount}>
      <GuitarString noteIndex={4} />
      <GuitarString noteIndex={11} />
      <GuitarString noteIndex={7} />
      <GuitarString noteIndex={2} />
      <GuitarString noteIndex={9} />
      <GuitarString noteIndex={4} />
    </Grid>
  );
}
