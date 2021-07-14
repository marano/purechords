import React from 'react';
import styled from 'styled-components/macro';
import { always, times } from 'ramda';
import GuitarString from './GuitarString';

const Grid = styled.div`
  display: grid;
  grid-template-columns: ${(props) => times(always('1fr'), props.columnCount).join(' ')};
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
