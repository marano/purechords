import { range } from 'ramda';
import React from 'react';
import styled from 'styled-components/macro';
import GuitarArmProvider from './GuitarArmProvider';
import GuitarString from './GuitarString';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columnCount}, 1fr);
  justify-items: center;
  place-items: center;
  grid-gap: 0px;

  > div {
    align-self: strech;
    justify-self: strech;
    border: 1px solid black;
    width: 100%;
    text-align: center;

    &.open-string {
      border 0;
      text-align: right;
      padding-right: 30px;
    }
  }
`;

export default function GuitarArm({ strings, fretCount }) {
  const stringIndexes = range(0, strings.length);

  return (
    <GuitarArmProvider strings={strings} fretCount={fretCount}>
      <Grid columnCount={fretCount}>
        {stringIndexes.map(
          (stringIndex) => <GuitarString key={stringIndex} stringIndex={stringIndex} />,
        )}
      </Grid>
    </GuitarArmProvider>
  );
}
